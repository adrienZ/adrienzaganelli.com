<template>
  <section class="page-project project">
    <div ref="scale_overlay" class="mixin-scale-overlay"></div>
    <article class="cms-container">
      <nuxt-link to="/">Retour a la home</nuxt-link>
      <h1 class="text-5xl ">{{project.title.rendered}}</h1>
      <div ref="cms_block" class="cms-block" v-html="project.content.modified"></div>
    </article>
  </section>

</template>

<script>
import withPageTransition from '@/mixins/withPageTransition'
import withScrollbar from '@/mixins/withScrollbar'
import withTwitterEmbeds, {writeAsyncTwitterEmbeds} from '@/mixins/withTwitterEmbeds'
import withLazyImages, {writeLazyWpImages, writeLaztyIframes ,writeLazyWpVideos} from '@/mixins/withLazyImages'
import withMediaModal from '@/mixins/withMediaModal'

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
  mixins: [withPageTransition, withTwitterEmbeds, withLazyImages, withMediaModal],
  computed: {},
  mounted() {
    console.log(this.$store.getters.getNextProject(this.project));
  }
};
</script>

<style lang="scss" scoped>
.page-project {
  // background: #1a202c;
  color: #000;

  a {
    color: inherit;
  }

  .mixin-scale-overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(#000, 0.6);
    z-index: 1;

    opacity: 0;
    visibility: hidden;

    transition: 0.3s ease-in-out;

    &.show {
      opacity: 1;
      visibility: visible;
    }
  }

  .cms-block /deep/ {

    .wp-block-image,
    .wp-block-video {
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        opacity: 0;
        @apply shadow-xl;

        transition: opacity .5s;
      }

      &.scaled {
        z-index: 2;
      }

      &.scaled:before {
        opacity: 1;
      }
    }
  }
}

</style>