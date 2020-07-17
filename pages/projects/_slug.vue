<template>
  <section class="page-project project">
    <article class="cms-container">
      <nuxt-link to="/">Retour a la home</nuxt-link>
      <h1 class="text-5xl ">{{project.title.rendered}}</h1>
      <div class="cms-block" v-html="project.content.modified"></div>
    </article>
  </section>

</template>

<script>
import withPageTransition from '@/mixins/withPageTransition'
import withScrollbar from '@/mixins/withScrollbar'
import withTwitterEmbeds, {writeAsyncTwitterEmbeds} from '@/mixins/withTwitterEmbeds'
import withLazyImages, {writeLazyWpImages, writeLaztyIframes ,writeLazyWpVideos} from '@/mixins/withLazyImages'

export default {
  async asyncData({ params, payload, store }) {
    let project = {}

    if (payload) {
      project = payload;
    } else if (store.state.projects.length) {
      project = store.getters.getProject(params.slug);
    }

    if (project.content && project.content.rendered) {
      let modified = new String(project.content.rendered)

      // lazyload and options twitter embeds
      modified = writeAsyncTwitterEmbeds(modified)
      // laztsizes on image and iframes
      modified = writeLazyWpImages(modified)
      // modified = writeLaztyIframes(modified)
      modified = writeLazyWpVideos(modified)

      project.content.modified = modified
    }

    return { project }
  },
  mixins: [withPageTransition, withTwitterEmbeds, withLazyImages],
  computed: {}
};
</script>

<style lang="scss">
.page-project {
  background: #1a202c;
  color: #fff;

  a {
    color: inherit;
  }
}

</style>