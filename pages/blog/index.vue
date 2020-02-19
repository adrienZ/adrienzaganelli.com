<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li :key="post.date" v-for="post in blogPosts">
        <h3>{{post.title}}</h3>
        <p>{{post.body.substring(0, 100)}}...</p>
        <nuxt-link :to="'/blog/' + post.slug">Lire la suite</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>

<style>
</style>