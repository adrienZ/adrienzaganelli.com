<template>
  <ul class="c-list">
    <li class="c-list__item" :key="index" v-for="(p, index) in $store.state.projects">
      <nuxt-link @mouseover.native="onHover($event, p)" :to="/projects/ + p.slug" class="inline-block mb-8 relative overflow-hidden">

      <div class="relative">
        <h2 class="c-list__item__title text-left leading-tight font-mono text-6xl">{{p.title.rendered}}</h2>
      </div>
    </nuxt-link>
    </li>
  </ul>

</template>

<script>

const useTimer = (duration, callback) => {
  const interval = window.setTimeout(callback, duration)

  return {
    reset: () => window.clearTimeout(interval)
  }
}

export default {
  created() {
    this.onBlur = this.onBlur.bind(this)
  },
  methods: {
    onHover(e, project) {
      const item = e.currentTarget

      // loading state
      item.style.cursor = 'progress';

      // reset action event
      item.addEventListener('mouseleave', this.onBlur)

      // delay before doing action
      this.timer = useTimer(200, () => {
        this.$emit('update', project)
        item.style.cursor = null;
      })
    },
    onBlur() {
      this.timer.reset()
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