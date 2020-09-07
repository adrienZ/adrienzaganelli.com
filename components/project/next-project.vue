<template>
  <section>
    <div class="border w-full border-black border-opacity-25 mb-5 sm:mb-10"></div>

    <div class="sm:flex sm:-mx-3">
      <div class="md:w-1/3 sm:w-1/2 sm:px-3">
        <p class="text-3xl sm:-mt-2 font-semibold mb-4">Next project: <nuxt-link :to="'/case-study/' + project.slug" class="font-bold underline" @mouseover.native="$bus.$emit('cursor-hover')" @mouseleave.native="$bus.$emit('cursor-default')">{{project.title.rendered}}</nuxt-link></p>
        <p class="italic">{{project.acf.summary}}</p>
      </div>

      <div class="md:w-2/3 sm:w-1/2 sm:px-3 mt-3 sm:mt-0" @mouseover="$bus.$emit('cursor-difference')" @mouseleave="$bus.$emit('cursor-default')">
        <nuxt-link :to="'/case-study/' + project.slug" @mouseover.native="$bus.$emit('cursor-hover')" @mouseleave.native="$bus.$emit('cursor-default')">
          <cMedia src="" :data-src="project.acf.showcase_image.url" :type="project.acf.showcase_image.type" class="lazyload" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>


<script>
import cMedia from '@/components/showcase/media.vue'

export default {
  props: {
    project: Object,
  },
  components: {
    cMedia
  }
}
</script>