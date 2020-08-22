<template>
  <div class="container w-3/4 mx-auto">
    <c-hero />
    <c-showcase />
    <c-about />
  </div>
</template>


<script>
import cShowcase from '@/components/home/showcase.vue'
import cHero from '@/components/home/hero.vue'
import cAbout from '@/components/home/about.vue'

import withPageTransition from '@/mixins/withPageTransition'
import withScrollbar from '@/mixins/withScrollbar'

export default {
  components: {
    cShowcase,
    cHero,
    cAbout,
  },
  beforeDestroy() {
    this.$bus.$emit('cursor-default')
  },
  mixins: [withPageTransition],
}
</script>


<style lang="scss">

</style>