<template>
  <section class="page-post post">
    <article class="post-content">
      <nuxt-link to="/blog/">Retour au articles</nuxt-link>

      <h1>{{post.title}}</h1>
      <div v-html="$md.render(article)"></div>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ isDev, params, payload, store }) {
    let post;

    if (payload) {
      post = payload;
    } else if (store.state.blogPosts.length) {
      post = store.getters.getPost(params.slug);
    }

    return { post };
  },
  computed: {
    article() {
      return this.post.body
        .split("](/medias/")
        .join("](/zigzag-cms/api/medias/");
    }
  }
};
</script>

<style lang="scss" scoped>
.page-post {
  background: #1a202c;
  color: #fff;

  a {
    color: inherit;
  }
}

.post-content {
  max-width: 580px;
  margin: auto;
  padding: 10rem 20px;
}

.post /deep/ {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  pre,
  iframe {
    margin-top: 2rem;
  }

  img {
    max-width: 100%;
  }
}
</style>