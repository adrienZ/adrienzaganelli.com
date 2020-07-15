<template>
  <section class="page-project project">
    <article class="project-content">
      <nuxt-link to="/">Retour a la home</nuxt-link>
      <h1>{{project.title.rendered}}</h1>
      <div v-html="project.content.rendered"></div>
    </article>
  </section>
</template>

<script>
import withPageTransition from '@/mixins/withPageTransition'

export default {
  async asyncData({ params, payload, store }) {
    if (payload) {
      return { project: payload };
    } else if (store.state.projects.length) {
      return { project: store.getters.getProject(params.slug) };
    }
  },
  mixins: [withPageTransition],
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

.project-content {
  max-width: 580px;
  margin: auto;
  padding: 10rem 20px;
}

.project /deep/ {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  pre,
  iframe {
    margin-top: 2rem;
  }

  img {
    max-width: 100%;
  }

  pre {
    overflow: scroll;
  }
}
</style>