<template>
  <button @click="resetScroll" class="c-back-to-top opacity-0 shadow-md border-2 bg-light rounded-full p-4 z-20" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">
    <svg class="w-6 h-6 inline-block fill-pimper">
      <use xlink:href="#icon-arrow-top" x="0" y="0"/>
    </svg>
  </button>
</template>

<script>
import gsap from 'gsap'

export default {
  beforeMount() {
    this.reducedMotion = !!window.matchMedia('(prefers-reduced-motion: reduce)').matches.length
  },
  data() {
    return {
      hidden: true,
    }
  },
  methods: {
    show() {
      this.hidden = false
      if (this.reducedMotion) {
        this.$el.classList.remove('opacity-0')
      } else {
        gsap.fromTo(this.$el, { opacity: 0, y: 100}, { opacity: 1, y: 0, duration: 0.250})
      }
    },
    hide() {
      this.hidden = true
      if (this.reducedMotion) {
        this.$el.classList.addEventListener('opacity-0')
      } else {
        gsap.to(this.$el, { opacity: 0, y: 30, duration: 0.150})
      }
    },
    resetScroll() {
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.c-back-to-top {
  transition: opacity 0.15s ease-out;
}
</style>