<template>
  <section class="c-share-post">
    <a class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="openModal" :href="facebookShareUrl" target="_blank">
      <svg class="w-4 h-4 inline-block fill-current"><use xlink:href="#icon-facebook" x="0" y="0"/></svg>
      Share on Facebook
    </a>
    <a class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="openModal" :href="TwitterShareUrl" target="_blank">
      <svg class="w-4 h-4 inline-block fill-current"><use xlink:href="#icon-facebook" x="0" y="0"/></svg>
      Share on Twitter
    </a>
    <a class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="openModal" :href="LinkedinShareUrl" target="_blank">
      <svg class="w-4 h-4 inline-block fill-current"><use xlink:href="#icon-facebook" x="0" y="0"/></svg>
      Share on Linkedin
    </a>
  </section>
</template>

<script>
export default {
  props: {
    url: String,
    postTitle: String,
  },
  methods: {
    serializeObject(obj) {
      return Object.keys(obj).reduce((a,k) => {a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
    },
    openModal(e) {
      e.preventDefault()
      window.open(e.target.href, 'sharer','toolbar=0,status=0,width=580,height=325');
    }
  },
  computed: {
    facebookShareUrl() {
      const {url, postTitle} = this._props
      const params = this.serializeObject({
        u: url,
        quote: postTitle + ' by Adrien Zaganelli'
      })
      return 'https://www.facebook.com/sharer/sharer.php?' + params
    },
    TwitterShareUrl() {
      const {url, postTitle} = this._props
      const params = this.serializeObject({
        text: postTitle + ' @adri_zag\n\n' + url
      })
      return 'https://twitter.com/intent/tweet?' + params
    },
    LinkedinShareUrl() {
      const {url, postTitle} = this._props
      const params = this.serializeObject({
        url,
      })
      return 'https://www.linkedin.com/sharing/share-offsite?' + params
      /**
      * <meta property='og:title' content='Title of the article"/>
      * <meta property='og:image' content='//media.example.com/ 1234567.jpg"/>
      * <meta property='og:description' content='Description that will show in the preview"/>
      * <meta property='og:url' content='//www.example.com/URL of the article" />
      */
    },
  }
}
</script>

<style>

</style>