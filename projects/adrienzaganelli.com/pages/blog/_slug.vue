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
				<cHireMe v-if="$store.state.NEED_JOB" />
				<cAboutTheAuthor class="mt-4 rounded-lg shadow-md p-6" />
			</div>

			<cFooter class="sm:mt-16 mt-10" />
		</div>

		<cBackToTop ref="back_to_top" class="fixed bottom-0 right-0 mr-8 mb-8" />
	</section>
</template>

<script>
import cAboutTheAuthor from '@/components/c-about-the-author.vue'
import cHireMe from '@/components/c-hire-me.vue'
import cSharePost from '@/components/c-share-post.vue'
import cFooter from '@/components/common/footer.vue'
import cBackToTop from '@/components/common/back-to-top.vue'
import cProgressBar from '@/components/blog/ProgressBar.vue'

import withCodeHighlight from '@/mixins/withCodeHighlight'

export default {
	layout: 'blog',

	async asyncData({ params, payload, store }) {
		let post

		if (payload) {
			post = payload
			post.title.rendered = post.title.rendered.replace(
				/&#(\d+);/g,
				function (match, dec) {
					return String.fromCharCode(dec)
				}
			)
		} else if (store.state.posts.length) {
			post = store.getters.getPost(params.slug)
		}
		return { post }
	},
	mixins: [withCodeHighlight],
	components: {
		cAboutTheAuthor,
		cHireMe,
		cSharePost,
		cFooter,
		cBackToTop,
		cProgressBar,
	},
	head() {
		return {
			title: this.post.title.rendered,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ''),
				},
				{
					hid: 'og:type',
					name: 'og:type',
					content: 'article',
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: this.heroImg[0].media_details.sizes.full.source_url,
				},
			],
		}
	},
	computed: {
		heroImg() {
			return this.post._embedded?.['wp:featuredmedia']
		},
	},
	mounted() {
		window.addEventListener('scroll', this.onScroll)
	},
	destroyed() {
		window.removeEventListener('scroll', this.onScroll)
	},
	data() {
		return {
			progress: 0,
		}
	},
	methods: {
		onScroll() {
			// handle reading progress
			const article = this.$refs.article
			this.progress =
				(window.innerHeight / 2 + window.scrollY - article.offsetTop) /
				article.offsetHeight

			// handle backtop
			const backToTop = this.$refs.back_to_top
			if (window.scrollY > 0) {
				backToTop.hidden && backToTop.show()
			} else {
				!backToTop.hidden && backToTop.hide()
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
