<template>
	<div
		class="content-image"
		@mouseenter="handleMouseEnter"
		@mouseout="handleMouseOut"
		@click="handleClick(refinedSrc, 'image')"
	>
		<ImageWithSizes
			:src="refinedSrc"
			:alt="alt"
			quality="80"
			loading="lazy"
			v-bind="sizeProps"
		/>
	</div>
</template>

<script setup lang="ts">
import { withBase } from "ufo";
import { useRuntimeConfig, computed } from "#imports";
import { ImageWithSizes } from "#components"; // import from #components to use Nuxt internal compilation

const { handleMouseEnter, handleMouseOut, handleClick } = useImageModalEvents();

const props = defineProps({
	src: {
		type: String,
		default: "",
	},
	alt: {
		type: String,
		default: "",
	},
	width: {
		type: [String, Number],
		default: undefined,
	},
	height: {
		type: [String, Number],
		default: undefined,
	},
});

// url generation for image-modale.vue
const img = useImage();
img.getImage(props.src);

const refinedSrc = computed(() => {
	if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
		return withBase(props.src, useRuntimeConfig().app.baseURL);
	}
	return props.src;
});

const sizeProps = computed(() => ({
	...(props.width !== undefined ? { width: props.width } : {}),
	...(props.height !== undefined ? { height: props.height } : {}),
}));
</script>
