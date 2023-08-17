<template>
	<section class="page-home">
		<NuxtLayout name="folio">
			<div class="container sm:w-3/4 w-5/6 mx-auto">
				<c-hero class="sm:pt-20 pt-10" />
				<c-showcase class="sm:mt-20 mt-10" />
				<c-about class="sm:mt-20 mt-10" />
				<c-footer class="sm:mt-20 mt-10" />
			</div>
		</NuxtLayout>
	</section>
</template>

<script setup lang="ts">
import cShowcase from '@/components/home/showcase.vue'
import cHero from '@/components/home/hero.vue'
import cAbout from '@/components/home/about.vue'
import cFooter from '@/components/common/footer.vue'

import Rellax from 'rellax'

const { $bus } = useNuxtApp()

let rellax

onMounted(() => {
	rellax = new Rellax('.rellax', {
		// default tailwind breakpoints
		breakpoints: [768, 1024, 1280],
		round: true,
		wrapper: getCurrentInstance()!.proxy.$el,
	})
})

onBeforeUnmount(() => {
	rellax.destroy()
	$bus.emit('cursor-default')
})

definePageMeta({
	pageTransition: {
		appear: true,
		mode: 'out-in',
		css: false,
		onEnter: PageTransition.defaultTransitionIn,
		onLeave: PageTransition.defaultTransitionOut,
	},
})
</script>

<style lang="scss">
// scroll container
// overflow-x hidden
// BUT
// keep position sticky
.page-home {
	position: absolute;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
}
</style>
