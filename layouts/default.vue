<template>
  <div>
    <Icons />
    <!-- <CustomCursor /> -->
    <nuxt />
  </div>
</template>

<script>
import Icons from '@/layouts/icons.vue'
import CustomCursor from '@/components/common/cursor.vue'

export default {
  components: {
    Icons,
    // CustomCursor,
  }
}
</script>