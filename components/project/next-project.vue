<template>
  <section class="relative">
    <nuxt-link :to="'/projects/' + project.slug" class="absolute top-0 left-0 bottom-0 right-0">
      <p>next project:</p>
      <p>{{project.title.rendered}}</p>
    </nuxt-link>
    <c-media :type="project.acf.showcase_image.type" :src="project.acf.showcase_image.url" />
  </section>
</template>

<script>
import cMedia from '@/components/showcase/media.vue'


export default {
  props: ['project'],
  components: {
    cMedia
  }
}
</script>