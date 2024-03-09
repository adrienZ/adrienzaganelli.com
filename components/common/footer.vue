<template>
	<footer class="c-footer">
		<div
			v-if="variant === 'default'"
			class="border w-full border-black border-opacity-25 mb-5 sm:mb-10"
		></div>
		<BrandedDivider v-else />

		<h4 class="landing-title" v-if="variant !== 'branded-minimal'">
			👋 Get in touch
		</h4>
		<div class="-mt-4 sm:mt-0 md:flex justify-between items-center pb-16">
			<ul
				class="text-3xl font-semibold md:flex sm:flex-wrap md:items-center leading-relaxed"
			>
				<!-- Links -->
				<li v-if="$route.path !== '/'" class="md:mr-5" data-type="website">
					<nuxt-link
						class="underline-effect--hover inline-block"
						to="/"
						@click="trackLinkClick"
						data-linkz-ai-ignore
					>
						Portfolio.
					</nuxt-link>
				</li>
				<li class="md:mr-5" data-type="twitter">
					<cExternal
						class="underline-effect--hover inline-block"
						href="https://twitter.com/adri_zag"
						@click="trackLinkClick"
						data-linkz-ai-ignore
					>
						X (Twitter).
					</cExternal>
				</li>
				<li class="md:mr-5" data-type="linkedin">
					<cExternal
						class="underline-effect--hover inline-block"
						href="https://www.linkedin.com/in/adrienzaganelli/"
						@click="trackLinkClick"
					>
						Linkedin.
					</cExternal>
				</li>
				<li class="md:mr-5" data-type="github">
					<cExternal
						class="underline-effect--hover inline-block"
						href="https://github.com/adrienZ"
						@click="trackLinkClick"
						data-linkz-ai-ignore
					>
						Github.
					</cExternal>
				</li>
				<!-- <li class="md:mr-5" data-type="codepen">
					<cExternal
						class="underline-effect--hover inline-block"
						href="https://codepen.io/adri_zag"
						@click="trackLinkClick"
						data-linkz-ai-ignore
					>
						Codepen.
					</cExternal>
				</li> -->
				<li class="md:mr-5" data-type="email">
					<cExternal
						class="underline-effect--hover inline-block"
						href="mailto:adrienzaganelli@gmail.com"
						@click="trackLinkClick"
					>
						E-mail.
					</cExternal>
				</li>
				<!-- End Links -->
			</ul>

			<!-- Logo footer -->
			<div v-if="variant === 'default'" class="text-center mt-8 sm:mt-0">
				<svg class="w-12 h-12 inline-block">
					<use xlink:href="#icon-logo" x="0" y="0" />
				</svg>
			</div>
			<!-- End Logo footer -->
		</div>
	</footer>
</template>

<script setup lang="ts">
import cExternal from "@/components/common/external.vue";
import { AnalyticsService } from "~/src/services/AnalyticsService";

withDefaults(
	defineProps<{
		variant?: "default" | "branded" | "branded-minimal";
	}>(),
	{ variant: "branded-minimal" },
);

function trackLinkClick(event: MouseEvent) {
	const link = event
		.composedPath()
		.find((el) => (el as HTMLElement).hasAttribute("href"));

	AnalyticsService.trackEvent("footer link click", {
		url: (link as HTMLLinkElement).getAttribute("href") || "ERROR",
	});
}
</script>

<style lang="scss" scoped>
// nuxt target static has a lot of limitations for routing...
.page-home .c-footer li[data-type="website"] {
	display: none;
}

.layout-blog .c-footer li[data-type="linkedin"] {
	display: none;
}
</style>
