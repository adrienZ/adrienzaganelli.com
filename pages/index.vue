<template>
  <div class="container">
    <c-header />

    <c-home-block bgColor="#9575CD">
      Hello !
    </c-home-block>
    <c-home-block bgColor="#7E57C2">
      <fieldset>
        <button :key="'post' + index" v-for="(project, index) in $store.state.caseStudies">
          {{project.title}}
        </button>
      </fieldset>
    </c-home-block>
    <c-home-block bgColor="#673AB7">
      <fieldset>
        <button :key="'post' + index" v-for="(post, index) in $store.state.blogPosts">
          {{post.title}}
          <br>
          {{post.metadata.date}}
        </button>
      </fieldset>
    </c-home-block>
    <c-home-block bgColor="#5E35B1  ">
      The lab
    </c-home-block>
  </div>
</template>


<script>
import cHeader from '@/components/c-header.vue'
import cHomeBlock from '@/components/c-home-block.vue'

export default {
  components: {
    cHeader,
    cHomeBlock
  }
}
</script>
