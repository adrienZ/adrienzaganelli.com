<template>
  <div class="container w-3/4 mx-auto">
    <c-hero class="sm:mt-20 mt-10" />
    <c-showcase class="sm:mt-20 mt-10" />
    <c-about class="sm:mt-20 mt-10" />
    <c-footer class="sm:mt-20 mt-10" />
  </div>
</template>


<script>
import cShowcase from '@/components/home/showcase.vue'
import cHero from '@/components/home/hero.vue'
import cAbout from '@/components/home/about.vue'
import cFooter from '@/components/home/footer.vue'

import withPageTransition from '@/mixins/withPageTransition'
import withScrollbar from '@/mixins/withScrollbar'

export default {
  components: {
    cShowcase,
    cHero,
    cAbout,
    cFooter,
  },
  beforeDestroy() {
    this.$bus.$emit('cursor-default')
  },
  mixins: [withPageTransition],
}
</script>


<style lang="scss">

</style>