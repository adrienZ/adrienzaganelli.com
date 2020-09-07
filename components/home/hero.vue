<template>
  <section class="c-hero text-2xl">
    <div class="c-hero__container relative z-10">

      <div class="text-2xl">
        <p class="landing-title" ref="title">Welcome :)</p>
        <p ref="intro">My name is Adrien Zaganelli. I’m a french Web developer working at <a href="https://www.colorz.fr/" class="hover:text-pimper focus:text-pimper" title="Colorz: Agence digitale et web à Paris" rel="noopener noreferrer" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Colorz</a> and <a href="https://hetic.net/" class="hover:text-pimper focus:text-pimper" title="HETIC, école web" rel="noopener noreferrer" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">HETIC</a> graduate. I mostly work with Javascript and CSS, building fast and reliable website and applications.</p>
      </div>

      <ul ref="list" class="mt-5 leading-relaxed">
        <li class="group flex">
          <span>📩</span>
          <a class="hover:text-pimper focus:text-pimper underline ml-3 inline-block" title="adrienzaganelli@gmail.com" rel="noopener noreferrer" href="mailto:adrienzaganelli@gmail.com" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Contact me</a>
        </li>
        <li class="group flex"><span>✏️</span><nuxt-link title="my blog" class="hover:text-pimper focus:text-pimper underline ml-3 inline-block" @mouseover.native="$bus.$emit('cursor-hover')" @mouseleave.native="$bus.$emit('cursor-default')" to='/blog'>Blog</nuxt-link></li>
        <li class="group flex">⚙️<a class="hover:text-pimper focus:text-pimper underline ml-3 inline-block" title="adrienzaganelli@gmail.com" rel="noopener noreferrer" href="https://zigzag-components.netlify.app/" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Components</a><span></span></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-hero__container {
  max-width: 760px;
}
</style>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    const { title, intro, list } = this.$refs
    const tl = new gsap.timeline({
      paused: true,
    })

    tl.fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.200 }, 0)
    tl.fromTo(intro, { opacity: 0 }, { opacity: 1, duration: 0.250 }, 0.2)
    tl.fromTo(list.children, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.12 }, 0.2)

    tl.timeScale(0.85)

    this.waypoint = new this.$waypoint.Inview({
      element: this.$el,
      enter : direction => {
        tl.play()
        this.$parent.$refs.bubble.transitionIn()
        this.waypoint.destroy()

        console.log(this.$parent.$refs.bubble)
      },
    });
  },
  destroyed() {
    this.waypoint.destroy()
  }
}
</script>