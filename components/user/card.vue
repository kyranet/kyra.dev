<template>
	<div class="w-[300px] drop-shadow-xl dark:text-slate-200">
		<div class="h-full overflow-hidden rounded-2xl bg-slate-50 dark:bg-zinc-900">
			<!-- headerWrapper -->
			<div class="relative">
				<!-- banner -->
				<picture>
					<source type="image/webp" srcset="/images/banner.webp" />
					<source type="image/gif" srcset="/images/banner.gif" />
					<img src="/images/banner.gif" alt="banner" width="300" height="120" aria-hidden="true" draggable="false" class="block" />
				</picture>
				<!-- avatarWrapperNormal -->
				<div class="absolute left-[16px] top-[76px]">
					<!-- avatarWrapperTarget -->
					<div class="rounded-full">
						<user-card-avatar :status="user.discord_status" />
					</div>
				</div>
			</div>

			<!-- headerTop -->
			<div class="px-4 pb-3 pt-16">
				<!-- headerText -->
				<div class="flex items-center text-xl font-semibold leading-6 text-zinc-900 dark:text-slate-50">
					<AtSymbolIcon class="h-5 w-5" />
					kyranet
				</div>

				<!-- profileBadges -->
				<div aria-label="User Badges" role="list"></div>
			</div>

			<!-- body -->
			<div class="flex-initial px-4 pb-3.5 text-sm">
				<!-- customStatus -->
				<div class="pb-2.5">
					<img
						src="https://cdn.discordapp.com/emojis/886787117630509096.webp?size=44&quality=lossless"
						iara-label=":iara_snuggie:"
						alt="iara_snuggie"
						draggable="false"
						class="float-left -my-px mr-1 h-5 w-5"
					/>
					<external-link href="https://en.pronouns.page/@kyranet" />
				</div>

				<!-- divider -->
				<div class="mb-3 h-[1px] w-full bg-slate-200 dark:bg-zinc-800"></div>
				<user-card-info />
				<user-card-dates />
				<user-card-activity v-if="activity" :data="activity" />
				<user-card-roles />
				<user-card-note />

				<user-card-message />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { AtSymbolIcon } from '@heroicons/vue/24/outline';
import type { LanyardIncomingPayload } from '~~/composables/use-user';

const user = useUser();
const config = useRuntimeConfig();
const activity = computed(() => user.value.activities.find((activity) => activity.assets));

if (process.client) {
	let heartbeatInterval = -1;
	const { data, send } = useWebSocket<string>('wss://api.lanyard.rest/socket', {
		autoReconnect: true,
		onConnected: () => console.info('[WS] Successfully connected'),
		onError: (_, event) => console.error('[WS] Received error: ', event),
		onDisconnected: (_, event) => console.error('[WS] Closed with code %d. Retrying in 1 second.', event.code)
	});
	watch(data, (string) => {
		if (!string) return;

		const data = JSON.parse(string) as LanyardIncomingPayload;
		switch (data.op) {
			case LanyardOpcode.Event: {
				user.value = data.d;
				break;
			}
			case LanyardOpcode.Hello: {
				if (heartbeatInterval !== -1) window.clearInterval(heartbeatInterval);
				heartbeatInterval = window.setInterval(() => send(JSON.stringify({ op: LanyardOpcode.Heartbeat })), data.d.heartbeat_interval);

				send(
					JSON.stringify({
						op: 2,
						d: { subscribe_to_id: config.public.DISCORD_USER_ID }
					})
				);
				break;
			}
			default: {
				console.info('[WS] Unknown message:', data);
			}
		}
	});
}
</script>
