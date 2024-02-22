<template>
	<header role="banner" class="bg-surface py-2 px-4 mb-16">
		<nav role="navigation">
			<Container variant="blog" class="flex items-center justify-between">
				<h1 class="text-2xl" v-if="$route.name === 'blog'">
					Adrien Zaganelli's Blog
				</h1>
				<h2 class="text-2xl" v-else>
					<NuxtLink to="/blog">Adrien Zaganelli's Blog</NuxtLink>
				</h2>

				<a class="ml-6" :href="rssFeedPath">
					<span class="text-xs leading-none align-bottom">RSS</span>
					<svg class="w-4 h-4 inline-block fill-current ml-1">
						<use xlink:href="#icon-rss" x="0" y="0" />
					</svg>
				</a>
			</Container>
		</nav>
	</header>
</template>

<script setup lang="ts">
const { rssFeedPath } = useAppConfig();
</script>
