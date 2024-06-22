<template>
	<section class="page-post">
		<ContentDoc>
			<template #not-found>
				<h1 class="text-xl text-center font-bold">Document not found</h1>
			</template>

			<template v-slot="{ doc: post }">
				<Head>
					<Title>{{ post.title }}</Title>
					<!-- <Meta name="description" :content="post.description" /> -->
					<Meta
						name="og:image"
						:content="config.PROD_URL + useImage().getImage(post.image.src).url"
					/>
					<Meta name="og:type" content="article" />
					<Meta
						name="article:published_time"
						:content="new Date(post.date).toISOString()"
					/>
				</Head>

				<cProgressBar :progress="progress" />

				<Container class="pb-10" variant="blog">
					<article ref="article">
						<h1 class="text-3xl sm:text-4xl mb-2 font-extrabold">
							{{ post.title }}
						</h1>

						<h2 class="mb-8">
							<NuxtLink class="text-pimper" to="/?utm_medium=blog-author"
								>Adrien Zaganelli</NuxtLink
							>
							-
							<time :datetime="post.date">
								{{
									new Date(post.date).toLocaleDateString(undefined, {
										day: "numeric",
										month: "long",
										year: "numeric",
									})
								}}
							</time>
						</h2>

						<figure v-if="post.image">
							<NuxtImg
								class="hero-img block w-full max-w-[35rem] mx-auto"
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
				</Container>

				<Container variant="blog">
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
				</Container>

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
	viewTransition: true,
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

// const { data: locales } = await useAsyncData("locales", () => {
// 	return parseAcceptLanguage(useRequestHeader("accept-language"));
// });

// function parseAcceptLanguage(acceptLanguage?: string) {
// 	if (!acceptLanguage) {
// 		return undefined;
// 	}

// 	const languages = acceptLanguage.split(",");
// 	const locales = [];
// 	for (let lang of languages) {
// 		const parts = lang.trim().split(";");
// 		const locale = parts[0].split("-")[0];
// 		locales.push(locale);
// 	}
// 	return locales;
// }
</script>

<style scoped>
.hero-img {
	view-transition-name: post-image-selected;
}
</style>
