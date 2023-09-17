<template>
	<NuxtLayout name="blog">
		<section class="container mx-auto">
			<header>
				<h2 class="text-6xl font-semibold mb-2">Last articles</h2>
			</header>
			<main>
				<ul class="flex flex-wrap mx-0 md:-mx-5 mb-10">
					<li
						class="w-full md:w-1/2 px-0 md:px-5 flex-shrink-0 mt-6"
						:key="post.ID"
						v-for="post in posts"
					>
						<BlogCard :post="post" :height="post.image.height" />
					</li>
				</ul>
			</main>

			<c-footer class="sm:mt-20 mt-10" />
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
import cFooter from '@/components/common/footer.vue'

const { data: posts } = await fetchContent(`content-blog`, () => {
	return queryContent('blog')
		.where({ published: true })
		.only(['title', '_path', 'createdAt', 'image', 'excerpt'])
		.sort({ createdAt: -1 })
		.find()
})
</script>

<style scoped>
.container {
	@apply max-w-4xl px-4;
}
</style>
