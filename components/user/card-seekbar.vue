<template>
	<div class="mt-3 text-xs">
		<div class="h-1 rounded-xl bg-neutral-700">
			<div class="bg-primary h-1 rounded-xl bg-white" :style="{ width: `${percentage}%` }"></div>
		</div>
		<div class="flex items-start justify-between">
			<div class="mb-0 mt-0.5 py-0">{{ currentPosition }}</div>
			<div class="mb-0 mt-0.5 py-0">{{ songDuration }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { formatTime } from '~/utils/format-time';
import { useClamp, createProjection } from '@vueuse/math';

const props = defineProps<{
	startTimeMs: number;
	endTimeMs: number;
}>();

const currentDateTime = useNow();

const currentPosition = computed(() => formatTime(props.startTimeMs, currentDateTime.value.getTime()));
const songDuration = computed(() => formatTime(props.startTimeMs, props.endTimeMs));
const useProjector = createProjection(() => [props.startTimeMs, props.endTimeMs], [0, 100]);
const percentage = useClamp(
	useProjector(() => currentDateTime.value.getTime()),
	0,
	100
);
</script>
