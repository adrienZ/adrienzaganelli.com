<template>
  <section class="c-showcase relative">
    <h3 class="landing-title">Selected Works:</h3>

    <nuxt-link event="" :to="'/projects/' + slug"  ref="media" @click.native.prevent="onProjectSelect(index)" class="block right-0 top-0" @mouseover.native="$bus.$emit('cursor-hover')" @mouseleave.native="$bus.$emit('cursor-default')">
      <cThumbnail :index="index" class="c-showcase__media" :media="media" />
    </nuxt-link>

    <cList ref="list" :onSelectCallback="onProjectSelect" v-on:update="onProjectChange"/>
  </section>
</template>

<script>
// components
import cThumbnail from '@/components/showcase/thumbnail.vue'
import cList from '@/components/showcase/list.vue'

// libs
import gsap from 'gsap'

// helpers
import withMouse from '@/mixins/withMouse'

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
      isLoading: false,
    }
  },
  mounted() {
    // start preview mouse track
    this.smoothMouse = {x: 0, y: 0}
    this.lastRender = 0
    gsap.ticker.add(this.onFrame);
  },
  beforeDestroy() {
    // stop preview mouse track
    gsap.ticker.remove(this.onFrame);
  },
  methods: {
    onFrame() {
      const now = Date.now()

      if ((now - this.lastRender) > this.$store.state.RAF_DELTA_TIME) {
        this.followMouse()
      }
    },
    onProjectChange([project, index]) {
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
    },
    onProjectSelect(index) {
      if (this.isLoading) return

      this.isLoading = true

      const nextProject = this.$store.state.projects[index]

      const items = Array.from(
        this.$refs.list.$el.querySelectorAll('.c-list__item')
      )

      // hide all items expept selected
      gsap.to(items.filter((el, i) => i !== index), {
        autoAlpha: 0,
        x: -30,
        duration: 0.2,
        stagger: 0.075,
        onComplete: () => {
          gsap.delayedCall(0.1, () => {
            this.isLoading = false
            this.$router.push('/case-study/' + nextProject.slug)
          })
        },
        ease: 'power4.out',
      })
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