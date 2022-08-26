<template>
	<a :href="href" target="_blank" rel="noopener noreferrer" class="hover:underline underline-offset-2">
		{{ text ?? href }}
	</a>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string }>();
</script>
