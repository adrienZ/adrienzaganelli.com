<template>
  <div>
    <div class="w-3/4 mx-auto">
      <h1>Blog</h1>
      <ul class="flex flex-wrap mx-0 md:-mx-5 ">
        <li class="w-full md:w-1/2 px-0 md:px-5 flex-shrink-0" :key="post.ID" v-for="post in $store.state.posts">
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