<template>
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
</template>

<script setup lang="ts">
defineProps<{
	src: string
}>()

const { handleMouseEnter, handleMouseOut, handleClick } = useImageModalEvents()
</script>
