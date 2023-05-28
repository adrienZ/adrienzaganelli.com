<template>
	<div class="c-card h-full flex flex-col justify-between text-sm">
		<div>
			<nuxt-link :to="postUrl" v-if="thumbnail && thumbnail[0]">
				<span class="visually-hidden">{{ post.title.rendered }}</span>
				<NuxtPicture
					class="shadow-md"
					:src="thumbnail[0].media_details.sizes.blog_preview.source_url"
					:alt="thumbnail[0].alt_text"
					:imgAttrs="{ class: 'w-100' }"
				/>
			</nuxt-link>

			<nuxt-link :to="postUrl">
				<h3 class="font-bold mt-3 text-xl">{{ post.title.rendered }}</h3>
			</nuxt-link>

			<div class="mt-1" v-html="post.excerpt.rendered"></div>
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
const props = defineProps(['post'])

const thumbnail = computed(() => props.post._embedded?.['wp:featuredmedia'])
const postUrl = computed(() => '/blog/' + props.post.slug)
const date = computed(() =>
	new Date(props.post.date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
)
</script>
