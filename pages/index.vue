<template>
	<section class="body-font">
		<div class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
			<div class="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
				<h1 class="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-gray-100 sm:text-4xl">Aura Román</h1>
				<p class="mb-8 leading-relaxed">
					Videogame Development student at UCM. Fast learner and enthusiast programmer in JS, TS, C#, C++, and Rust.
				</p>
				<div class="flex gap-2">
					<button-link href="https://github.com/kyranet" text="GitHub" />
					<button-link href="https://twitter.com/kyranet_" text="Twitter" />
				</div>
			</div>

			<user-card />
		</div>
	</section>
</template>
