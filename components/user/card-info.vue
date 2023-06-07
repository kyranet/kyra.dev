<template>
	<div class="mb-3">
		<h2 class="mb-2 text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">About Me</h2>

		<!-- userInfoBody -->
		<section role="list">
			<div role="listitem">
				<IconsTransgenderFlag aria-label="Transgender ·" draggable="false" />
				{{ 'She/Her ·' }}
				<external-link href="https://www.16personalities.com/infp-personality" text="INFP-T" />
				{{ ' · 24' }}
			</div>

			<div role="listitem">
				<IconsFramePhoto aria-hidden="true" draggable="false" />
				{{ ' Avatar: ' }}
				<external-link href="https://twitter.com/paxiti" text="@paxiti" />
				{{ ' · Banner: ' }}
				<external-link href="https://www.tumblr.com/1041uuu" text="1041uuu" />
			</div>

			<div class="mt-5" role="listitem">
				<IconsSmallBlueDiamond draggable="false" aria-hidden="true" />
				<external-link class="pl-1" href="https://github.com/skyra-project" text="Skyra" />{{ "'s Project Owner" }}
			</div>

			<div role="listitem">
				<IconsSmallBlueDiamond draggable="false" aria-hidden="true" />
				<external-link class="pl-1" href="https://github.com/discordjs" text="Discord.js" />{{ ' Core Maintainer' }}
			</div>

			<div role="listitem">
				<IconsSmallBlueDiamond draggable="false" aria-hidden="true" />
				<external-link class="pl-1" href="https://github.com/sapphiredev" text="Sapphire" />{{ "'s Lead Programmer & Architect\n" }}
			</div>
		</section>
	</div>
</template>
