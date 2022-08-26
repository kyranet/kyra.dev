<template>
	<div class="mb-3">
		<h2 class="font-bold text-xs text-zinc-800 dark:text-slate-300 leading-4 mb-2 uppercase">About Me</h2>

		<!-- userInfoBody -->
		<div class="whitespace-pre-line">
			<span class="inline-block">
				<img src="~/assets/icons/transgender-flag.svg" alt="transgender-flag" class="w-5 h-5 inline-block align-bottom" draggable="false" />
			</span>
			{{ ' She/Her · ' }}
			<external-link href="https://www.16personalities.com/infp-personality" text="INFP" />{{ '-T · 23\n' }}

			<span class="inline-block">
				<img src="~/assets/icons/frame-photo.svg" alt="frame-photo" class="w-5 h-5 inline-block align-bottom" draggable="false" />
			</span>
			{{ ' Avatar: ' }}
			<external-link href="https://twitter.com/paxiti" text="@paxiti" />
			{{ ' · Banner: ' }}
			<external-link href="https://www.tumblr.com/1041uuu" text="1041uuu" />
			{{ '\n\n' }}

			<span class="inline-block">
				<img
					src="~/assets/icons/small-blue-diamond.svg"
					alt="small-blue-diamond"
					class="w-5 h-5 inline-block align-bottom"
					draggable="false"
				/>
			</span>
			{{ ' ' }}
			<external-link href="https://github.com/skyra-project" text="Skyra" />{{ "'s Project Owner\n" }}

			<span class="inline-block">
				<img
					src="~/assets/icons/small-blue-diamond.svg"
					alt="small-blue-diamond"
					class="w-5 h-5 inline-block align-bottom"
					draggable="false"
				/>
			</span>
			{{ ' ' }}
			<external-link href="https://github.com/discordjs" text="Discord.js" />{{ ' Core Maintainer\n' }}

			<span class="inline-block">
				<img
					src="~/assets/icons/small-blue-diamond.svg"
					alt="small-blue-diamond"
					class="w-5 h-5 inline-block align-bottom"
					draggable="false"
				/>
			</span>
			{{ ' ' }}
			<external-link href="https://github.com/sapphiredev" text="Sapphire" />{{ "'s Lead Programmer & Architect\n" }}
		</div>
	</div>
</template>
