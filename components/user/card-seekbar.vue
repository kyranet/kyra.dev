<template>
    <div class="text-[0.75rem] mt-3">
      <div class="bar h-1 bg-neutral-700 rounded-xl">
        <div class="progress h-1 bg-primary rounded-xl bg-white" :style="{ width: `${percentage}%` }"></div>
      </div>
      <div class="flex justify-between items-start">
        <div class="mb-0 mt-0.5 py-0 text-xs">{{ currentPosition }}</div>
        <div class="mb-0 mt-0.5 py-0 text-xs">{{ songDuration }}</div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { formatTime } from '~/utils/format-time';

const props = defineProps<{
    startTimeMs: number, 
    endTimeMs: number
}>();

const currentDateTime = useNow();

const currentPosition = computed(() => formatTime(props.startTimeMs, currentDateTime.value.getTime()));
const songDuration = computed(() => formatTime(props.startTimeMs, props.endTimeMs));
const percentage = computed(() => ((currentDateTime.value.getTime() - props.startTimeMs) / (props.endTimeMs - props.startTimeMs)) * 100);
  
</script>