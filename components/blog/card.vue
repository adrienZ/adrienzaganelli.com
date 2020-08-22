<template>
  <div class="c-card">
    <nuxt-link :to="postUrl" v-if="thumbnail && thumbnail[0]">
      <figure class="shadow-md">
        <img
          class="w-100"
          :src="thumbnail[0].media_details.sizes.blog_preview.source_url"
          :alt="thumbnail[0].alt_text"
        />
      </figure>
    </nuxt-link>
    <nuxt-link :to="postUrl"><h3 class="font-bold mt-3 text-xl">{{post.title.rendered}}</h3></nuxt-link>
    <div class="mt-1" v-html="post.excerpt.rendered"></div>
    <nuxt-link class="mt-3 block" :to="postUrl">Read more &rarr;</nuxt-link>
    <time class="block italic mt-1" :datetime="post.date">{{date}}</time>
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