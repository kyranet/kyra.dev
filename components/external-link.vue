<template>
	<nuxt-link :to="href" target="_blank" class="underline-offset-2 hover:underline">
		<slot>{{ href }}</slot>
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>
