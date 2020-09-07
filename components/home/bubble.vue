<template>
  <div
      class="bubble-1 rellax"
      data-rellax-speed="-5"
      data-rellax-xs-speed="-3"
      data-rellax-percentage="0.5"
    >
    <div class="circle w-full bg-lightt shadow-xl "></div>
    <div class="circle w-2/3  bg-lightt shadow-lg"></div>
    <div class="circle w-1/3  bg-lightt shadow-md"></div>
  </div>
</template>

<script>
import gsap from 'gsap'

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  methods: {
    transitionIn() {
      gsap.fromTo(
        this.$el.children,
        { scale: 0, y: 0 },
        { scale: 1, y: 0, duration: 0.35, stagger: 0.1, delay: 0.25 }
      )

      gsap.fromTo(
        this.$el.children,
        {rotateZ: 0},
        { rotateZ: 360, duration: randomIntFromInterval(20, 40), stagger: () => randomIntFromInterval(1,15), repeat: -1 }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
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