<template>
	<Container variant="largest">
		<IconsCache />

		<DevOnly>
			<Menu />
			<!-- <DevColorSchema /> -->
		</DevOnly>
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
