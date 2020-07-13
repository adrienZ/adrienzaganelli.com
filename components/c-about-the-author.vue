<template>
  <section class="c-about-the-author">
    <div class="mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" :src="$store.state.author.avatar_urls['96']" alt="ChitChat Logo">
      </div>
      <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900 leading-tight">{{$store.state.author.name}}</h4>
        <p class="text-base text-gray-600 leading-normal">{{$store.state.author.description}}</p>
        <MyNetworks />
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