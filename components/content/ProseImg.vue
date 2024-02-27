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
				:width="width"
				:height="height"
				loading="lazy"
				quality="80"
			/>
	</div>
</template>

<script setup lang="ts">
import { withBase } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

const { handleMouseEnter, handleMouseOut, handleClick } = useImageModalEvents()

const props = defineProps({
	src: {
		type: String,
		default: '',
	},
	alt: {
		type: String,
		default: '',
	},
	width: {
		type: [String, Number],
		default: undefined,
	},
	height: {
		type: [String, Number],
		default: undefined,
	},
})

// url generation for image-modale.vue
const img = useImage()
img.getImage(props.src)

const refinedSrc = computed(() => {
	if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
		return withBase(props.src, useRuntimeConfig().app.baseURL)
	}
	return props.src
})
</script>
