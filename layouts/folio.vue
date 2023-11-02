<template>
	<Container variant="largest" class="mx-0">
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

useHead({
	link: [
		{
			rel: "alternate",
			href: useAppConfig().rssFeedPath,
			title: "Adrien Zaganelli",
			type: "application/rss+xml",
		},
	],
});
</script>

<style scoped>
.mx-0 {
	margin: 0;
}
</style>
