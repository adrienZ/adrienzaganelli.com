<template>
  <div class="container w-3/4 mx-auto">
    <c-header />
    <c-hero />
    <c-showcase />
  </div>
</template>


<script>
import cHeader from '@/components/c-header.vue'
import cShowcase from '@/components/home/showcase.vue'
import cHero from '@/components/home/hero.vue'

import withPageTransition from '@/mixins/withPageTransition'
import withScrollbar from '@/mixins/withScrollbar'

export default {
  components: {
    cHeader,
    cShowcase,
    cHero,
  },
  mixins: [withPageTransition, withScrollbar],
}
</script>


<style lang="scss">
  // smootscroll
  body, html {
    height: 100%;
  }
</style>