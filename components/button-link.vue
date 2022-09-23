<template>
	<nuxt-link :to="href" target="_blank" class="text-white py-2 px-6 focus:outline-none rounded" :class="types[type ?? 'none']">
		{{ text ?? href }}
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string; type?: keyof typeof types }>();

const types = {
	none: 'bg-zinc-700 hover:bg-zinc-800 dark:bg-slate-200 dark:hover:bg-slate-50 dark:text-zinc-800',
	info: 'bg-indigo-500 hover:bg-indigo-600'
};
</script>
