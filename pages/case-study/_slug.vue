<template>
  <section class="page-project project">
    <div ref="scale_overlay" class="mixin-scale-overlay"></div>

    <div class="cms-container">
      <cHeader class="opacity-75"/>

      <div class="project-header leading-tight uppercase tracking-tight mt-20">
        <span class="block text-4xl sm:text-5xl font-bold">{{project.title.rendered}}</span>
        <span class="block text-4xl sm:text-5xl font-bold">{{project.title.rendered}}</span>
        <h1 class="text-5xl sm:text-6xl font-bold">{{project.title.rendered}}</h1>

        <p class="mt-6 normal-case italic tracking-tighter text-xl opacity-50 sm:w-3/4">{{project.acf.summary}}</p>
      </div>


      <div class="flex-col-reverse sm:flex-row flex mt-12">
        <article class="sm:w-3/4 sm:mr-4 flex-shrink-0">
          <div ref="cms_block" class="cms-block" v-html="project.content.modified"></div>
        </article>

        <aside class="sm:w-4/3 text-sm">
          <p><span class="font-semibold">When: </span><time>{{project.acf.time_period}}</time></p>
          <p><span class="font-semibold">My role: </span><span>{{project.acf.role}}</span></p>

          <div>
            <span class="font-semibold block">The team: </span>
            <ul>
              <li :key="teammate.collaborator[0].ID" v-for="teammate in project.acf.team">
              - <span class="italic">{{teammate.collaborator[0].post_title}}</span> as {{teammate.role}}
              </li>
            </ul>
          </div>

          <div class="inline-block sm:sticky mt-6 project-cta">

            <div class="rounded-lg focus:border-indigo-300 hover:border-indigo-300 transition-all duration-200 ease-in-out border-4 py-1 border-transparent overflow-hidden -ml-1">
              <a class="bg-pimper text-white px-4 text-xl font-semibold py-2" :href="project.acf.url">See project</a>
            </div>

            <div class="mt-2">
              <nuxt-link class="font-semibold underline" to="/">Back to Home</nuxt-link>
            </div>

          </div>
        </aside>
      </div>
      <cFooter class="sm:mt-16 mt-10" />
    </div>


    <cBackToTop ref="back_to_top" class="fixed bottom-0 right-0 mr-8 mb-8"/>
  </section>

</template>

<script>
import cNextProject from '@/components/project/next-project.vue'
import cBackToTop from '@/components/common/back-to-top.vue'
import cFooter from '@/components/common/footer.vue'
import cHeader from '@/components/home/header.vue'


import withPageTransition from '@/mixins/withPageTransition'
import withPageAnimation from '@/mixins/withPageAnimation'
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

    const nextProject = store.getters.getNextProject(project)

    return { project, nextProject }
  },
  mounted() {
    window.addEventListener('scroll', this.handleBackToTop)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleBackToTop)
  },
  mixins: [withPageTransition, withTwitterEmbeds, withLazyImages, withMediaModal, withPageAnimation],
  components: {
    cNextProject,
    cBackToTop,
    cFooter,
    cHeader,
  },
  methods: {
    handleBackToTop() {
      const backToTop = this.$refs.back_to_top

      if (window.scrollY > 0) {
        backToTop.show()
      } else {
        backToTop.hide()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page-project {

  .main-container {
    max-width: 680px;
  }

  .cms-container {
    padding-bottom: 0;
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

  .project-cta {
    @screen sm {
      top: theme('margin.6');
    }
  }

  .project-header {
    span {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: theme('colors.black');

      background-clip: text;
      color: transparent;
      background-color: transparent;
    }
  }

  .cms-block /deep/ {
    a {
      color: inherit;
    }

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