<template>
  <section class="page-post">
    <article class="post-content">
      <nuxt-link to="/blog/">Retour au articles</nuxt-link>

      <h1 class="text-3xl font-extrabold">{{post.title.rendered}}</h1>
      <div class="cms-block" v-html="post.content.rendered"></div>

      <div class="mt-4">
        <cAboutTheAuthor />
      </div>

      <div class="mt-4">
        <cHireMe />
      </div>

      <div class="mt-4">
        <cSharePost :postTitle="post.title.rendered" :url="'example.com' || post.link"/>
      </div>

      <Signature />

    </article>
  </section>
</template>

<script>
import cAboutTheAuthor from '@/components/c-about-the-author.vue'
import cHireMe from '@/components/c-hire-me.vue'
import cSharePost from '@/components/c-share-post.vue'
import Signature from '@/components/signature.vue'

export default {
  layout: 'blog',

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
    Signature,
  },
  computed: {}
};
</script>

<style lang="scss" scoped>

.post-content {
  max-width: 720px;
  margin: auto;
  padding: 0 20px;
}

.cms-block /deep/ {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  pre,
  iframe {
    margin-top: 1rem;
  }

  img {
    max-width: 100%;
  }
}
</style>