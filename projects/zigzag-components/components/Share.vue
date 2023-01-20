<template>
  <section>
    <a
      @click="openModal"
      :href="facebookShareUrl"
      target="_blank"
      rel="noopener noreferrer"
      >Facebook</a
    >
    <a
      @click="openModal"
      :href="TwitterShareUrl"
      target="_blank"
      rel="noopener noreferrer"
      >Twitter</a
    >
    <a
      @click="openModal"
      :href="LinkedinShareUrl"
      target="_blank"
      rel="noopener noreferrer"
      >Linkedin</a
    >
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
      return Object.keys(obj)
        .reduce((a, k) => {
          a.push(k + "=" + encodeURIComponent(obj[k]));
          return a;
        }, [])
        .join("&");
    },
    openModal(e) {
      e.preventDefault();
      window.open(
        e.target.href,
        "sharer",
        "toolbar=0,status=0,width=580,height=325"
      );
    },
  },
  computed: {
    facebookShareUrl() {
      const { url, postTitle } = this.$props;
      const params = this.serializeObject({
        u: url,
        quote: postTitle,
      });
      return "https://www.facebook.com/sharer/sharer.php?" + params;
    },
    TwitterShareUrl() {
      const { url, postTitle } = this.$props;
      const params = this.serializeObject({
        text: postTitle + " " + url,
      });
      return "https://twitter.com/intent/tweet?" + params;
    },
    LinkedinShareUrl() {
      const { url, postTitle } = this.$props;
      const params = this.serializeObject({
        url,
      });
      return "https://www.linkedin.com/sharing/share-offsite?" + params;
      /**
       * <meta property='og:title' content='Title of the article"/>
       * <meta property='og:image' content='//media.example.com/ 1234567.jpg"/>
       * <meta property='og:description' content='Description that will show in the preview"/>
       * <meta property='og:url' content='//www.example.com/URL of the article" />
       */
    },
  },
};
</script>
