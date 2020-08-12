<template>
  <section class="c-hero text-2xl">
    <div>

      <p class="text-5xl mt-10 mb-10">Welcome :)</p>


      <p>My name is Adrien Zaganelli. I’m a french Web developer working at <a href="https://www.colorz.fr/" class="hover:text-pimper" title="Colorz: Agence digitale et web à Paris" rel="noopener noreferrer" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Colorz</a> and <a href="https://hetic.net/" class="hover:text-pimper" title="HETIC, école web" rel="noopener noreferrer" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">HETIC</a> graduate.
      I mostly work with Javascript and CSS, building fast and reliable website and applications.</p>

      <ul class="mt-5">
        <li><span>📩</span><a class="underline ml-3 inline-block" title="adrienzaganelli@gmail.com" rel="noopener noreferrer" href="mailto:adrienzaganelli@gmail.com" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Contact me</a></li>
        <li><span>✏</span><nuxt-link title="my blog" class="underline ml-3 inline-block" @mouseover.native="$bus.$emit('cursor-hover')" @mouseleave.native="$bus.$emit('cursor-default')" to='/blog'>Blog</nuxt-link></li>
        <li>⚙️<a class="underline ml-3 inline-block" title="adrienzaganelli@gmail.com" rel="noopener noreferrer" href="https://zigzag-components.netlify.app/" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Components</a><span></span></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-hero {
  min-height: 500px;
  max-width: 760px;

  height: 50vh;

  @apply flex flex-col items-center justify-center;
}
</style>