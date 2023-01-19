<template>
	<ul class="c-list font-semibold">
		<li
			class="c-list__item text-left mb-3 sm:mb-8"
			:key="index"
			v-for="(p, index) in $store.$state.projects"
		>
			<nuxt-link
				@focus.native="onFocus($event, p, index)"
				@mouseover.native="onHover($event, p, index)"
				@mouseleave.native="$bus.emit('cursor-default')"
				:to="/case-study/ + p.slug"
				class="inline-block"
			>
				<div class="relative">
					<h2 class="c-list__item__title leading-tight text-3xl sm:text-5xl">
						<span class="inline-block c-list__item__index tracking-wide">
							{{ formatIndex(index) }}
						</span>
						<span class="inline-block c-list__item__text">
							{{ p.title.rendered }}
						</span>
					</h2>
				</div>
			</nuxt-link>
		</li>
	</ul>
</template>

<script setup>
import { reactive } from 'vue'
import { $bus } from '../../plugins/bus'

const emit = defineEmits(['update'])

const useTimer = (duration, callback) => {
	const interval = window.setTimeout(callback, duration)

	return {
		reset: () => window.clearTimeout(interval),
	}
}

let timer = null

const state = reactive({
	currentProjectSlug: null,
	currentIndex: 0,
})

function update(e, project, index) {
	const item = e.currentTarget

	// dont emit if already active
	if (state.currentProjectSlug === project.slug) return

	// loading state
	// ...

	if (item) {
		// reset action event
		item.addEventListener('mouseleave', cancel)
	}

	// delay before doing action
	timer = useTimer(120, () => {
		emit('update', [project, index])
		state.currentProjectSlug = project.slug
	})
}

function onHover(e, project, index) {
	$bus.emit('cursor-hover')
	update(...arguments)
}

function onFocus() {
	update(...arguments)
}

function onMouseOut() {
	$bus.emit('cursor-default')
}

function formatIndex(indexToFormat) {
	// 0x
	return indexToFormat + 1 < 10 ? '0' + (indexToFormat + 1) : indexToFormat + 1
}

function cancel() {
	timer?.reset()
}
</script>

<style lang="scss" scoped>
.c-list__item {
	&.active &__index,
	&.active &__index {
		-webkit-text-stroke-color: transparent;
		@apply bg-pimper;
	}
}

.c-list__item__index {
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: theme('colors.black');

	background-clip: text;
	color: transparent;
	background-color: transparent;

	transition: 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
}
</style>
