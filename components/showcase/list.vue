<template>
  <ul class="c-list">
    <li class="c-list__item" :key="index" v-for="(p, index) in $store.state.projects">
      <nuxt-link @mouseover.native="onHover(p)" :to="/projects/ + p.slug" class="inline-block mb-8 relative overflow-hidden">

      <div class="relative">
        <h2 class="c-list__item__title text-left leading-tight font-mono text-6xl">{{p.title.rendered}}</h2>
      </div>
    </nuxt-link>
    </li>
  </ul>

</template>

<script>
export default {
  methods: {
    onHover(project) {
      this.$emit('update:media', project.acf.showcase_image)
      this.$emit('update:slug', project.slug)
    }
  }
}
</script>


<style lang="scss" scoped>
  .c-list__item__title {
    transition: 0.5s;

    &:hover {
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    }

  }
</style>