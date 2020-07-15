<template>
  <div class="container w-3/4 mx-auto">
    <c-header />
    <c-showcase />
  </div>
</template>


<script>
import cHeader from '@/components/c-header.vue'
import cShowcase from '@/components/home/showcase.vue'

export default {
  components: {
    cHeader,
    cShowcase,
  },
  mounted() {
    if (process.browser) {
      // const Scrollbar = require('smooth-scrollbar').default
      // Scrollbar.init(document.body);

    }
  },
  beforeDestroy() {
  }
}
</script>


<style lang="scss">
  body, html {
    height: 100%;
  }
</style>