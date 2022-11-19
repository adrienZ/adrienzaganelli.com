<template>
  <section class="c-about-the-author">
    <div class="mx-auto flex">
      <nuxt-link to="/" class="flex-shrink-0">
        <img class="sm:h-16 w-16 rounded-full p-1 border-2" src="https://miro.medium.com/fit/c/256/256/1*p3v_yjsMfK5k1oKYDXij7Q.jpeg" alt="Author photo">
      </nuxt-link>
      <div class="ml-4 pt-2">
        <div class="flex items-center">
          <h4 class="mr-4 text-xl text-gray-900 leading-tight">{{$store.state.author.name}}</h4>
          <MyNetworks class="hidden sm:flex" />
        </div>

        <p class="text-md text-gray-600 leading-relaxed">{{$store.state.author.description}}</p>
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