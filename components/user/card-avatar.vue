<template>
	<!-- avatar -->
	<div
		role="img"
		aria-label="kyra, avatar"
		aria-hidden="false"
		class="w-[92px] h-[92px] border-[6px] relative rounded-full border-slate-50 dark:border-zinc-900"
	>
		<!-- mask -->
		<svg width="92" height="80" viewBox="0 0 92 80" class="absolute">
			<defs>
				<mask id="avatar-mask">
					<circle cx="40" cy="40" r="40" fill="white" />
					<circle cx="68" cy="68" r="14" fill="black" />
				</mask>
			</defs>

			<foreignObject x="0" y="0" width="80" height="80" mask="url(#avatar-mask)">
				<!-- avatarStack -->
				<div class="grid w-full h-full">
					<picture>
						<source
							srcset="https://cdn.discordapp.com/avatars/242043489611808769/c3b5e662c664a61158b50b9f23520411.webp?size=128,
								https://cdn.discordapp.com/avatars/242043489611808769/c3b5e662c664a61158b50b9f23520411.webp?size=256 x2,
								https://cdn.discordapp.com/avatars/242043489611808769/c3b5e662c664a61158b50b9f23520411.webp?size=512 x4"
							type="image/webp"
						/>
						<source
							srcset="https://cdn.discordapp.com/avatars/242043489611808769/c3b5e662c664a61158b50b9f23520411.png?size=128,
								https://cdn.discordapp.com/avatars/242043489611808769/c3b5e662c664a61158b50b9f23520411.png?size=256 x2,
								https://cdn.discordapp.com/avatars/242043489611808769/c3b5e662c664a61158b50b9f23520411.png?size=512 x4"
							type="image/png"
						/>
						<img
							src="https://cdn.discordapp.com/avatars/242043489611808769/c3b5e662c664a61158b50b9f23520411.png?size=80"
							alt="avatar"
							width="80"
							height="80"
							aria-hidden="true"
							draggable="false"
							class="block"
						/>
					</picture>
				</div>
			</foreignObject>
			<circle cx="68" cy="68" r="8" :class="statusClasses[status]"></circle>
		</svg>
	</div>
</template>

<script setup lang="ts">
import { Status } from '~~/composables/use-user';

defineProps<{ status: Status }>();

const statusClasses = {
	online: 'fill-green-600',
	idle: 'fill-amber-400',
	dnd: 'fill-red-700',
	offline: 'fill-slate-500'
} as const;
</script>
