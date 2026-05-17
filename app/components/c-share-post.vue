<template>
	<section class="sm:flex items-center">
		<h4 class="landing-title title">Sharing is caring :</h4>
		<div class="sm:flex">
			<ClientOnly>
				<a
					v-if="osShareEnabled"
					href="#"
					class="text-center sm:text-left block sm:inline-block sm:ml-4 mt-2 sm:mt-0 border-pimper border-2 text-pimper font-bold py-2 px-4 rounded"
					@click="nativeShare"
				>
					<span class="inline-block align-middle">Share this post</span>
				</a>
			</ClientOnly>
			<a
				class="facebook text-center sm:text-left block sm:inline-block bg-gray-500 text-white font-bold py-2 px-4 rounded"
				:class="{ 'sm:ml-4 mt-2 sm:mt-0': true }"
				@click="openModal"
				:href="facebookShareUrl"
				target="_blank"
			>
				<span class="inline-block align-middle sm:hidden">Share on</span>
				<svg class="w-5 h-5 ml-1 inline-block align-middle fill-current">
					<use xlink:href="#icon-facebook" x="0" y="0" />
				</svg>
			</a>
			<a
				class="twitter text-center sm:text-left block sm:inline-block sm:ml-4 mt-2 sm:mt-0 bg-gray-500 text-white font-bold py-2 px-4 rounded"
				@click="openModal"
				:href="TwitterShareUrl"
				target="_blank"
			>
				<span class="inline-block align-middle sm:hidden">Share on</span>
				<svg class="w-5 h-5 ml-1 inline-block fill-current">
					<use xlink:href="#icon-twitter" x="0" y="0" />
				</svg>
			</a>
			<a
				class="linkedin text-center sm:text-left block sm:inline-block sm:ml-4 mt-2 sm:mt-0 bg-gray-500 text-white font-bold py-2 px-4 rounded"
				@click="openModal"
				:href="LinkedinShareUrl"
				target="_blank"
			>
				<span class="inline-block align-middle sm:hidden">Share on</span>
				<svg class="w-6 h-6 ml-1 inline-block fill-current">
					<use xlink:href="#icon-linkedin" x="0" y="0" />
				</svg>
			</a>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { ClientOnly } from "#components";
import { computed } from "vue";

const props = defineProps<{
	url: string;
	postTitle: string;
}>();

const osShareEnabled = import.meta.client && navigator.share;

function serializeObject(obj: Record<string, string>) {
	return Object.keys(obj)
		.reduce((a, k) => {
			a.push(k + "=" + encodeURIComponent(obj[k]!));
			return a;
		}, [] as string[])
		.join("&");
}

function openModal(e: MouseEvent) {
	e.preventDefault();
	window.open(
		// @ts-expect-error FIXME: legacy code
		e.target.href,
		"sharer",
		"toolbar=0,status=0,width=580,height=325",
	);
}

function nativeShare(e: MouseEvent) {
	e.preventDefault();
	const { url, postTitle } = props;

	navigator.share({
		title: postTitle,
		url,
	});
}

const facebookShareUrl = computed(() => {
	const { url, postTitle } = props;
	const params = serializeObject({
		u: url,
		quote: postTitle + " by Adrien Zaganelli",
	});
	return "https://www.facebook.com/sharer/sharer.php?" + params;
});

const TwitterShareUrl = computed(() => {
	const { url, postTitle } = props;
	const params = serializeObject({
		text: postTitle + " @adri_zag\n\n" + url,
	});
	return "https://twitter.com/intent/tweet?" + params;
});

const LinkedinShareUrl = computed(() => {
	const { url } = props;
	const params = serializeObject({
		url,
	});
	return "https://www.linkedin.com/sharing/share-offsite?" + params;
	/**
	 * <meta property='og:title' content='Title of the article"/>
	 * <meta property='og:image' content='//media.example.com/ 1234567.jpg"/>
	 * <meta property='og:description' content='Description that will show in the preview"/>
	 * <meta property='og:url' content='//www.example.com/URL of the article" />
	 */
});
</script>

<style lang="scss" scoped>
.title {
	margin-bottom: 0;
}

.facebook {
	background-color: hsl(214 100% 59%);
	&:hover,
	&:focus {
		background-color: hsl(214 100% 49%);
	}
}
.twitter {
	background-color: hsl(203 89% 53%);
	&:hover,
	&:focus {
		background-color: hsl(203 89% 43%);
	}
}
.linkedin {
	background-color: hsl(201 100% 36%);
	&:hover,
	&:focus {
		background-color: hsl(201 100% 26%);
	}
}
</style>
