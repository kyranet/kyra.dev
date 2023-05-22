<template>
	<button class="px-6 py-2 rounded" :class="types[type ?? 'none']">
		<nuxt-link :to="href" target="_blank">
			{{ text ?? href }}
		</nuxt-link>
	</button>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string; type?: keyof typeof types }>();

const types = {
	none: 'bg-zinc-200 hover:bg-zinc-100 dark:bg-slate-200 hover:dark:bg-slate-50 dark:text-zinc-800',
	info: 'bg-indigo-500 hover:bg-indigo-600'
};
</script>
