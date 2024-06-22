<template>
	<Container variant="largest">
		<Menu container-variant="home" class="my-4" />
		<slot />
	</Container>
</template>

<script setup lang="ts">
useHeadSafe({
	meta: [
		{
			name: "og:image",
			content: "/og-image.jpg",
		},
	],
});
</script>

<style scoped>
.mx-0 {
	margin: 0;
}
</style>
