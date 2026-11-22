<template>
	<header>
		<h1 class="text-4xl font-semibold my-2">{{ title }}</h1>
		<div
			role="separator"
			class="border w-full border-black border-opacity-25 mt-2 md:mt-4 mb-8"
		/>
	</header>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
