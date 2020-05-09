<template>
  <section class="c-section" :style="{backgroundColor: bgColor}">
    <slot />
  </section>
</template>

<script>
export default {
  props: ['bgColor']
}
</script>

<style lang="scss" scoped>
  .c-section {
    color: white;
    height: 60vh;
    font-size: 40px;
  }
</style>
