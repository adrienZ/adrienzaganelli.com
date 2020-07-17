<template>
  <div class="w-full">
    <div class="h-12 bg-gray-600" v-if="!media.type"></div>
    <video v-else-if="media.type === 'video'" class="w-full" muted autoplay playsline loop :src="media.url"></video>
    <img v-else-if="media.type === 'image'" class="w-full" :src="media.url" />
  </div>
</template>


<script>
export default {
  props: {
    media: {
      type: Object,
      default: () => ({}),
    }
  }
}
</script>