<template>
	<video
		:type="type"
		crossorigin="anonymous"
		v-if="type === 'video'"
		class="w-full"
		muted
		autoplay
		playsinline
		loop
		:src="src"
	></video>
	<img
		:type="type"
		crossorigin="anonymous"
		v-else-if="type === 'image'"
		class="w-full"
		:src="src"
	/>
</template>

<script lang="ts" setup>
defineProps(['type', 'src'])
</script>
