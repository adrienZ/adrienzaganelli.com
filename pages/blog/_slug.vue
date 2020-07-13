<template>
  <section class="page-post post">
    <article class="post-content">
      <nuxt-link to="/blog/">Retour au articles</nuxt-link>

      <h1 class="">{{post.title.rendered}}</h1>
      <div class="cms-block" v-html="post.content.rendered"></div>

      <cAboutTheAuthor />
      <cHireMe />

      <cSharePost :postTitle="post.title.rendered" :url="'example.com' || post.link"/>

    </article>
  </section>
</template>

<script>
import cAboutTheAuthor from '@/components/c-about-the-author.vue'
import cHireMe from '@/components/c-hire-me.vue'
import cSharePost from '@/components/c-share-post.vue'

export default {
  async asyncData({ isDev, params, payload, store }) {
    let post;

    if (payload) {
      post = payload;
    } else if (store.state.posts.length) {
      post = store.getters.getPost(params.slug);
    }

    return { post };
  },
  components: {
    cAboutTheAuthor,
    cHireMe,
    cSharePost,
  },
  computed: {}
};
</script>

<style lang="scss" scoped>

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