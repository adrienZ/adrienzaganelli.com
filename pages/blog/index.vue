<template>
  <div>
    <div class="container sm:w-3/4 w-5/6 mx-auto">
      <h2 class="text-6xl mb-4">Last articles</h2>
      <ul class="flex flex-wrap mx-0 md:-mx-5 mb-10">
        <li class="w-full md:w-1/2 px-0 md:px-5 flex-shrink-0 mt-6" :key="post.ID" v-for="post in $store.state.posts">
          <c-card :post="post" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import cCard from '@/components/blog/card.vue'

export default {
  layout: 'blog',
  components: {
    cCard
  }
};
</script>

<style>
</style>