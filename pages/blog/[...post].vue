<template>
	<section class="page-post">
		<ContentDoc>
			<template #not-found>
				<h1 class="text-xl text-center font-bold">Document not found</h1>
			</template>

			<template v-slot="{ doc: post }">
				<Head>
					<Meta
						name="og:image"
						:content="config.PROD_URL + useImage().getImage(post.image.src).url"
					/>
					<Meta name="og:type" content="article" />
				</Head>

				<cProgressBar :progress="progress" />

				<article ref="article" class="cms-container">
					<time class="block" :datetime="post.date">
						{{
							new Date(post.date).toLocaleDateString(undefined, {
								day: "numeric",
								month: "long",
								year: "numeric",
							})
						}}
					</time>

					<h1 class="text-4xl sm:text-5xl mb-10 font-extrabold">
						{{ post.title }}
					</h1>

					<figure v-if="post.image">
						<NuxtImg
							class="block w-full mx-auto"
							:src="post.image.src"
							:alt="post.image.alt"
						/>
						<figcaption
							v-if="post.image.alt"
							class="text-center mt-2 italic"
							v-html="post.image.alt"
						></figcaption>
					</figure>

					<ContentRendererMarkdown
						class="cms-block mt-5"
						ref="cms_block"
						:value="post"
						tag="div"
					/>
				</article>

				<div class="cms-container">
					<div
						class="mt-16 border w-full border-black border-opacity-25 mb-5 sm:mb-10"
					></div>

					<div>
						<cSharePost
							:postTitle="post.title"
							:url="config.PROD_URL + $route.path"
						/>
					</div>

					<div class="mt-8">
						<cHireMe v-if="config.NEED_JOB" />
						<CAboutTheAuthor class="mt-4 rounded-lg shadow-md p-6" />
					</div>

					<cFooter class="sm:mt-16 mt-10" />
				</div>

				<cBackToTop
					ref="back_to_top"
					class="fixed bottom-0 right-0 mr-8 mb-8"
				/>
			</template>
		</ContentDoc>
	</section>
</template>

<script setup lang="ts">
import cHireMe from "@/components/c-hire-me.vue";
import cSharePost from "@/components/c-share-post.vue";
import cFooter from "@/components/common/footer.vue";
import cBackToTop from "@/components/common/back-to-top.vue";
import cProgressBar from "@/components/blog/ProgressBar.vue";
import lazysizes from "lazysizes";

const config = useAppConfig();

onMounted(() => {
	window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", onScroll);
});

definePageMeta({
	layout: "blog",
});

const progress = ref(0);
const article = ref();
const back_to_top = ref();

function onScroll() {
	// handle reading progress
	progress.value =
		(window.innerHeight / 2 + window.scrollY - article.value.offsetTop) /
		article.value.offsetHeight;

	// handle backtop
	if (window.scrollY > 0) {
		back_to_top.value.hidden && back_to_top.value.show();
	} else {
		!back_to_top.value.hidden && back_to_top.value.hide();
	}
}

onMounted(() => {
	lazysizes.init();
});
</script>
