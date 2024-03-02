<template>
	<Container variant="blog">
		<header>
			<h2 class="text-5xl font-semibold mb-2">Last articles</h2>
		</header>
		<main>
			<ul class="flex flex-wrap mx-0 md:-mx-5 mb-10">
				<li
					class="w-full md:w-1/2 px-0 md:px-5 flex-shrink-0 mt-6"
					:key="post.ID"
					v-for="post in posts"
				>
					<BlogCard
						:post="post"
						:height="post.image?.height"
						@goto="trackCardClick(post._path)"
					/>
				</li>
			</ul>
		</main>

		<c-footer class="sm:mt-20 mt-10" />
	</Container>
</template>

<script setup lang="ts">
import cFooter from "@/components/common/footer.vue";
import { AnalyticsService } from "~/src/services/AnalyticsService";

function trackCardClick(postPath: string) {
	AnalyticsService.trackEvent("blog article click from index", {
		articlePath: postPath,
	});
}

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
