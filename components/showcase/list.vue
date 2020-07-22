<template>
  <ul class="c-list">
    <li class="c-list__item text-left" :key="index" v-for="(p, index) in $store.state.projects">
      <nuxt-link @focus.native="onHover ($event, p, index)" @mouseover.native="onHover($event, p, index)" :to="/projects/ + p.slug" class="inline-block mb-8 relative overflow-hidden">

      <div class="relative">
        <h2 class="c-list__item__title leading-tight font-sans text-6xl">{{p.title.rendered}}</h2>
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
  data() {
    return {
      currentProjectSlug: null,
      currentIndex: 0,
    }
  },
  methods: {
    onHover(e, project, index) {
      const item = e.currentTarget

      // dont emit if already active
      if (this.currentProjectSlug === project.slug) return

      // loading state
      // ...

      // reset action event
      item.addEventListener('mouseleave', this.onBlur)

      // delay before doing action
      this.timer = useTimer(100, () => {
        this.$emit('update', [project, index])
        this.currentProjectSlug = project.slug
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

    // &:hover {
    // color: black;
    // -webkit-text-fill-color: transparent;
    // -webkit-text-stroke-width: 1px;
    // -webkit-text-stroke-color: black;
    // }

  }
</style>