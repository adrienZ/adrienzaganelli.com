<template>
  <div data-scrollbar-fixed class="c-cursor relative h-8 w-8 rounded-full js">
    <div ref="inner" class="absolute c-cursor__inner w-1/2 rounded-full"></div>
    <div ref="outer" class="absolute c-cursor__outer w-full h-full rounded-full"></div>
  </div>
</template>

<script>
import withMouse from '@/mixins/withMouse'
import gsap from 'gsap'

export default {
  mixins: [withMouse],
  created() {
    this.onFrame = this.onFrame.bind(this)
    this.cloneMouseMove = this.onMouseMove.bind({})
  },
  mounted() {
    document.body.classList.add('no-cursor')
    // start preview mouse track
    this.smoothMouseInner = {x: 0, y: 0}
    this.smoothMouseOuter = {x: 0, y: 0}
    this.lastRender = 0
    window.addEventListener('mousemove', this.updateCursorState)

    window.requestAnimationFrame(this.onFrame)
  },
  beforeDestroy() {
    document.body.classList.remove('no-cursor')

    window.removeEventListener('mousemove', this.updateCursorState)
    // stop preview mouse track
    window.cancelAnimationFrame(this.onFrame)
  },
  methods: {
    onFrame() {
      const now = Date.now()

      if ((now - this.lastRender) > this.$store.state.RAF_DELTA_TIME) {
        this.moveCursor()
      }

      window.requestAnimationFrame(this.onFrame)
    },
    moveCursor() {
      if( !this._isBeingDestroyed) {

        const mouse = this.$mouse.position;
        this.smoothMouseInner.x += (mouse.x - this.smoothMouseInner.x) * 0.4
        this.smoothMouseInner.y += (mouse.y - this.smoothMouseInner.y) * 0.4
        this.smoothMouseOuter.x += (mouse.x - this.smoothMouseOuter.x) * 0.3
        this.smoothMouseOuter.y += (mouse.y - this.smoothMouseOuter.y) * 0.3

        const { height, width } = this

        gsap.set(this.$refs.inner, {
          x: this.smoothMouseInner.x - (width/2),
          y: this.smoothMouseInner.y - (height/2),
        })
        gsap.set(this.$refs.outer, {
          x: this.smoothMouseOuter.x - (width/2),
          y: this.smoothMouseOuter.y - (height/2),
        })

        this.lastRender = Date.now()
      }
    },
    // overide
    onResize() {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
    },
    updateCursorState(e) {
      const { target } = e

      // console.log(target.classList);
      this.cloneMouseMove(e)
    },
  }
}
</script>

<style lang="scss">
  .no-cursor * {
    cursor: none;
  }

  .c-cursor {
    z-index: 1000;
    pointer-events: none;
    // mix-blend-mode: exclusion;
    position: fixed;
    top: 0;
    left: 0;

    &__inner {
      height: 50%;
      left: 25%;
      top: 25%;
      background: red;
    }

    &__outer {
      border: 1px solid red;
    }
  }
</style>