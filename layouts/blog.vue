<template>
  <div>
    <Icons />
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Icons from '@/layouts/icons.vue'
import Header from '@/components/blog/header.vue'

export default {
  components: {
    Icons,
    Header,
  }
}
</script>