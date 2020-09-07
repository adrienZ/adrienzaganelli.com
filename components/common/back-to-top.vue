<template>
  <button @click="resetScroll" class="c-back-to-top opacity-0 shadow-md border-2 bg-light rounded-full p-4 z-20" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">
    <svg class="w-6 h-6 inline-block fill-pimper">
      <use xlink:href="#icon-arrow-top" x="0" y="0"/>
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    show() {
      this.$el.classList.remove('opacity-0')
    },
    hide() {
      this.$el.classList.add('opacity-0')
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