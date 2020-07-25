<template>
  <section class="c-about-the-author">
    <div class="mx-auto flex">
      <nuxt-link to="/" class="flex-shrink-0">
        <img class="h-12 w-12 rounded-full" src="https://twivatar.glitch.me/adri_zag" alt="Author photo">
      </nuxt-link>
      <div class="ml-6 pt-1">
        <div class="flex items-center">
          <h4 class="mr-4 text-xl text-gray-900 leading-tight">{{$store.state.author.name}}</h4>
          <MyNetworks />
        </div>

        <p class="text-base text-gray-600 leading-normal">{{$store.state.author.description}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import MyNetworks from '@/components/my-networks.vue'

export default {
  components: {
    MyNetworks
  }
}
</script>

<style>

</style>