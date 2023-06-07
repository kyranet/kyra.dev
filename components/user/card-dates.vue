<template>
	<div class="mb-3">
		<h2 class="mb-2 text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">Member Since</h2>

		<!-- userInfoBody -->
		<div class="flex items-center gap-x-2">
			<IconsDiscord class="h-5 w-5" draggable="false" aria-label="Joined Discord on" />
			{{ ' Oct 29, 2016' }}

			<div class="h-1 w-1 rounded-full bg-zinc-500 dark:bg-slate-600"></div>

			<IconsMap class="h-5 w-5" draggable="false" aria-label="Birthday on" />
			{{ ' Sep 21, 1998' }}
		</div>
	</div>
</template>
