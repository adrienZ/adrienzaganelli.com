<template>
	<figure>
		<video
			autoplay
			loop
			muted
			playsinline
			class="content-video lazyload"
			:data-src="src"
			@mouseenter="handleMouseEnter"
			@mouseout="handleMouseOut"
			@click="handleClick(src, 'video')"
		></video>
	</figure>

	<figcaption v-if="caption">{{ caption }}</figcaption>
</template>

<script setup lang="ts">
defineProps<{
	src: string
	caption?: string
}>()

const { handleMouseEnter, handleMouseOut, handleClick } = useImageModalEvents()
</script>
