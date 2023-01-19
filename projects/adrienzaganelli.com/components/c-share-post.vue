<template>
	<section class="c-share-post sm:flex">
		<a
			v-if="osShareEnabled"
			href="#"
			class="text-center sm:text-left block sm:inline-block border-pimper border-2 text-pimper text-white font-bold py-2 px-4 rounded"
			@click="nativeShare"
		>
			<span class="inline-block align-middle">Share this post</span>
		</a>
		<a
			class="facebook text-center sm:text-left block sm:inline-block bg-gray-500 text-white font-bold py-2 px-4 rounded"
			:class="{ 'sm:ml-4 mt-2 sm:mt-0': osShareEnabled }"
			@click="openModal"
			:href="facebookShareUrl"
			target="_blank"
		>
			<span class="inline-block align-middle">Share on</span>
			<svg class="w-4 h-4 ml-1 inline-block align-middle fill-current">
				<use xlink:href="#icon-facebook" x="0" y="0" />
			</svg>
		</a>
		<a
			class="twitter text-center sm:text-left block sm:inline-block sm:ml-4 mt-2 sm:mt-0 bg-gray-500 text-white font-bold py-2 px-4 rounded"
			@click="openModal"
			:href="TwitterShareUrl"
			target="_blank"
		>
			<span class="inline-block align-middle">Share on</span>
			<svg class="w-4 h-4 ml-1 inline-block fill-current">
				<use xlink:href="#icon-twitter" x="0" y="0" />
			</svg>
		</a>
		<a
			class="linkedin text-center sm:text-left block sm:inline-block sm:ml-4 mt-2 sm:mt-0 bg-gray-500 text-white font-bold py-2 px-4 rounded"
			@click="openModal"
			:href="LinkedinShareUrl"
			target="_blank"
		>
			<span class="inline-block align-middle">Share on</span>
			<svg class="w-4 h-4 ml-1 inline-block fill-current">
				<use xlink:href="#icon-linkedin" x="0" y="0" />
			</svg>
		</a>
	</section>
</template>

<script lang="ts">
export default defineComponent({
	props: {
		url: String,
		postTitle: String,
	},
	data() {
		const osShareEnabled = process.client && navigator.share

		return {
			osShareEnabled: osShareEnabled,
		}
	},
	methods: {
		serializeObject(obj) {
			return Object.keys(obj)
				.reduce((a, k) => {
					a.push(k + '=' + encodeURIComponent(obj[k]))
					return a
				}, [])
				.join('&')
		},
		openModal(e) {
			e.preventDefault()
			window.open(
				e.target.href,
				'sharer',
				'toolbar=0,status=0,width=580,height=325'
			)
		},
		nativeShare(e) {
			e.preventDefault()
			const { url, postTitle } = this

			navigator.share({
				title: postTitle,
				url,
			})
		},
	},
	computed: {
		facebookShareUrl() {
			const { url, postTitle } = this
			const params = this.serializeObject({
				u: url,
				quote: postTitle + ' by Adrien Zaganelli',
			})
			return 'https://www.facebook.com/sharer/sharer.php?' + params
		},
		TwitterShareUrl() {
			const { url, postTitle } = this
			const params = this.serializeObject({
				text: postTitle + ' @adri_zag\n\n' + url,
			})
			return 'https://twitter.com/intent/tweet?' + params
		},
		LinkedinShareUrl() {
			const { url, postTitle } = this
			const params = this.serializeObject({
				url,
			})
			return 'https://www.linkedin.com/sharing/share-offsite?' + params
			/**
			 * <meta property='og:title' content='Title of the article"/>
			 * <meta property='og:image' content='//media.example.com/ 1234567.jpg"/>
			 * <meta property='og:description' content='Description that will show in the preview"/>
			 * <meta property='og:url' content='//www.example.com/URL of the article" />
			 */
		},
	},
})
</script>

<style lang="scss" scoped>
.facebook {
	background-color: #2d88ff;
	&:hover,
	&:focus {
		background-color: darken(#2d88ff, 10%);
	}
}
.twitter {
	background-color: #1da1f2;
	&:hover,
	&:focus {
		background-color: darken(#1da1f2, 10%);
	}
}
.linkedin {
	background-color: #0077b5;
	&:hover,
	&:focus {
		background-color: darken(#0077b5, 10%);
	}
}
</style>
