<template>
	<div class="c-card h-full flex flex-col justify-between text-sm">
		<div class="ratio">
			<NuxtLink :to="postUrl" v-if="thumbnail">
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
			</NuxtLink>

			<NuxtLink :to="postUrl">
				<h3 class="font-bold mt-3 text-xl">{{ post.title }}</h3>
			</NuxtLink>

			<ContentRendererMarkdown :value="post.excerpt" />
		</div>

		<div class="mt-4">
			<NuxtLink
				class="inline-block bg-black px-3 py-1 rounded-sm font-semibold text-white text bg-"
				:to="postUrl"
			>
				Read more &rarr;
			</NuxtLink>
			<time class="block italic mt-1" :datetime="post.date">{{ date }}</time>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps(['post', 'height'])

const thumbnail = computed(() => props.post.media)
const postUrl = computed(() => props.post._path)
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
