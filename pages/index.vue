<template>
	<section class="body-font">
		<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
			<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
				<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">Aura Román</h1>
				<p class="mb-8 leading-relaxed">
					Videogame Development student at UCM. Fast learner and enthusiast programmer in JS, TS, C#, C++, and Rust.
				</p>
				<div class="flex justify-center">
					<button-link href="https://github.com/kyranet" text="GitHub" />
					<button-link href="https://twitter.com/kyranet_" text="Twitter" class="ml-2" />
				</div>
			</div>

			<user-card />
		</div>
	</section>
</template>
