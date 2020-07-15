<template>
  <section class="c-showcase relative">
    <nuxt-link :to="'/projects/' + slug" class="block sticky right-0 top-0" style="top: 30%">
      <cThumbnail class="c-showcase__media" ref="media" :media="media" />
    </nuxt-link>
    <cList v-bind:media.sync="media" v-bind:slug.sync="slug"/>
  </section>
</template>

<script>
import cThumbnail from '@/components/showcase/thumbnail.vue'
import cList from '@/components/showcase/list.vue'

export default {
  components: {
    cThumbnail,
    cList,
  },
  data() {
    return {
      media: {},
      slug: null,
    }
  },
  created() {
    this.onMouseMove = this.onMouseMove.bind(this)
  },
  mounted() {
    window.addEventListener('mousemove', this.onMouseMove)
    this.smoothedMovement = {
      x: 0,
      y: 0,
    }
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    onMouseMove(e) {
      const {screenX, screenY} = e

      const center = {
        y: window.innerHeight / 2,
        x: window.innerWidth / 2,
      }

      const movement = {
        x: (screenX - center.x) / 5,
        y: (screenY - center.y) / 5,
      }

      this.smoothedMovement.x += (movement.x - this.smoothedMovement.x) * 0.1
      this.smoothedMovement.y += (movement.y - this.smoothedMovement.y) * 0.1

      this.$refs.media.$el.style.transform = `translate3D(${ this.smoothedMovement.x}px, ${this.smoothedMovement.y}px, 0)`
    }
  }
}
</script>

<style>
  .c-showcase__media {
    width: 40vw;
    top: 0;
    /* height: 40vh; */
    background: lightgrey;

    position: absolute;
    top: 0;
    right: 0;
  }
</style>