<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li :key="project.date" v-for="project in caseStudies">
        <h3>{{project.title}}</h3>
        <nuxt-link :to="'/projects/' + project.slug">Voir le projetcs</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    caseStudies() {
      return this.$store.state.caseStudies;
    }
  }
};
</script>

<style>
</style>