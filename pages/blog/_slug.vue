<template>
  <article class="page-post">
    <nuxt-link to="/blog/">Retour au articles</nuxt-link>

    <h1>{{post.title}}</h1>
    <div v-html="$md.render(post.body)"></div>
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload, store }) {
    if (payload) {
      return { post: payload };
    } else if (store.state.blogPosts.length) {
      return { post: store.getters.getPost(params.slug) };
    }
  }
};
</script>

<style lang="scss" scoped>
.page-post {
  max-width: 580px;
  margin: auto;
  padding: 0 20px;
}
</style>