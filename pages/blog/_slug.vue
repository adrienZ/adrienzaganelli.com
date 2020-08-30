<template>
  <section class="page-post">
    <article class="cms-container">
      <nuxt-link to="/blog/">Retour au articles</nuxt-link>

      <h1 class="text-5xl font-extrabold">{{post.title.rendered}}</h1>
      <figure>
        <img
          class="block w-full mx-auto"
          :src="heroImg[0].media_details.sizes.full.source_url"
          :alt="heroImg[0].alt_text"
        />
        <figcaption class="text-center mt-2 italic" v-html="heroImg[0].caption.rendered"></figcaption>
      </figure>

      <div class="cms-block" ref="cms_block" v-html="post.content.rendered"></div>


      <div class="mt-4">
        <cSharePost :postTitle="post.title.rendered" :url="'example.com' || post.link"/>
      </div>

      <div class="mt-4 p-6 rounded-lg shadow-xl">
        <cAboutTheAuthor />
        <cHireMe class="mt-8" />
      </div>

      <cFooter class="sm:mt-20 mt-10" />

    </article>
  </section>
</template>

<script>
import cAboutTheAuthor from '@/components/c-about-the-author.vue'
import cHireMe from '@/components/c-hire-me.vue'
import cSharePost from '@/components/c-share-post.vue'
import cFooter from '@/components/common/footer.vue'

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
    cFooter,
  },
  computed: {
    heroImg() {
      return this.post._embedded?.['wp:featuredmedia']
    },
  }
};
</script>

<style lang="scss" scoped>
</style>