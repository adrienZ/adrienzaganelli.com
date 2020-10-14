<template>
  <div>
    <Icons />
    <Header />
    <nuxt class="layout-blog"/>
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