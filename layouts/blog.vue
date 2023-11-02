<template>
	<div>
		<IconsCache />
		<DevOnly>
			<Menu />
			<!-- <DevColorSchema /> -->
		</DevOnly>
		<BlogHeader />
		<div class="layout-blog">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
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
