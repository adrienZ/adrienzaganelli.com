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
  data() {
    return {
      hidden: false,
      hovering: false,
      inner__scale: 0,
      outer__scale: 0.5,
      outer__opacity: 0,
    }
  },
  mounted() {
    document.body.classList.add('no-cursor')
    // start preview mouse track
    this.smoothMouseInner = {x: 0, y: 0}
    this.smoothMouseOuter = {x: 0, y: 0}
    this.lastRender = 0
    window.addEventListener('mousemove', this.updateCursorState)

    window.addEventListener('mousedown', () => {
      gsap.to(this, { inner__scale: 1, duration: 0.1})
    })

    window.addEventListener('mouseup', () => {
      gsap.to(this, { inner__scale: 0, duration: 0.1})
    })

    this.hoverTl = null

    this.$bus.$on('cursor-hover', () => {
      if (this.hoverTl) this.hoverTl.kill()

      this.hovering = true

      gsap.to(this, {
        duration: 0.5,
        outer__scale: 1,
        outer__opacity: 1,
      })
    })

    this.$bus.$on('cursor-default', () => {
      if (this.hoverTl) this.hoverTl.kill()

      gsap.to(this, {
        duration: 0.5,
        outer__scale: 0.5,
        outer__opacity: 0,
        onComplete: () => this.hovering = false
      })
    })
    gsap.ticker.add(this.onFrame);
  },
  beforeDestroy() {
    document.body.classList.remove('no-cursor')

    window.removeEventListener('mousemove', this.updateCursorState)
    // stop preview mouse track
    gsap.ticker.remove(this.onFrame);
  },
  methods: {
    onFrame() {
      const now = Date.now()

      if ((now - this.lastRender) > this.$store.state.RAF_DELTA_TIME) {
        this.moveCursor()
      }
    },
    moveCursor() {
      if( !this._isBeingDestroyed) {

        const mouse = this.$mouse.position;
        this.smoothMouseInner.x += (mouse.x - this.smoothMouseInner.x) * 0.4
        this.smoothMouseInner.y += (mouse.y - this.smoothMouseInner.y) * 0.4

        // if (this.hovering) {
          this.smoothMouseOuter.x += (mouse.x - this.smoothMouseOuter.x) * 0.3
          this.smoothMouseOuter.y += (mouse.y - this.smoothMouseOuter.y) * 0.3
        // }

        const { height, width } = this



        const innerOptions = {
          x: this.smoothMouseInner.x - (width/2),
          y: this.smoothMouseInner.y - (height/2),
          scale: 1 - (0.5 * this.inner__scale),
        }

        gsap.set(this.$refs.inner, innerOptions)

        const outerOptions = {
          x: this.smoothMouseOuter.x - (width/2),
          y: this.smoothMouseOuter.y - (height/2),
          scale: this.outer__scale,
          opacity: this.outer__opacity,
        }

        gsap.set(this.$refs.outer, outerOptions)

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
      this.cloneMouseMove(e)


      // handle IFRAMES
      if (target.tagName === 'IFRAME' && !this.hidden) {
        this.hide()
      }
      if (target.tagName !== 'IFRAME' && this.hidden) {
        this.show()
      }
    },
    hide() {
      const { position } = this.$mouse
      if (this.tl) this.tl.kill()
      this.tl = gsap.to(this.$el, { autoAlpha: 0, duration: 0.25, onComplete: () => {
        document.body.classList.remove('no-cursor')
      }
      })
      this.hidden = true

      return this.tl
    },
    show() {
      const { position } = this.$mouse
      if (this.tl) this.tl.kill()
      this.tl = gsap.to(this.$el, { autoAlpha: 1, duration: 0.15, onComplete: () => {
        document.body.classList.add('no-cursor')
      }
      })
      this.hidden = false
    }
  }
}
</script>

<style lang="scss">
  .no-cursor * {
    // cursor: none;
  }

  .c-cursor {
    z-index: 100;
    pointer-events: none;
    mix-blend-mode: difference;
    position: fixed;
    top: 0;
    left: 0;

    &__inner {
      height: 50%;
      left: 25%;
      top: 25%;
      background: rgba(#d81b60, 0.75);
      transform-origin: center center;
      will-change: tranform;
    }

    &__outer {
      border: 2px solid #d81b60;
      transform-origin: center center;
      will-change: tranform;
    }
  }
</style>