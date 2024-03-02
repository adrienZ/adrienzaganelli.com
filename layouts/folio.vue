<template>
	<Container variant="largest">
		<DevOnly>
			<!-- <Menu container-variant="home" /> -->
		</DevOnly>
		<!-- <DevColorSchema /> -->
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
