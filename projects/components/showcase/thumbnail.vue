<template>
  <div class="w-full bg-grey-0 c-thumbnail" @mouseenter="$bus.emit('cursor-difference')" @mouseout="$bus.emit('cursor-default')">
    <cMedia crossorigin="anonymous" :src="media.url" :type="media.type"/>
  </div>
</template>


<script>
import gsap from 'gsap'
import cMedia from '@/components/showcase/media.vue'

export default {
  components: {
    cMedia,
  },
  props: {
    media: {
      type: Object,
      default: () => ({}),
    },
    index: Number,
  },
}
</script>