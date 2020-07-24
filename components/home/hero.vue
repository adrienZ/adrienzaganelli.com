<template>
  <section class="c-hero text-2xl">
    <div>
      <p class="text-5xl mb-10">Welcome :)</p>


      <p>I’m a french Web developer working at <a href="https://www.colorz.fr/" class="hover:underline" title="Colorz: Agence digitale et web à Paris" rel="noopener noreferrer" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Colorz</a>. and graduated from <a href="https://hetic.net/" class="hover:underline" title="HETIC, école web" rel="noopener noreferrer" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">HETIC</a>.
      I mostly work with Javascript and CSS, building fast and reliable website and applications.</p>
      <a class="underline inline-block mt-5" title="adrienzaganelli@gmail.com" rel="noopener noreferrer" @mouseover="$bus.$emit('cursor-hover')" href="mailto:adrienzaganelli@gmail.com" target="_blank"  @mouseleave="$bus.$emit('cursor-default')">Contact me.</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-hero {
  min-height: 500px;
  max-width: 760px;
  // margin: 0 auto;

  height: 50vh;

  @apply flex flex-col items-center justify-center;
}
</style>