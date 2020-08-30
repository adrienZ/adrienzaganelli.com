<template>
  <div class="container sm:w-3/4 w-5/6 mx-auto">
    <c-hero class="sm:pt-20 pt-10" />
    <c-showcase class="sm:mt-20 mt-10" />
    <c-about class="sm:mt-20 mt-10" />
    <c-footer class="sm:mt-20 mt-10" />
  </div>
</template>


<script>
import cShowcase from '@/components/home/showcase.vue'
import cHero from '@/components/home/hero.vue'
import cAbout from '@/components/home/about.vue'
import cFooter from '@/components/common/footer.vue'

import Rellax from 'rellax'

import withPageTransition from '@/mixins/withPageTransition'
import withScrollbar from '@/mixins/withScrollbar'

export default {
  components: {
    cShowcase,
    cHero,
    cAbout,
    cFooter,
  },
  mounted() {
    if (!document.documentMode) {
      this.rellax = new Rellax('.rellax', {
        // default tailwind breakpoints
        breakpoints: [768, 1024, 1280],
        round: true,
      })
    }
  },
  destroyed() {
    if (!document.documentMode) {
      this.rellax.destroy()
      this.$bus.$emit('cursor-default')
    }
  },
  mixins: [withPageTransition],
}
</script>


<style lang="scss">

</style>