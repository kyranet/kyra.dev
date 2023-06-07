<template>
	<div class="relative flex w-full flex-wrap items-stretch rounded-lg bg-slate-200 p-3 dark:bg-zinc-800">
		<textarea
			class="flex-auto resize-none overflow-hidden rounded-r-none bg-transparent outline-0"
			placeholder="Message @kyra"
			aria-label="Send an email to Aura"
			v-model.trim="input"
			@input="handleInput"
			@keyup.ctrl.enter="submit"
		></textarea>
		<button class="ml-2 flex-none self-start" aria-label="Send" @click="submit" :disabled="!input">
			<PaperAirplaneIcon class="send w-8 p-1" />
		</button>
	</div>
	<div v-show="input" class="mt-1 text-right text-xs"><span class="font-bold text-indigo-500">Tip:</span> You can press Ctrl + Enter to send</div>
	<a href="#" ref="anchor" class="hidden" aria-hidden="true" rel="nofollow" target="_top"></a>
</template>

<script setup lang="ts">
import { PaperAirplaneIcon } from '@heroicons/vue/24/solid';

const input = ref('');
const anchor = ref<HTMLAnchorElement>();

function submit() {
	const element = anchor.value;
	if (!element) return;

	element.href = `mailto:kyradiscord@gmail.com?body=${encodeURIComponent(input.value)}`;
	element.click();
	input.value = '';
}

function handleInput(event: Event) {
	const target = event.target as HTMLTextAreaElement;
	target.style.removeProperty('height');
	target.style.height = `${target.scrollHeight + 2}px`;
}
</script>

<style scoped>
button > .send {
	@apply fill-zinc-600/50 dark:fill-zinc-300/50;
}

button:enabled > .send {
	@apply fill-zinc-600 hover:fill-zinc-800 dark:fill-zinc-300 hover:dark:fill-zinc-50;
}
</style>
