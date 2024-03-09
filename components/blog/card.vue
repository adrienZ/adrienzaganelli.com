<template>
	<div class="c-card h-full flex flex-col text-sm">
		<div class="ratio">
			<NuxtLink :to="postUrl" v-if="post.image" @click.prevent="handleClick">
				<span class="sr-only">{{ post.title }}</span>
				<NuxtImg
					class="shadow-md"
					:src="post.image.src"
					:alt="post.image.alt"
					format="webp"
					width="720"
					height="405"
					quality="75"
					:class="{ active: active === post._path }"
					:imgAttrs="{ class: 'w-full' }"
				/>
			</NuxtLink>
		</div>

		<NuxtLink class="mt-3" :to="postUrl">
			<h3 class="font-bold text-xl">{{ post.title }}</h3>
		</NuxtLink>

		<ContentRendererMarkdown :value="post.excerpt" />

		<div class="mt-auto flex justify-between items-baseline">
			<NuxtLink
				class="inline-block bg-black px-3 py-1 rounded-sm font-semibold text-surface text mt-4"
				:to="postUrl"
			>
				Read more &rarr;
			</NuxtLink>
			<time class="block italic" :datetime="post.date">{{ date }}</time>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps(["post", "height"]);

const postUrl = computed(() => props.post._path + "?utm_medium=blog-index");
const date = computed(() =>
	new Date(props.post.date).toLocaleDateString(undefined, {
		day: "numeric",
		month: "long",
		year: "numeric",
	}),
);

const active = useState();

function handleClick() {
	active.value = props.post._path;
}
</script>

<style lang="scss" scoped>
.ratio {
	position: relative;
	padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 3 by 4 = 0.75) */
	width: 100%;
	> * {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}
}
</style>

<style scoped>
img.active {
	view-transition-name: post-image-selected;
	contain: layout;
}
</style>
