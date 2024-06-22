<script setup lang="ts">
import cMedia from "@/components/showcase/media.vue";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import gsap from "gsap";

const { $bus } = useNuxtApp();

const media = ref();

const state = reactive({
	mediaSrc: "",
	mediaType: "",
	isOpen: false,
});

onMounted(() => {
	$bus.on("preview-open", open);
});

onBeforeUnmount(() => {
	close();
});

function open({ src, type }: { src: string; type: string }) {
	state.isOpen = true;
	disableBodyScroll(document.body);

	state.mediaSrc = src;
	state.mediaType = type;

	nextTick(() => {
		gsap.fromTo(
			media.value.$el,
			{
				scale: 0.5,
				y: 20,
				opacity: 0,
			},
			{
				scale: 1,
				y: 0,
				opacity: 1,
				duration: 0.3,
				delay: 0.05,
			},
		);
	});
}

function close() {
	if (!media.value?.$el.tagName) return;

	gsap.fromTo(
		media.value.$el,
		{
			scale: 1,
			y: 0,
			opacity: 1,
		},
		{
			scale: 0.5,
			y: 20,
			opacity: 0,
			duration: 0.2,
			delay: 0.05,
			onComplete: () => {
				state.mediaSrc = "";
				state.mediaType = "";
				enableBodyScroll(document.body);
				state.isOpen = false;
			},
		},
	);
}
</script>

<template>
	<div
		@click="close"
		class="image-modale h-full w-full top-0 left-0 z-30"
		:class="{ fixed: state.isOpen }"
	>
		<div
			v-show="state.isOpen"
			class="h-full w-full flex align-items-center justify-center"
		>
			<div
				class="h-full w-full bg-black opacity-75 absolute top-0 left-0"
			></div>

			<cMedia
				ref="media"
				:type="state.mediaType"
				:src="state.mediaSrc"
				class="preview m-auto max-w-full object-contain"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.image-modale {
	cursor: zoom-out;
}

.preview {
	max-height: 90%;
}
</style>

<style lang="scss">
.content-image,
.content-video {
	&:hover {
		cursor: zoom-in;
	}
}
</style>
