<template>
	<nuxt-link is="button" :to="href" target="_blank" class="rounded px-6 py-2" :class="types[type ?? 'none']">
		{{ text ?? href }}
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string; type?: keyof typeof types }>();

const types = {
	none: 'bg-zinc-200 hover:bg-zinc-100 dark:bg-slate-200 hover:dark:bg-slate-50 dark:text-zinc-800',
	info: 'bg-indigo-500 hover:bg-indigo-600'
};
</script>
