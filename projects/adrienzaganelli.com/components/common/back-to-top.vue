<template>
	<button
		@click="resetScroll"
		class="c-back-to-top opacity-0 shadow-md border-2 bg-light rounded-full p-4 z-20"
		@mouseover="$bus.emit('cursor-hover')"
		@mouseleave="$bus.emit('cursor-default')"
		ref="root"
	>
		<svg class="w-6 h-6 inline-block fill-pimper">
			<use xlink:href="#icon-arrow-top" x="0" y="0" />
		</svg>
	</button>
</template>

<script lang="ts" setup>
import gsap from 'gsap'

const hidden = ref(true)
const reducedMotion = ref(false)
const root = ref()

onBeforeMount(() => {
	reducedMotion.value = !!window.matchMedia('(prefers-reduced-motion: reduce)')
		.matches.length
})

function show() {
	hidden.value = false
	if (reducedMotion.value) {
		root.value.classList.remove('opacity-0')
	} else {
		gsap.fromTo(
			root.value,
			{ opacity: 0, y: 100 },
			{ opacity: 1, y: 0, duration: 0.25 }
		)
	}
}

function hide() {
	hidden.value = true
	if (reducedMotion.value) {
		root.value.classList.addEventListener('opacity-0')
	} else {
		gsap.to(root.value, { opacity: 0, y: 30, duration: 0.15 })
	}
}

function resetScroll() {
	document.body.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	})
}

defineExpose({
	show,
	hide,
	hidden,
})
</script>

<style lang="scss" scoped>
.c-back-to-top {
	transition: opacity 0.15s ease-out;
}
</style>
