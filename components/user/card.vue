<template>
	<div class="w-[300px] dark:text-slate-200 drop-shadow-xl font-['Whitney']">
		<div class="h-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-zinc-900">
			<!-- headerWrapper -->
			<div class="relative">
				<!-- banner -->
				<div
					class="w-full h-[120px] bg-center bg-[url('https://cdn.discordapp.com/banners/242043489611808769/a_b00d7152c6a78089b3f2e71276585641.gif?size=300')]"
				></div>
				<!-- avatarWrapperNormal -->
				<div class="absolute top-[76px] left-[16px]">
					<!-- avatarWrapperTarget -->
					<div class="rounded-full">
						<!-- avatar -->
						<div
							role="img"
							aria-label="kyra, avatar"
							aria-hidden="false"
							class="w-[92px] h-[92px] border-[6px] relative rounded-full border-slate-50 dark:border-zinc-900"
						>
							<!-- mask -->
							<svg width="92" height="80" viewBox="0 0 92 80" class="absolute">
								<defs>
									<mask id="avatar-mask">
										<circle cx="40" cy="40" r="40" fill="white" />
										<circle cx="68" cy="68" r="14" fill="black" />
									</mask>
								</defs>

								<foreignObject x="0" y="0" width="80" height="80" mask="url(#avatar-mask)">
									<!-- avatarStack -->
									<div class="grid w-full h-full">
										<img
											src="https://cdn.discordapp.com/avatars/242043489611808769/c3b5e662c664a61158b50b9f23520411.webp?size=80"
											alt="avatar"
											aria-hidden="true"
											draggable="false"
											class="block"
										/>
									</div>
								</foreignObject>
								<circle cx="68" cy="68" r="8" class="fill-green-600"></circle>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<!-- headerTop -->
			<div class="pt-16 pb-3 px-4">
				<!-- headerText -->
				<div class="text-xl font-semibold leading-6">
					<span class="text-zinc-900 dark:text-slate-50">kyra</span>
					<span class="dark:text-slate-300">#0001</span>
				</div>

				<!-- profileBadges -->
				<div aria-label="User Badges"></div>
			</div>

			<!-- body -->
			<div class="px-4 pb-3.5 flex-initial text-sm">
				<!-- customStatus -->
				<div class="pb-2.5">
					<img
						src="https://cdn.discordapp.com/emojis/886787117630509096.webp?size=44&quality=lossless"
						iara-label=":iara_snuggie:"
						alt="iara_snuggie"
						draggable="false"
						class="w-5 h-5 -my-px mr-1 float-left"
					/>
					<external-link href="https://en.pronouns.page/@kyranet" />
				</div>

				<!-- divider -->
				<div class="w-full h-[1px] bg-slate-200 dark:bg-zinc-800 mb-3"></div>
				<user-info />
				<user-roles />
				<user-note />

				<user-card-message />
			</div>
		</div>
	</div>
</template>
