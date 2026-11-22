<template>
	<Container variant="blog">
		<c-page-header title="Last articles ✏️" />

		<main>
			<ul class="list flex flex-wrap mx-0 md:-mx-5 -mt-6 mb-10">
				<li
					v-for="(post, index) in posts"
					class="w-full md:w-1/2 px-0 md:px-5 flex-shrink-0 mt-6"
					:key="post.path"
					:style="`--delay: ${0.1 * index}s`"
				>
					<BlogCard :post="post" :height="post.image?.height?.toString()" />
				</li>
			</ul>
		</main>

		<aside v-if="false" class="bg-surface p-4 rounded">
			<NuxtLink
				class="inline-block bg-black text-surface px-3 py-1 rounded-sm font-semibold text mt-2"
				to="/tech-gems?utm_medium=blog-index"
			>
				Tech gems 👁️ &rarr;
			</NuxtLink>
			<div class="italic mt-1">
				Weekly insiders informations from the Javascript industry
			</div>
		</aside>
		<c-footer class="sm:mt-20 mt-10" />
	</Container>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import Container from "@/components/Container.vue";
import BlogCard from "@/components/blog/card.vue";
import cFooter from "@/components/common/footer.vue";
import cPageHeader from "@/components/common/page-header.vue";
import { TECH_GEMS_PATH_PATTERN } from "~/lib/content/queries";

const { data: posts } = await useAsyncData(`content-blog`, () => {
	return queryCollection("blog")
		.where("draft", "=", false)
		.where("path", "NOT LIKE", TECH_GEMS_PATH_PATTERN)
		.select("title", "path", "date", "image", "excerpt")
		.order("date", "DESC")
		.all();
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

<style lang="css" scoped>
@keyframes enter {
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
}
</style>
