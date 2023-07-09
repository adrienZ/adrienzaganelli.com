<template>
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
					<c-card :post="post" :height="post.thumbnail_height" />
				</li>
			</ul>
		</main>

		<c-footer class="sm:mt-20 mt-10" />
	</section>
</template>

<script>
import cCard from '@/components/blog/card.vue'
import cFooter from '@/components/common/footer.vue'

export default {
	layout: 'blog',
	components: {
		cCard,
		cFooter,
	},
	async asyncData(ctx) {
		const { $content } = ctx

		const posts = await $content('blog')
			.where({ published: true })
			.only([
				'title',
				'slug',
				'createdAt',
				'media',
				'excerpt',
				'thumbnail_height',
			])
			.sortBy('createdAt', 'desc')
			.fetch()

		return {
			posts,
		}
	},
}
</script>

<style scoped>
.container {
	@apply max-w-4xl px-4;
}
</style>
