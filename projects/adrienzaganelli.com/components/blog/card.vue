<template>
	<div class="c-card h-full flex flex-col justify-between text-sm">
		<div class="ratio">
			<nuxt-link :to="postUrl" v-if="thumbnail">
				<span class="visually-hidden">{{ post.title }}</span>
				<NuxtImg
					class="shadow-md"
					:src="thumbnail"
					alt="thumbnail[0].alt_text"
					format="webp"
					width="720"
					:height="height || 540"
					quality="75"
					:imgAttrs="{ class: 'w-full' }"
				/>
			</nuxt-link>

			<nuxt-link :to="postUrl">
				<h3 class="font-bold mt-3 text-xl">{{ post.title }}</h3>
			</nuxt-link>

			<nuxt-content class="mt-1" :document="{ body: post.excerpt }" />
		</div>

		<div class="mt-4">
			<nuxt-link
				class="inline-block bg-black px-3 py-1 rounded-sm font-semibold text-white text bg-"
				:to="postUrl"
			>
				Read more &rarr;
			</nuxt-link>
			<time class="block italic mt-1" :datetime="post.date">{{ date }}</time>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['post', 'height'])

const thumbnail = computed(() => props.post.media)
const postUrl = computed(() => '/blog/' + props.post.slug)
const date = computed(() =>
	new Date(props.post.createdAt).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
)
</script>

<style lang="scss" scoped>
.ratio {
	position: relative;
	// padding-top: 56.25%; /* 4:3 Aspect Ratio (divide 3 by 4 = 0.75) */
	width: 100%;
	img {
		// position: absolute;
		// width: 100%;
		// height: 100%;
		top: 0;
		// object-fit: cover;
	}
}
</style>
