<template>
	<div
		ref="rootRef"
		class="FancyCursor opacity-80 h-6 w-6 pointer-events-none fixed top-0 left-0"
		:class="{
			'mix-blend-difference': enableDiffrenceBlend,
		}"
	>
		<div
			ref="innerRef"
			class="absolute w-full h-full rounded-full opacity-75 bg-pimper bg-opacity-75"
		></div>
		<div
			ref="outerRef"
			class="absolute w-full h-full rounded-full opacity-75 border-2 border-pimper"
		></div>
	</div>
</template>

<script lang="ts" setup>
import { useElementSize, useEventListener, useSupported } from "@vueuse/core";
import gsap from "gsap";

// templates refs
const rootRef = ref<HTMLElement>();
const innerRef = ref<HTMLElement>();
const outerRef = ref<HTMLElement>();

// supfast render
const lastRender = ref(0);

function onFrame() {
	const now = Date.now();

	if (now - lastRender.value > RAF_DELTA_TIME) {
		renderCursor();
	}
}

// composables
const { $mouse } = useMouse();
const { RAF_DELTA_TIME } = useAppConfig();
const { width: elementWidth, height: elementHeight } = useElementSize(rootRef);
const { $bus } = useNuxtApp();

const state = reactive({
	innerScale: 0,
	innerOpacity: 0,
	outerScale: 0,
	outerOpacity: 0,

	// smooth positions
	innerPosX: $mouse.position.x,
	innerPosY: $mouse.position.y,
	outerPosX: $mouse.position.x,
	outerPosY: $mouse.position.y,
});

const enableDiffrenceBlend = ref(false);
const hidden = ref(false);
const supportsTouch = useSupported(
	() => "ontouchstart" in window || navigator.maxTouchPoints,
);

onMounted(() => {
	// dont run on touch devices
	if (supportsTouch.value) return;

	// show custom cursor on first mouse move
	const once = () => {
		state.innerPosX = $mouse.position.x;
		state.innerPosY = $mouse.position.y;
		state.outerPosX = $mouse.position.x;
		state.outerPosY = $mouse.position.y;
		show();
		window.removeEventListener("mousemove", once);
	};

	window.addEventListener("mousemove", once);
	gsap.ticker.add(onFrame);
});

onBeforeUnmount(() => {
	gsap.ticker.remove(onFrame);
});

let tl: gsap.core.Timeline | gsap.core.Tween | null;
let hoverTl: gsap.core.Timeline | gsap.core.Tween | null;

function show() {
	tl?.kill();
	tl = gsap.timeline();

	tl.add(gsap.to(state, { innerOpacity: 1, innerScale: 0.5, duration: 0.15 }));
	hidden.value = false;
}

function hide() {
	if (tl) tl.kill();
	tl = gsap.to(state, { innerOpacity: 0, duration: 0.25 });
	hidden.value = true;
}

// CORE
function renderCursor() {
	state.innerPosX += ($mouse.position.x - state.innerPosX) * 0.4;
	state.innerPosY += ($mouse.position.y - state.innerPosY) * 0.4;

	state.outerPosX += ($mouse.position.x - state.outerPosX) * 0.3;
	state.outerPosY += ($mouse.position.y - state.outerPosY) * 0.3;

	gsap.set(innerRef.value!, {
		scale: state.innerScale,
		opacity: state.innerOpacity,
		x: state.innerPosX - elementWidth.value / 2,
		y: state.innerPosY - elementHeight.value / 2,
	});
	gsap.set(outerRef.value!, {
		scale: state.outerScale,
		opacity: state.outerOpacity,
		x: state.outerPosX - elementWidth.value / 2,
		y: state.outerPosY - elementHeight.value / 2,
	});
}

// EVENTS

$bus.on("cursor-show", show);
$bus.on("cursor-hide", hide);

$bus.on("cursor-hover", () => {
	if (hoverTl) hoverTl.kill();

	gsap.to(state, {
		duration: 0.5,
		outerScale: 1,
		outerOpacity: 1,
	});
});

$bus.on("cursor-default", () => {
	if (hoverTl) hoverTl.kill();

	enableDiffrenceBlend.value = false;

	gsap.to(state, {
		duration: 0.5,
		outerScale: 0.5,
		outerOpacity: 0,
	});
});

$bus.on("cursor-difference", () => {
	enableDiffrenceBlend.value = true;
});

function handleIframes(event: MouseEvent) {
	const target = event.target as HTMLElement;

	if (target.tagName === "IFRAME" && !hidden.value) {
		hide();
	}
	if (target.tagName !== "IFRAME" && hidden.value) {
		show();
	}
}

// clicks
useEventListener("mousedown", () => {
	gsap.to(state, {
		innerScale: 0.25,
		duration: 0.1,
	});
});

useEventListener("mouseup", () => {
	gsap.to(state, {
		innerScale: 0.5,
		duration: 0.1,
	});
});

useEventListener("mousemove", handleIframes);
</script>

<style lang="scss" scoped>
.FancyCursor {
	z-index: 100;

	> * {
		will-change: tranform;
		transform-origin: center center;
		// initial state
		opacity: 0;
	}
}
</style>
