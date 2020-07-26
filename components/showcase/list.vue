<template>
  <ul class="c-list">

    <li class="c-list__item text-left mb-10" :key="index" v-for="(p, index) in $store.state.projects">
      <nuxt-link @focus.native="onFocus($event, p, index)" @mouseover.native="onHover($event, p, index)" @mouseleave.native="$bus.$emit('cursor-default')" :to="/projects/ + p.slug" class="inline-block border relative overflow-hidden">

      <div class="relative">
        <h2 class="c-list__item__title leading-tight font-sans text-6xl"><span>{{(index + 1 < 10) ? "0" + (index + 1) : index + 1}}</span> {{p.title.rendered}}</h2>
      </div>
    </nuxt-link>
    <!-- <p>{{p.acf.summary}}</p> -->

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
    cancel() {
      this.timer.reset()
    },
  }
}
</script>


<style lang="scss" scoped>
  .c-list__item__title {
    transition: 0.5s;
    font-family: serif;
    letter-spacing: 1px;

    span {
    // &:hover {
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    // }
    }



  }
</style>