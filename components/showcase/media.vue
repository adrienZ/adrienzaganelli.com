<template>
  <video crossorigin="anonymous" v-if="type === 'video'" class="w-full" muted autoplay playsline loop :src="src"></video>
  <img crossorigin="anonymous" v-else-if="type === 'image'" class="w-full" :src="src" />
</template>

<script>
export default {
  props: ['type', 'src']
}
</script>