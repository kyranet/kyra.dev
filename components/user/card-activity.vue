<template>
	<div class="mb-3">
		<h2 class="mb-2 text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">Playing a game</h2>

		<!-- bodyNormal -->
		<div class="flex items-center">
			<!-- assets -->
			<div class="relative self-start">
				<img
					v-if="spotifyImageUrl" 
					:src="spotifyImageUrl" 
					:alt="data.assets!.large_text" 
					width="60" 
					height="60"
					class="block rounded-lg object-cover" 
					:class="{ 'large-mask': data.assets!.small_text }" />
				<img 
					v-else-if="data.assets!.large_text"
					:src="`https://cdn.discordapp.com/app-assets/${data.application_id}/${data.assets!.large_image}.png`"
					:alt="data.assets!.large_text" 
					width="60" 
					height="60" 
					class="block rounded-lg object-cover"
					:class="{ 'large-mask': data.assets!.small_text }" />
				<img v-if="data.assets!.small_text"
					:src="`https://cdn.discordapp.com/app-assets/${data.application_id}/${data.assets!.small_image}.png`"
					:alt="data.assets!.small_text" 
					width="20" 
					height="20"
					class="absolute -bottom-1 -right-1 rounded-full" />
			</div>

			<!-- content -->
			<div class="ml-2.5 flex-auto overflow-hidden">
				<div class="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
					{{ data.name }}
				</div>
				<div v-if="data.details" class="block overflow-hidden text-ellipsis whitespace-nowrap">
					{{ data.details }}
				</div>
				<div v-if="data.state" class="block overflow-hidden text-ellipsis whitespace-nowrap">
					{{ data.state }}
				</div>
				<div v-if="elapsed && !spotifyImageUrl" class="block overflow-hidden text-ellipsis whitespace-nowrap">{{ elapsed }} elapsed</div>
			</div>
		</div>
		<user-card-seekbar 
			v-if="spotifyImageUrl"
			:start-time-ms="data.timestamps!.start!"
			:end-time-ms="data.timestamps!.end!"
		/>

		<!-- buttons -->
		<div v-if="data.buttons?.length" class="mt-3 flex flex-initial flex-col flex-wrap items-stretch justify-start">
			<button
				v-for="button in data.buttons"
				:key="typeof button === 'string' ? button : button.label"
				class="relative flex h-8 w-auto items-center justify-center rounded bg-zinc-500 text-sm text-white transition-colors dark:bg-zinc-600"
				:class="typeof button === 'string' ? 'opacity-70' : 'hover:bg-zinc-600 hover:dark:bg-zinc-500'"
				:disabled="typeof button === 'string'"
			>
				<div class="block overflow-hidden text-ellipsis whitespace-nowrap">
					{{ button }}
				</div>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { GatewayActivity } from 'discord-api-types/payloads/v10';
import { formatTime } from '~/utils/format-time';

const props = defineProps<{ data: GatewayActivity }>();
const elapsed = useState<string | null>('user-card-activity-elapsed', () => formatTime(props.data.timestamps?.start!, Date.now()));
window.setInterval(() => (elapsed.value = formatTime(props.data.timestamps?.start!, Date.now())), 1000);

const spotifyImageUrl = computed(() => {
	if (props.data.id === 'spotify:1') {
		return `https://i.scdn.co/image/${props.data.assets?.large_image!.replace('spotify:', '')}`;
	}
	return null;
});
</script>

<style scoped>
.large-mask {
	mask: url(/assets/masks/card-activity-large.svg);
}
</style>
