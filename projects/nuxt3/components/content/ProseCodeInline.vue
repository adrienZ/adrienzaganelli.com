<template>
	<code>
		<slot />
	</code>
</template>

<script setup lang="ts">
defineProps<{
	language?: string | null
}>()
</script>

<style lang="scss" scoped>
code {
	@apply font-mono bg-gray-200 text-pink-700 rounded-sm;
	padding: 2px 4px;
	font-size: 80%;
}
</style>
