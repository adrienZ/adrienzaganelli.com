<template>
	<div
		class="ProgressBar fixed z-50 origin-left left-0 top-0 h-2 w-full bg-pimper"
	></div>
</template>

<style scoped>
.ProgressBar {
	transform: scaleX(0);
}
</style>

<script>
import gsap from 'gsap'

export default {
	data() {
		return {
			value: 0,
		}
	},
	watch: {
		value() {
			gsap.set(this.$el, { scaleX: this.value })
		},
	},
}
</script>
