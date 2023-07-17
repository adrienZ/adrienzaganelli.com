<template>
	<NuxtLayout name="blog">
		<section class="page-post">
			<ContentDoc>
				<template #not-found>
					<h1 class="text-xl text-center font-bold">Document not found</h1>
				</template>

				<template v-slot="{ doc: post }">
					<Head>
						<title>jiji</title>
					</Head>

					<cProgressBar :progress="progress" />

					<article ref="article" class="cms-container">
						<h1 class="text-4xl sm:text-5xl mb-10 font-extrabold">
							{{ post.title }}
						</h1>

						<figure v-if="post.media && post.caption">
							<NuxtImg
								class="block w-full mx-auto"
								:src="post.media"
								:alt="post.caption"
							/>
							<figcaption
								class="text-center mt-2 italic"
								v-html="post.caption"
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
								:url="'https://adrienzaganelli.com' + $route.path"
							/>
						</div>

						<div class="mt-8">
							<cHireMe v-if="config.NEED_JOB" />
							<cAboutTheAuthor class="mt-4 rounded-lg shadow-md p-6" />
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
	</NuxtLayout>
</template>

<script setup lang="ts">
import cAboutTheAuthor from '@/components/c-about-the-author.vue'
import cHireMe from '@/components/c-hire-me.vue'
import cSharePost from '@/components/c-share-post.vue'
import cFooter from '@/components/common/footer.vue'
import cBackToTop from '@/components/common/back-to-top.vue'
import cProgressBar from '@/components/blog/ProgressBar.vue'

// head() {
// return {
// title: this.post.title,
// meta: [
// 	{
// 		hid: 'description',
// 		name: 'description',
// 		content: this.post.excerpt,
// 	},
// 	{
// 		hid: 'og:type',
// 		name: 'og:type',
// 		content: 'article',
// 	},
// 	{
// 		hid: 'og:image',
// 		name: 'og:image',
// 		content: this.post.media,
// 	},
// ],
// }
// },

const config = useAppConfig()

onMounted(() => {
	window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', onScroll)
})

const progress = ref(0)
const article = ref()
const back_to_top = ref()

function onScroll() {
	// handle reading progress
	progress.value =
		(window.innerHeight / 2 + window.scrollY - article.value.offsetTop) /
		article.value.offsetHeight

	// handle backtop
	if (window.scrollY > 0) {
		back_to_top.value.hidden && back_to_top.value.show()
	} else {
		!back_to_top.value.hidden && back_to_top.value.hide()
	}
}
</script>
