<template>
  <header class="c-header py-2 px-4">
    <div class="container sm:w-3/4 w-5/6 flex mx-auto items-center justify-between">
        <h1 class="text-2xl" v-if="$nuxt.$route.name === 'blog'">Adrien Zagnelli's Blog</h1>
        <h2 class="text-2xl" v-else>
          <nuxt-link to="/blog/">Adrien Zagnelli's Blog</nuxt-link>
        </h2>

        <a class="ml-6" :href="$store.state.backendBase + '/feed/'">
          <span class="text-xs leading-none align-bottom">RSS</span>
          <svg class="w-4 h-4 inline-block fill-current">
            <use xlink:href="#icon-rss" x="0" y="0"/>
          </svg>
        </a>
    </div>
  </header>
</template>

<style scoped>
.c-header {
  background-color: #EFEBE9;
}
.container {
  max-width: 980px;
  @apply px-4;
}
</style>