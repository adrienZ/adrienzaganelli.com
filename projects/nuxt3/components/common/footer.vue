<template>
	<footer class="c-footer">
		<div
			class="border w-full border-black border-opacity-25 mb-5 sm:mb-10"
		></div>

		<h4 class="landing-title">👋 Get in touch</h4>
		<div class="-mt-4 sm:mt-0 md:flex justify-between items-end pb-16">
			<ul
				class="text-3xl font-semibold md:flex sm:flex-wrap md:items-center leading-relaxed"
			>
				<!-- Links -->
				<li class="md:mr-5" data-type="website">
					<nuxt-link
						class="underline-effect--hover inline-block"
						to="/"
						data-linkz-ai-ignore
					>
						Portfolio.
					</nuxt-link>
				</li>
				<li class="md:mr-5" data-type="twitter">
					<cExternal
						class="underline-effect--hover inline-block"
						href="https://twitter.com/adri_zag"
						data-linkz-ai-ignore
					>
						Twitter.
					</cExternal>
				</li>
				<li class="md:mr-5" data-type="linkedin">
					<cExternal
						class="underline-effect--hover inline-block"
						href="https://www.linkedin.com/in/adrienzaganelli/"
					>
						Linkedin.
					</cExternal>
				</li>
				<li class="md:mr-5" data-type="github">
					<cExternal
						class="underline-effect--hover inline-block"
						href="https://github.com/adrienZ"
						data-linkz-ai-ignore
					>
						Github.
					</cExternal>
				</li>
				<li class="md:mr-5" data-type="codepen">
					<cExternal
						class="underline-effect--hover inline-block"
						href="https://codepen.io/adri_zag"
						data-linkz-ai-ignore
					>
						Codepen.
					</cExternal>
				</li>
				<li class="md:mr-5" data-type="email">
					<cExternal
						class="underline-effect--hover inline-block"
						href="mailto:adrienzaganelli@gmail.com"
					>
						E-mail.
					</cExternal>
				</li>
				<!-- End Links -->
			</ul>

			<!-- Logo footer -->
			<div class="text-center mt-8 sm:mt-0">
				<svg class="w-12 h-12 inline-block">
					<use xlink:href="#icon-logo" x="0" y="0" />
				</svg>
			</div>
			<!-- End Logo footer -->
		</div>
	</footer>
</template>

<script setup>
import cExternal from '@/components/common/external.vue'
</script>

<style lang="scss" scoped>
// nuxt target static has a lot of limitations for routing...
.page-home .c-footer li[data-type='website'] {
	display: none;
}

.layout-blog .c-footer li[data-type='linkedin'] {
	display: none;
}
</style>
