<template>
  <ul class="c-list">

    <li class="c-list__item text-left mb-3 sm:mb-8" :key="index" v-for="(p, index) in $store.state.projects">
      <nuxt-link event="" @click.native.prevent="onSelectCallback(index)" @focus.native="onFocus($event, p, index)" @mouseover.native="onHover($event, p, index)" @mouseleave.native="$bus.$emit('cursor-default')" :to="/case-study/ + p.slug" class="inline-block">
        <div class="relative">
          <h2 class="c-list__item__title leading-tight text-3xl sm:text-5xl">
            <span class="inline-block c-list__item__index tracking-wide">{{formatIndex(index)}}</span>
            <span class="inline-block c-list__item__text ">{{p.title.rendered}}</span>
          </h2>
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
    this.cancel = this.cancel.bind(this)
  },
  props: {
    onSelectCallback: Function
  },
  data() {
    return {
      currentProjectSlug: null,
      currentIndex: 0,
    }
  },
  methods: {
    onHover(e, project, index) {
      this.$bus.$emit('cursor-hover')
      this.update(...arguments)
    },
    onFocus() {
      this.update(...arguments)
    },
    onMouseOut() {
      this.$bus.$emit('cursor-default')
    },
    update(e, project, index) {
      const item = e.currentTarget

      // dont emit if already active
      if (this.currentProjectSlug === project.slug) return

      // loading state
      // ...

      // reset action event
      item.addEventListener('mouseleave', this.cancel)

      // delay before doing action
      this.timer = useTimer(120, () => {
        this.$emit('update', [project, index])
        this.currentProjectSlug = project.slug
      })
    },
    formatIndex(number) {
      // 0x
      return (number + 1 < 10) ? "0" + (number + 1) : number + 1
    },
    cancel() {
      this.timer.reset()
    },
  }
}
</script>


<style lang="scss" scoped>
  .c-list__item {
    &:hover &__index,
    &:focus &__index
    {
      -webkit-text-stroke-color: transparent;
      @apply bg-pimper;
    }
  }

  .c-list__item__index {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: theme('colors.black');

    background-clip: text;
    color: transparent;
    background-color: transparent;
  }
</style>