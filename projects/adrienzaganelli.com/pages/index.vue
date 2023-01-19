<template>
	<section class="page-home">
		<div class="container sm:w-3/4 w-5/6 mx-auto">
			<cHero class="sm:pt-20 pt-10" />
			<c-showcase class="sm:mt-20 mt-10" />
			<cAbout class="sm:mt-20 mt-10" />
			<cFooter class="sm:mt-20 mt-10" />
		</div>
	</section>
</template>

<script lang="ts">
import cShowcase from '@/components/home/showcase.vue'
import cHero from '@/components/home/hero.vue'
import cAbout from '@/components/home/about.vue'
import cFooter from '@/components/common/footer.vue'

import Rellax, { RellaxInstance } from 'rellax'

import withPageTransition from '@/mixins/withPageTransition'

export default defineComponent({
	components: {
		cShowcase,
		cHero,
		cAbout,
		cFooter,
	},
	data() {
		return {
			rellax: null as null | RellaxInstance,
		}
	},
	mounted() {
		if (!document.documentMode) {
			this.rellax = new Rellax('.rellax', {
				// default tailwind breakpoints
				breakpoints: [768, 1024, 1280],
				round: true,
				wrapper: this.$el,
			})
		}
	},
	destroyed() {
		if (!document.documentMode) {
			this.rellax?.destroy()
			this.$bus.emit('cursor-default')
		}
	},
	mixins: [withPageTransition],
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
