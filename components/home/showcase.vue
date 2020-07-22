<template>
  <section class="c-showcase relative">
    <nuxt-link :to="'/projects/' + slug" class="block sticky right-0 top-0" style="top: 30%">
      <cThumbnail :index="index" class="c-showcase__media" ref="media" :media="media" />
    </nuxt-link>
    <cList v-on:update="onProjectChange"/>
  </section>
</template>

<script>
import cThumbnail from '@/components/showcase/thumbnail.vue'
import cList from '@/components/showcase/list.vue'

import withMouse from '@/mixins/withMouse'
import gsap from 'gsap'

export default {
  created() {
    this.onFrame = this.onFrame.bind(this)
  },
  components: {
    cThumbnail,
    cList,
  },
  mixins: [withMouse],
  data() {
    return {
      media: this.$store.state.projects[0].acf.showcase_image,
      slug: null,
      index: 0,
    }
  },
  mounted() {
    // start preview mouse track
    this.smoothMouse = {x: 0, y: 0}
    this.lastRender = 0
    // window.requestAnimationFrame(this.onFrame)
  },
  beforeDestroy() {
    // stop preview mouse track
    window.cancelAnimationFrame(this.onFrame)
  },
  methods: {
    onFrame() {
      const now = Date.now()

      if ((now - this.lastRender) > this.$store.state.RAF_DELTA_TIME) {
        this.followMouse()
      }

      window.requestAnimationFrame(this.onFrame)
    },
    onProjectChange([project, index ]) {
      this.media = project.acf.showcase_image
      this.slug = project.slug
      this.index = index
    },
    followMouse() {
      if( !this._isBeingDestroyed) {
        const mouse = this.$mouse.movement;

        this.smoothMouse.x += ((mouse.x / 10) - this.smoothMouse.x) * 0.1
        this.smoothMouse.y += ((mouse.y / 10) - this.smoothMouse.y) * 0.1

        gsap.set(this.$refs.media.$el, {
          x: this.smoothMouse.x + 'px',
          y: this.smoothMouse.y + 'px',
          // rotateZ: ((Math.abs(this.smoothMouse.y) - Math.abs(this.smoothMouse.x)) / 20) + 'deg',
          force3D: true,
        })

        this.lastRender = Date.now()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-showcase__media {
    width: 50vw;
    top: 0;
    /* height: 40vh; */
    // background: lightgrey;

    position: absolute;
    top: 0;
    right: 0;
  }
</style>