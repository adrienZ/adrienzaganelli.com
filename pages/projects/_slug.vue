<template>
  <article>
    <nuxt-link to="/projects/">Retour au projects</nuxt-link>
    <h1>{{project.title}}</h1>
    <div v-html="$md.renderInline(project.body)"></div>
  </article>
</template>

<script>
export default {
  mounted() {
    console.log(this);
  },
  async asyncData({ params, payload, store }) {
    if (payload) {
      return { project: payload };
    } else if (store.state.caseStudies.length) {
      return { project: store.getters.getProject(params.slug) };
    }
  }
};
</script>

<style>
</style>