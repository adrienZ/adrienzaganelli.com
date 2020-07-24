<template>
  <div class="container w-3/4 mx-auto">
    <c-header />
    <c-hero />
    <c-showcase />
    <c-about />
    <c-signature />
  </div>
</template>


<script>
import cHeader from '@/components/c-header.vue'
import cShowcase from '@/components/home/showcase.vue'
import cHero from '@/components/home/hero.vue'
import cAbout from '@/components/home/about.vue'
import cSignature from '@/components/common/signature.vue'

import withPageTransition from '@/mixins/withPageTransition'
import withScrollbar from '@/mixins/withScrollbar'

export default {
  components: {
    cHeader,
    cShowcase,
    cHero,
    cAbout,
    cSignature,
  },
  mixins: [withPageTransition],
}
</script>


<style lang="scss">

</style>