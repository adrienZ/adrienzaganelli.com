<template>
  <section class="c-hero text-2xl">
    <div class="c-hero__container relative z-10">

      <div class="text-2xl">
        <p class="landing-title">Welcome :)</p>
        <p>My name is Adrien Zaganelli. I’m a french Web developer working at <a href="https://www.colorz.fr/" class="hover:text-pimper focus:text-pimper" title="Colorz: Agence digitale et web à Paris" rel="noopener noreferrer" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Colorz</a> and <a href="https://hetic.net/" class="hover:text-pimper focus:text-pimper" title="HETIC, école web" rel="noopener noreferrer" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">HETIC</a> graduate. I mostly work with Javascript and CSS, building fast and reliable website and applications.</p>
      </div>



      <ul class="mt-5 leading-relaxed">
        <li class="group">
          <span>📩</span>
          <a class="hover:text-pimper focus:text-pimper underline ml-3 inline-block" title="adrienzaganelli@gmail.com" rel="noopener noreferrer" href="mailto:adrienzaganelli@gmail.com" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Contact me</a>
        </li>
        <li class="group"><span>✏️</span><nuxt-link title="my blog" class="hover:text-pimper focus:text-pimper underline ml-3 inline-block" @mouseover.native="$bus.$emit('cursor-hover')" @mouseleave.native="$bus.$emit('cursor-default')" to='/blog'>Blog</nuxt-link></li>
        <li class="group">⚙️<a class="hover:text-pimper focus:text-pimper underline ml-3 inline-block" title="adrienzaganelli@gmail.com" rel="noopener noreferrer" href="https://zigzag-components.netlify.app/" target="_blank" @mouseover="$bus.$emit('cursor-hover')" @mouseleave="$bus.$emit('cursor-default')">Components</a><span></span></li>
      </ul>
    </div>

    <div
        class="bubble-1 rellax"
        data-rellax-speed="-5"
        data-rellax-xs-speed="-3"
        data-rellax-percentage="0.5"
      >
      <div class="circle w-full  bg-light shadow-xl "></div>
      <div class="circle w-2/3  bg-light shadow-lg"></div>
      <div class="circle w-1/3  bg-light shadow-md"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-hero__container {
  max-width: 760px;
}

.circle {
  @apply rounded-full absolute;

  &.w-full {
    height: 100%;
  }
  &.w-2\/3 {
    top: (100% - (100%/(3/2))) / 2;
    left: (100%- (100%/(3/2))) / 2;
    height: (100%/(3/2));
  }
  &.w-1\/3 {
    top: (100%/3);
    left: (100%/3);
    height: (100%/3);
  }
}

.bubble-1 {
  position: absolute;
  height: 50vw;
  width: 50vw;
  right: -25vw;
  top: 30vw;

  @screen md {
    right: -15vw;
    top: 0vw;
  }
}
</style>