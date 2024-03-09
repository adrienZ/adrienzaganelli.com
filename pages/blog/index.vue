<template>
	<Container variant="blog">
		<header>
			<h2 class="text-5xl font-semibold mb-2">Last articles</h2>
		</header>
		<main>
			<ul class="list flex flex-wrap mx-0 md:-mx-5 mb-10">
				<li
					v-for="(post, index) in posts"
					class="w-full md:w-1/2 px-0 md:px-5 flex-shrink-0 mt-6"
					:key="post.ID"
					:style="`--delay: ${0.1 * index}s`"
				>
					<BlogCard :post="post" :height="post.image?.height" />
				</li>
			</ul>
		</main>

		<c-footer class="sm:mt-20 mt-10" />
	</Container>
</template>

<style lang="css" scoped>
/* @keyframes enter {
	from {
		opacity: 0;
		transform: translateY(2rem);
	}

	to {
		opacity: 1;
		transform: translateY(0rem);
	}
}

.list li {
	opacity: 0;
	animation-duration: 0.15s;
	animation-timing-function: ease-out;
	animation-delay: var(--delay);
	animation-name: enter;
	animation-fill-mode: forwards;
} */
</style>

<script setup lang="ts">
import cFooter from "@/components/common/footer.vue";

const { data: posts } = await fetchContent(`content-blog`, () => {
	return queryContent("blog")
		.where({ draft: false })
		.only(["title", "_path", "date", "image", "excerpt"])
		.sort({ date: -1 })
		.find();
});

useHeadSafe({
	meta: [
		{
			name: "og:image",
			content: "/og-image.jpg",
		},
	],
});

definePageMeta({
	layout: "blog",
	viewTransition: true,
});
</script>
