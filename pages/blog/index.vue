<template>
  <div>
    <div class="container mx-auto">
      <h2 class="text-6xl mt-4 mb-2">Last articles</h2>
      <ul class="flex flex-wrap mx-0 md:-mx-5 mb-10">
        <li class="w-full md:w-1/2 px-0 md:px-5 flex-shrink-0 mt-6" :key="post.ID" v-for="post in $store.state.posts">
          <c-card :post="post" />
        </li>
      </ul>

      <div class="sm:mt-20 mt-10">
        <div class="border w-full border-black border-opacity-25 mb-5 sm:mb-10"></div>
        <c-footer  />
      </div>
    </div>
  </div>
</template>

<script>

import cCard from '@/components/blog/card.vue'
import cFooter from '@/components/common/footer.vue'

export default {
  layout: 'blog',
  components: {
    cCard,
    cFooter,
  }
};
</script>

<style scoped>
.container {
  max-width: 980px;
  @apply px-4;
}
</style>