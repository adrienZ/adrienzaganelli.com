<template>
	<section>
		<h3 class="landing-title">About &amp; Contact</h3>

		<div class="sm:flex sm:-mx-3">
			<div class="sm:w-1/3 sm:px-3 mb-5 sm:mb-0">
				<NuxtPicture
					@mouseenter="$bus.emit('cursor-difference')"
					@mouseout="$bus.emit('cursor-default')"
					alt=""
					ref="pictureRef"
					class="rellax"
					loading="lazy"
					src="/images/portrait.jpg"
					data-rellax-speed="0.5"
					data-rellax-xs-speed="0"
					data-rellax-mobile-speed="0"
					data-rellax-tablet-speed="0"
					data-rellax-percentage="0.5"
					:imgAttrs="{ class: 'shadow-xl rounded-md w-full' }"
				/>
			</div>

			<div
				class="sm:w-2/3 sm:px-3 text-xl sm:-mt-1 rellax"
				ref="textRef"
				data-rellax-speed="-0.25"
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				data-rellax-tablet-speed="0"
				data-rellax-percentage="0"
			>
				<p>Hi, my name is Adrien Zaganelli, nice to meet you!</p>

				<p class="mt-4">
					<cExternal
						href="https://hetic.net/"
						class="hover:text-pimper focus:text-pimper"
						@click="trackLinkClick"
					>
						HETIC
					</cExternal>
					graduate, I learned how to code, design and do business on the Web. I
					like to try new things everyday on this (very) curious world.
				</p>

				<p class="mt-4">
					From Paris to Montréal, I've worked in several nice places. Both
					Companies and agencies, such as:
					<cExternal href="https://agence-me.com" @click="trackLinkClick"
						><i>AgenceMe</i></cExternal
					>
					,
					<cExternal href="https://sketchfab.com" @click="trackLinkClick"
						><i>Sketchfab</i></cExternal
					>
					,
					<cExternal href="https://akufen.ca" @click="trackLinkClick"
						><i>Akufen Studio</i></cExternal
					>
					,
					<cExternal href="https://hki.paris" @click="trackLinkClick"
						><i>HelloHikimori</i></cExternal
					>
					,
					<cExternal href="https://colorz.fr" @click="trackLinkClick"
						><i>Colorz</i></cExternal
					>
					, and
					<cExternal href="https://www.leetchi.com/" @click="trackLinkClick"
						><i>Leetchi</i></cExternal
					>
					.
				</p>

				<p class="mt-4">
					In my spare time, I write some articles for tech publishers, find them
					below:
				</p>
				<ul class="italic text-lg">
					<li class="my-3 sm:my-0">
						&rarr;
						<cExternal
							href="https://medium.com/free-code-camp/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5"
							@click="trackLinkClick"
						>
							Time-saving CSS techniques to create responsive images
						</cExternal>
					</li>
					<li class="my-3 sm:my-0">
						&rarr;
						<cExternal
							href="https://medium.com/free-code-camp/how-to-make-your-app-work-offline-with-the-power-of-javascript-685d968bcfbb"
							@click="trackLinkClick"
						>
							How to make your app work offline with the power of JavaScript
						</cExternal>
					</li>
					<li class="my-3 sm:my-0">
						&rarr;
						<cExternal
							href="https://www.freecodecamp.org/news/how-to-share-variables-across-html-css-and-javascript-using-webpack/"
							@click="trackLinkClick"
						>
							How to share variables across HTML, CSS, and JavaScript using
							Webpack
						</cExternal>
					</li>
				</ul>

				<p v-if="config.NEED_JOB" class="mt-4">
					Last but not least,
					<b>I'm looking for a new job in Paris this fall.</b>
					you can contact me here:
					<cExternal
						class="text-pimper underline-effect--link"
						href="mailto:adrienzaganelli@gmail.com"
						@click="trackLinkClick"
					>
						adrienzaganelli@gmail.com
					</cExternal>
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import cExternal from "@/components/common/external.vue";
import type { VueInstance } from "@vueuse/core";
import { AnalyticsService } from "~/src/services/AnalyticsService";

const config = useAppConfig();

const pictureRef = ref<VueInstance>();
const textRef = ref<HTMLElement>();
const pictureElement = computed(
	() => pictureRef.value?.$el as HTMLElement | undefined,
);

useRellax(pictureElement);
useRellax(textRef);

function trackLinkClick(event: MouseEvent) {
	const link = event
		.composedPath()
		.find((el) => (el as HTMLElement).hasAttribute("href"));

	AnalyticsService.trackEvent("homepage link click", {
		url: (link as HTMLLinkElement).getAttribute("href") || "ERROR",
	});
}
</script>
