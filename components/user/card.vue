<template>
	<div class="w-[300px] dark:text-slate-200 drop-shadow-xl font-['Whitney']">
		<div class="h-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-zinc-900">
			<!-- headerWrapper -->
			<div class="relative">
				<!-- banner -->
				<div
					class="w-full h-[120px] bg-center bg-[url('https://cdn.discordapp.com/banners/242043489611808769/a_b00d7152c6a78089b3f2e71276585641.gif?size=300')]"
				></div>
				<!-- avatarWrapperNormal -->
				<div class="absolute top-[76px] left-[16px]">
					<!-- avatarWrapperTarget -->
					<div class="rounded-full">
						<user-card-avatar :status="user.discord_status" />
					</div>
				</div>
			</div>

			<!-- headerTop -->
			<div class="pt-16 pb-3 px-4">
				<!-- headerText -->
				<div class="text-xl font-semibold leading-6">
					<span class="text-zinc-900 dark:text-slate-50">kyra</span>
					<span class="dark:text-slate-300">#0001</span>
				</div>

				<!-- profileBadges -->
				<div aria-label="User Badges" role="list"></div>
			</div>

			<!-- body -->
			<div class="px-4 pb-3.5 flex-initial text-sm">
				<!-- customStatus -->
				<div class="pb-2.5">
					<img
						src="https://cdn.discordapp.com/emojis/886787117630509096.webp?size=44&quality=lossless"
						iara-label=":iara_snuggie:"
						alt="iara_snuggie"
						draggable="false"
						class="w-5 h-5 -my-px mr-1 float-left"
					/>
					<external-link href="https://en.pronouns.page/@kyranet" />
				</div>

				<!-- divider -->
				<div class="w-full h-[1px] bg-slate-200 dark:bg-zinc-800 mb-3"></div>
				<user-info />
				<user-card-activity v-if="activity" :data="activity" />
				<user-roles />
				<user-note />

				<user-card-message />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { LanyardIncomingPayload, LanyardOpcode } from '~~/composables/use-user';

const user = useUser();
const config = useRuntimeConfig();
const activity = computed(() => user.value.activities.find((activity) => activity.assets));

function connect() {
	let heartbeatInterval = -1;
	const websocket = new WebSocket('wss://api.lanyard.rest/socket');

	websocket.onopen = () => console.info('[WS] Successfully connected');
	websocket.onerror = (event) => {
		console.error('[WS] Received error: ', event);
		websocket.close();
	};
	websocket.onclose = (event) => {
		console.error('[WS] Closed with code %d. Retrying in 1 second.', event.code);
		if (heartbeatInterval !== -1) {
			window.clearInterval(heartbeatInterval);
			heartbeatInterval = -1;
		}
		window.setTimeout(() => connect(), 1000);
	};
	websocket.onmessage = (event) => {
		const data = JSON.parse(event.data) as LanyardIncomingPayload;
		switch (data.op) {
			case LanyardOpcode.Event:
				user.value = data.d;
				break;
			case LanyardOpcode.Hello: {
				if (heartbeatInterval !== -1) window.clearInterval(heartbeatInterval);
				heartbeatInterval = window.setInterval(
					() => websocket.send(JSON.stringify({ op: LanyardOpcode.Heartbeat })),
					data.d.heartbeat_interval
				);

				websocket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: config.public.DISCORD_USER_ID } }));
				break;
			}
			default:
				console.info('[WS] Unknown message: %d', data);
		}
	};
}

connect();
</script>
