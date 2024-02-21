<template>
	<section
		class="Container mx-auto"
		:class="{
			'max-w-3xl px-4': variant === 'blog',
			'sm:w-3/4 w-5/6': variant === 'home',
			'max-w-screen-2xl ': variant === 'largest',
		}"
	>
		<slot />
	</section>
</template>

<script setup lang="ts">
defineProps<{
	variant: "blog" | "home" | "largest";
}>();
</script>
