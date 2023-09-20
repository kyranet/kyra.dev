<template>
	<div class="mb-3">
		<h2 class="mb-2 text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">About Me</h2>

		<!-- userInfoBody -->
		<section role="list">
			<div role="listitem">
				<IconsTransgenderFlag aria-label="Transgender ·" draggable="false" />
				{{ ' ' }}
				<external-link href="https://pronouns.org/she-her">She/Her</external-link>
				{{ ' ·' }}
				<external-link href="https://www.16personalities.com/infp-personality">INFP-T</external-link>
				{{ ' · 25' }}
			</div>

			<div role="listitem">
				<IconsFramePhoto aria-hidden="true" draggable="false" />
				{{ ' Avatar: ' }}
				<external-link href="https://twitter.com/paxiti">@paxiti</external-link>
				{{ ' · Banner: ' }}
				<external-link href="https://www.tumblr.com/1041uuu">1041uuu</external-link>
			</div>

			<div class="mt-5" role="listitem">
				<IconsSmallBlueDiamond draggable="false" aria-hidden="true" />
				<external-link class="pl-1" href="https://github.com/skyra-project">Skyra</external-link>{{ "'s Project Owner" }}
			</div>

			<div role="listitem">
				<IconsSmallBlueDiamond draggable="false" aria-hidden="true" />
				<external-link class="pl-1" href="https://github.com/discordjs">Discord.js</external-link>{{ ' Core Maintainer' }}
			</div>

			<div role="listitem">
				<IconsSmallBlueDiamond draggable="false" aria-hidden="true" />
				<external-link class="pl-1" href="https://github.com/sapphiredev">Sapphire</external-link>{{ "'s Lead Programmer" }}
			</div>
		</section>
	</div>
</template>
