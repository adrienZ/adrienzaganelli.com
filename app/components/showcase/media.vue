<template>
	<video
		v-if="type === 'video'"
		:type="type"
		crossorigin="anonymous"
		class="w-full"
		muted
		autoplay
		playsinline
		loop
		:src="src"
	></video>
	<NuxtImg
		v-else-if="type === 'image'"
		:type="type"
		crossorigin="anonymous"
		class="w-full"
		loading="lazy"
		:src="src"
	/>
</template>

<script lang="ts" setup>
defineProps(["type", "src"]);
</script>
