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
const props = defineProps<{
    startTimeMs: number, 
    endTimeMs: number
}>();

const currentDateTime = useNow();

const currentPosition = computed(() => formatTime(props.startTimeMs, currentDateTime.value.getTime()));
const songDuration = computed(() => formatTime(props.startTimeMs, props.endTimeMs));
const percentage = computed(() => ((currentDateTime.value.getTime() - props.startTimeMs) / (props.endTimeMs - props.startTimeMs)) * 100);

const formatTime = (startTimeMs: number, endTimeMs: number) => {
    const secondAsMilliseconds = 1000;
    const minuteAsMilliseconds = secondAsMilliseconds * 60;
    const hourAsMilliseconds = minuteAsMilliseconds * 60;

    const distance = endTimeMs - startTimeMs;
    const seconds = Math.floor((distance / secondAsMilliseconds) % 60).toString().padStart(2, '0');
    let minutes = Math.floor((distance / minuteAsMilliseconds) % 60).toString()
    if (distance < hourAsMilliseconds) return `${minutes}:${seconds}`;

    minutes = minutes.padStart(2, '0');
    const hours = Math.floor(distance / hourAsMilliseconds).toString()
    return `${hours}:${minutes}:${seconds}`;
}
  
</script>