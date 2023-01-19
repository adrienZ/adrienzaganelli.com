<template>
	<output
		class="ProgressBar fixed z-50 origin-left left-0 top-0 h-2 w-full bg-pimper"
		:style="'--scale: ' + progress"
	></output>
</template>

<style scoped>
.ProgressBar {
	--scale: 0;
	transform: scaleX(var(--scale));
}
</style>

<script lang="ts" setup>
defineProps<{
	progress: number
}>()
</script>
