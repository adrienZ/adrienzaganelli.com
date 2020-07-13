<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li :key="project.date" v-for="project in projects">
        <h3>{{project.title.rendered}}</h3>
        <!-- <p>{{project.meta.summary}}</p> -->
        <nuxt-link :to="'/projects/' + project.slug">Voir le projetcs</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
};
</script>

<style>
</style>