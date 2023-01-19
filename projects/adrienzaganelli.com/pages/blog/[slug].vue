<template>
	<section class="page-post">
		<cProgressBar :progress="progress" />

		<article ref="article" class="cms-container">
			<h1 class="text-4xl sm:text-5xl mb-10 font-extrabold">
				{{ post.title.rendered }}
			</h1>

			<figure>
				<img
					class="block w-full mx-auto"
					:src="heroImg[0].media_details.sizes.full.source_url"
					:alt="heroImg[0].alt_text"
				/>
				<figcaption
					class="text-center mt-2 italic"
					v-html="heroImg[0].caption.rendered"
				></figcaption>
			</figure>

			<div
				class="cms-block mt-5"
				ref="cms_block"
				v-html="post.content.rendered"
			></div>
		</article>

		<div class="cms-container">
			<div
				class="mt-16 border w-full border-black border-opacity-25 mb-5 sm:mb-10"
			></div>

			<div>
				<cSharePost
					:postTitle="post.title.rendered"
					:url="'https://adrienzaganelli.com' + $route.path"
				/>
			</div>

			<div class="mt-8">
				<cHireMe v-if="$store.$state.NEED_JOB" />
				<cAboutTheAuthor class="mt-4 rounded-lg shadow-md p-6" />
			</div>

			<cFooter class="sm:mt-16 mt-10" />
		</div>

		<cBackToTop ref="backToTop" class="fixed bottom-0 right-0 mr-8 mb-8" />
	</section>
</template>

<script lang="ts" setup>
import cAboutTheAuthor from '@/components/c-about-the-author.vue'
import cHireMe from '@/components/c-hire-me.vue'
import cSharePost from '@/components/c-share-post.vue'
import cFooter from '@/components/common/footer.vue'
import cBackToTop from '@/components/common/back-to-top.vue'
import cProgressBar from '@/components/blog/ProgressBar.vue'

import gsap from 'gsap'
import { useStore } from '@/store/globalStore'

function clamp(num: number, min: number, max: number) {
	return num <= min ? min : num >= max ? max : num
}
const store = useStore()
const { params } = useRoute()
const { data: postRaw } = await useAsyncData(
	'cache_posts',
	() =>
		process.server &&
		$fetch(store.backendBase + '/wp/v2/posts?slug=' + params.slug + '&_embed'),
	{
		transform: (data) => {
			const transformed = data[0]
			transformed.title.rendered = transformed.title.rendered.replace(
				/&#(\d+);/g,
				function (match, dec) {
					return String.fromCharCode(dec)
				}
			)

			return transformed
		},
	}
)
const post = unref(postRaw)

useCodeHighlight()

const heroImg = computed(() => post._embedded?.['wp:featuredmedia'])
const article = ref()
const backToTop = ref()
const progress = ref(0)

definePageMeta({
	layout: 'blog',
})

useHead({
	title: post.title.rendered,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ''),
		},
		{
			hid: 'og:type',
			name: 'og:type',
			content: 'article',
		},
		{
			hid: 'og:image',
			name: 'og:image',
			content: heroImg.value[0].media_details.sizes.full.source_url,
		},
	],
})

function onScroll() {
	// handle reading progress
	const readProgress =
		(window.innerHeight / 2 + window.scrollY - article.value.offsetTop) /
		article.value.offsetHeight

	const temp = { value: 0 }

	gsap.to(temp, {
		value: clamp(readProgress, 0, 1),
		duration: 0.5,
		ease: 'power4.out',
		onUpdate() {
			progress.value = temp.value
		},
	})

	// handle backtop
	if (window.scrollY > 0) {
		backToTop.value.hidden && backToTop.value.show()
	} else {
		!backToTop.value.hidden && backToTop.value.hide()
	}
}

onMounted(() => {
	window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', onScroll)
})

// fix html entities in title
// const posts = postsRaw.value.map((post) => {
// 	post.title.rendered = post.title.rendered.replace(
// 		/&#(\d+);/g,
// 		function (match, dec) {
// 			return String.fromCharCode(dec)
// 		}
// 	)

// 	return post
// })
</script>

<style lang="scss" scoped></style>
