<template>
	<div class="container mx-4 mt-4 md:mx-auto">
		<nuxt-link
			href="/"
			is="button"
			class="flex w-fit flex-row items-center gap-2 rounded-lg bg-zinc-300 p-2 hover:bg-zinc-300/80 dark:bg-zinc-900 hover:dark:bg-zinc-900/80"
		>
			<ArrowLeftIcon class="h-5 w-5" />
			Home
		</nuxt-link>

		<div class="mt-4 flex flex-row gap-4 md:gap-12" :style="`--progress: ${totalElapsedDays};`">
			<div class="relative flex flex-row gap-1 rounded-lg bg-zinc-300 p-2 md:p-4 dark:bg-zinc-900">
				<div
					v-for="change of changes"
					:key="change.name"
					class="line"
					:class="{ complete: totalElapsedMonths >= change.peak[1] }"
					:title="change.name"
				>
					<div v-if="change.ranges[0]" class="line-part offset" :class="change.colors.bg" :style="`--months: ${change.ranges[0]};`"></div>
					<div v-if="change.ranges[1]" class="line-part start" :class="change.colors.bg" :style="`--months: ${change.ranges[1]};`"></div>
					<div v-if="change.ranges[2]" class="line-part progress" :class="change.colors.bg" :style="`--months: ${change.ranges[2]};`"></div>
					<div v-if="change.ranges[3]" class="line-part peak" :class="change.colors.bg" :style="`--months: ${change.ranges[3]};`"></div>
				</div>
			</div>

			<div>
				<section class="md:mt-12">
					<h1 class="text-3xl font-extrabold">
						<span class="text-sky-600 dark:text-sky-400">Hormone </span>
						<span>Replacement </span>
						<span class="text-pink-600 dark:text-pink-400">Therapy</span>
					</h1>
					<p class="mt-2 text-2xl" :title="format.format(start)">
						Progress:
						<template v-if="elapsedYears">
							<span class="effect-months">{{ elapsedYears }}</span> years
						</template>
						<template v-if="elapsedMonths">
							<span class="effect-months">{{ elapsedMonths }}</span> months
						</template>
						<template v-if="elapsedDays">
							<span class="effect-months">{{ elapsedDays }}</span> days
						</template>
					</p>
				</section>

				<section class="mt-8">
					<h2 class="text-2xl font-bold">Effects</h2>
					<ul class="mt-2">
						<li v-for="change of changes" :key="change.name" class="effect">
							<div class="effect-title" :class="change.colors.text">
								<h3 :class="{ 'opacity-50': totalElapsedMonths >= change.peak[1] }">
									{{ change.name }}
								</h3>
								<CheckIcon v-if="totalElapsedMonths >= change.peak[1]" class="h-6 w-6" />
							</div>
							<section class="ml-4" :class="{ 'opacity-50': totalElapsedMonths >= change.starts[1] }">
								<h3 class="text-lg font-semibold">Starts</h3>
								<p class="ml-4">
									<span class="effect-months" :class="{ 'opacity-50': within(change.starts).value }">{{ change.starts[0] }}</span>
									-
									<span class="effect-months">{{ change.starts[1] }}</span>
									months
								</p>
							</section>
							<section class="ml-4" :class="{ 'opacity-50': totalElapsedMonths >= change.peak[1] }">
								<h3 class="text-lg font-semibold">Peaks</h3>
								<p class="ml-4">
									<template v-if="change.peak[0] !== change.peak[1]">
										<span class="effect-months" :class="{ 'opacity-50': within(change.peak).value }">{{ change.peak[0] }}</span>
										-
									</template>
									<span class="effect-months">{{ change.peak[1] }}</span> months
								</p>
							</section>
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ArrowLeftIcon, CheckIcon } from '@heroicons/vue/24/outline';

const start = Date.UTC(2023, 3, 4, 8, 0, 0, 0);
const now = useNow({ interval: 60000 });

const Day = 1000 * 60 * 60 * 24;
const preciseElapsedDays = computed(() => (now.value.getTime() - start) / Day);
const format = new Intl.DateTimeFormat(undefined, { timeStyle: 'full', dateStyle: 'full' });

const totalElapsedDays = computed(() => Math.floor(preciseElapsedDays.value));
const totalElapsedMonths = computed(() => Math.floor(totalElapsedDays.value / 30));

const elapsedYears = computed(() => Math.floor(totalElapsedDays.value / (12 * 30)));
const elapsedMonths = computed(() => Math.floor(totalElapsedDays.value / 30 - elapsedYears.value * 12));
const elapsedDays = computed(() => Math.floor(totalElapsedDays.value - elapsedYears.value * 12 * 30 - elapsedMonths.value * 30));

const changes = (
	[
		{
			name: 'Fewer erections and a decrease in ejaculation',
			starts: [1, 3],
			peak: [3, 6],
			colors: { bg: 'bg-red-600 dark:bg-red-500', text: 'text-red-600 dark:text-red-500' }
		},
		{
			name: 'Less interest in sex',
			starts: [1, 3],
			peak: [12, 24],
			colors: { bg: 'bg-orange-600 dark:bg-orange-500', text: 'text-orange-600 dark:text-orange-500' }
		},
		{
			name: 'Slower scalp hair loss',
			starts: [1, 3],
			peak: [12, 24],
			colors: { bg: 'bg-yellow-600 dark:bg-yellow-500', text: 'text-yellow-600 dark:text-yellow-500' }
		},
		{
			name: 'Softer, less oily skin',
			starts: [3, 6],
			mid: 4.5,
			peak: [3, 6],
			colors: { bg: 'bg-lime-600 dark:bg-lime-500', text: 'text-lime-600 dark:text-lime-500' }
		},
		{
			name: 'Less muscle mass',
			starts: [3, 6],
			peak: [12, 24],
			colors: { bg: 'bg-emerald-600 dark:bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-500' }
		},
		{
			name: 'Breast development',
			starts: [3, 6],
			peak: [24, 36],
			colors: { bg: 'bg-sky-600 dark:bg-sky-500', text: 'text-sky-600 dark:text-sky-500' }
		},
		{ name: 'Smaller testicles', starts: [3, 6], peak: [24, 36], colors: { bg: 'bg-indigo-500', text: 'text-indigo-500' } },
		{ name: 'More body fat', starts: [3, 6], peak: [24, 60], colors: { bg: 'bg-purple-500', text: 'text-purple-500' } },
		{
			name: 'Less facial and body hair growth',
			starts: [6, 12],
			peak: [36, 36],
			colors: { bg: 'bg-pink-600 dark:bg-pink-500', text: 'text-pink-600 dark:text-pink-500' }
		}
	] as Change[]
).map((change) => calculateRanges(change));

function calculateRanges(entry: Readonly<Change>): Readonly<ComputedChange> {
	const steps = entry.mid //
		? [entry.starts[0], entry.mid, entry.mid, entry.peak[1]]
		: [entry.starts[0], entry.starts[1], entry.peak[0], entry.peak[1]];
	return {
		name: entry.name,
		starts: entry.starts,
		peak: entry.peak,
		ranges: [steps[0], steps[1] - steps[0], steps[2] - steps[1], steps[3] - steps[2]],
		colors: entry.colors
	};
}

function within(range: [lower: number, higher: number]) {
	return computed(() => totalElapsedMonths.value >= range[0] && totalElapsedMonths.value < range[1]);
}

interface Change {
	name: string;
	starts: [lower: number, higher: number];
	mid?: number;
	peak: [lower: number, higher: number];
	colors: { bg: `bg-${string}`; text: `text-${string}` };
}

interface ComputedChange extends Omit<Change, 'mid'> {
	ranges: [padding: number, start: number, progress: number, peak: number];
}

defineSeo({ title: 'HRT Progress', description: "Aura Román's personal progress in Hormone Replacement Therapy.", robots: { none: true } });
</script>

<style scoped>
.line {
	--line-width: 4px;
	@apply flex flex-col rounded-lg border border-zinc-200 backdrop-brightness-90 dark:border-zinc-800/60 dark:backdrop-brightness-75;
}

@screen md {
	.line {
		--line-width: 8px;
	}
}

.line::after {
	content: '';
	width: var(--line-width);
	height: calc(var(--progress) * 1px);
	@apply absolute rounded-t-lg border-b-4 border-zinc-200 bg-zinc-200/80 dark:border-zinc-900 dark:bg-zinc-950/80;
}

.line.complete::after {
	height: calc(60 * 30px);
	@apply rounded-b-lg border-b-0;
}

.line-part {
	width: var(--line-width);
	height: calc(var(--months) * 30px);
}

.line-part:first-child {
	@apply rounded-t-lg;
}

.line-part:last-child {
	@apply rounded-b-lg;
}

.line-part.offset {
	@apply rounded-t-lg bg-zinc-200 dark:bg-zinc-950/80;
}

.line-part.start {
	@apply rounded-t-lg opacity-25;
}

.line-part.progress {
	@apply opacity-75;
}

.effect {
	@apply ml-4;
}

.effect:not(:first-child) {
	@apply mt-8;
}

.effect-title {
	@apply flex flex-row items-center gap-1 text-xl font-bold;
}

.effect-months {
	@apply font-extrabold text-pink-600 dark:text-pink-400;
}
</style>
