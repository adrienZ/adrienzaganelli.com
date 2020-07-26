<template>
  <section class="c-hire-me flex items-center text-black">
      <header class="flex items-center w-1/3">
        <div class="c-hire-me__ping w-4 h-4 rounded-full bg-green-400"></div>
        <h5 class="ml-3 text-xl text-gray-900 leading-tight">Hire me !</h5>
      </header>

      <div class="w-2/3">
        <p class="text-sm">I'm available for full-time contract in Paris, contact me here: <a href="mailto:adrienzaganelli@gmail.com">adrienzaganelli@gmail.com</a></p>
        <p class="text-xs mt-1">You you want to learn more about me, <nuxt-link to="/">Click here</nuxt-link></p>
      </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.c-hire-me {
  z-index: 1;
  @apply relative;
}

.c-hire-me__ping {
  @apply relative;
  @apply m-2;

  &::after {
    content: "";
    @apply absolute;
    @apply rounded-full;
    @apply h-8;
    @apply w-8;
    @apply -ml-2;
    @apply -mt-2;
    @apply bg-green-200;
    z-index: -1;
    animation: ping 2s infinite;
  }

  @keyframes ping {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>