<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li :key="post.date" v-for="post in $store.state.posts">
        <h3>{{post.title.rendered}}</h3>
        <nuxt-link :to="'/blog/' + post.slug">Lire la suite</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'blog',
};
</script>

<style>
</style>