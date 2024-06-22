<template>
	<div
		:style="'--scale:' + smoothProgress.value"
		class="ProgressBar fixed z-50 origin-left left-0 top-0 h-2 w-full bg-pimper"
	></div>
</template>

<style scoped>
.ProgressBar {
	--scale: 0;
	transform: scaleX(var(--scale));
}
</style>

<script setup>
import gsap from "gsap";
import { shallowReactive, watch } from "vue";

const props = defineProps({
	progress: {
		type: Number,
		default: 0,
	},
});

function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}

const smoothProgress = shallowReactive({
	value: props.progress,
});

watch(
	() => props.progress,
	() => {
		gsap.to(smoothProgress, {
			value: clamp(props.progress, 0, 1),
			duration: 0.5,
			ease: "power4.out",
		});
	},
);
</script>
