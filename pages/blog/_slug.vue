<template>
  <section class="page-post">
    <article class="cms-container">
      <nuxt-link to="/blog/">Retour au articles</nuxt-link>

      <h1 class="text-5xl font-extrabold">{{post.title.rendered}}</h1>
      <div class="cms-block" ref="cms_block" v-html="post.content.rendered"></div>

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
import Signature from '@/components/common/signature.vue'

import withCodeHighlight from '@/mixins/withCodeHighlight'

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
  mixins: [withCodeHighlight],
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
</style>