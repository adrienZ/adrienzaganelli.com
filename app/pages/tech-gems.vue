<template>
	<Container variant="blog" class="min-h-[100dvh]">
		<header>
			<h2 class="text-3xl font-semibold mb-8">Tech gems 👁️</h2>
		</header>
		<main class="min-h-full">
			<ul class="space-y-2 md:space-y-2 list">
				<li
					v-for="(post, index) in posts"
					class=""
					:key="post.ID"
					:style="`--delay: ${0.08 * index}s`"
				>
					<div class="flex flex-wrap items-center gap-x-2 justify-between">
						<h3
							class="text-base md:text-lg font-semibold hover:underline underline-offset-2"
						>
							<NuxtLink
								:to="post._path + `?utm_medium=tech-gems-index`"
								class="block"
							>
								{{ post.title.replace("Tech gems 👁️", "") }}
							</NuxtLink>
						</h3>
						<time class="block opacity-60 text-sm">
							{{
								new Date(post.date).toLocaleDateString("en", {
									day: "numeric",
									month: "long",
									year: "numeric",
								})
							}}
						</time>
					</div>
					<!-- <ContentRendererMarkdown class="text-xs" :value="post.excerpt" /> -->
				</li>
			</ul>
		</main>

		<c-footer class="sm:mt-20 mt-10" />
	</Container>
</template>

<style lang="css" scoped>
@keyframes enter {
	from {
		opacity: 0;
		transform: translateY(0.25rem);
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

<script setup lang="ts">
import cFooter from "@/components/common/footer.vue";
import { techGemsQuery } from "~/lib/content/queries";

const { data: posts } = await fetchContent(`content-blog`, () => {
	return queryContent("blog")
		.where(techGemsQuery)
		.only(["title", "_path", "date", "excerpt"])
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
});
</script>
