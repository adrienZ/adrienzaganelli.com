<template>
  <section class="page-project project">
    <article class="project-content">
      <nuxt-link to="/projects/">Retour au projects</nuxt-link>
      <h1>{{project.title}}</h1>
      <pre>{{project}}</pre>
      <div v-html="$md.render(caseStudy)"></div>
    </article>

    <div class="project-team">
      <ul>
        <li v-for="(collaborator, index) in project.meta.team" :key="'collaborator' + index">
          <p>{{collaborator.collaborator}}</p>
          <p>{{collaborator.role}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, payload, store }) {
    if (payload) {
      return { project: payload };
    } else if (store.state.caseStudies.length) {
      return { project: store.getters.getProject(params.slug) };
    }
  },
  computed: {
    caseStudy() {
      return this.project.body
        .split("](/medias/")
        .join("](/zigzag-cms/api/medias/");
    }
  }
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