<template>
  <div class="c-card">
    <nuxt-link :to="postUrl" v-if="thumbnail && thumbnail[0]">
      <figure>
        <img
          :src="thumbnail[0].media_details.sizes.medium_large.source_url"
          :alt="thumbnail[0].alt_text"
        />
      </figure>
    </nuxt-link>
    <nuxt-link :to="postUrl"><h3 class="font-bold text-xl">{{post.title.rendered}}</h3></nuxt-link>
    <div v-html="post.excerpt.rendered"></div>
    <nuxt-link :to="postUrl">Read more</nuxt-link>
    <time class="block italic" :datetime="post.date">{{date}}</time>
  </div>

</template>

<script>
export default {
  props: ['post'],
  computed: {
    thumbnail() {
      return this.post._embedded?.['wp:featuredmedia']
    },
    postUrl() {
      return '/blog/' + this.post.slug
    },
    date() {
      return new Date(this.post.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
  }
}
</script>