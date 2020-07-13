<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li :key="project.date" v-for="project in $store.state.projects">
        <h3>{{project.title.rendered}}</h3>
        <nuxt-link :to="'/projects/' + project.slug">Voir le projetcs</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>