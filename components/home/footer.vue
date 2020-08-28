<template>
  <div class="c-footer">
    <h4 class="landing-title mb-2">👋 Get in touch</h4>
    <div class="md:flex justify-between items-end pb-16">
      <ul class="text-3xl font-bold leading-relaxed">
        <!-- Links -->
        <li><cExternal href="https://twitter.com/adri_zag">Twitter</cExternal></li>
        <li><cExternal href="https://www.linkedin.com/in/adrienzaganelli/">Linkedin</cExternal></li>
        <li><cExternal href="https://github.com/adrienZ">Github</cExternal></li>
        <li><cExternal href="https://codepen.io/adri_zag">Codepen</cExternal></li>
        <li><cExternal href="mailto:adrienzaganelli@gmail.com">E-mail</cExternal></li>
        <!-- End Links -->
      </ul>

      <!-- Logo footer -->
      <div class="text-center">
        <svg class="w-12 h-12 inline-block"><use xlink:href="#icon-logo" x="0" y="0"/></svg>
      </div>
      <!-- End Logo footer -->

    </div>

  </div>
</template>

<script>
import cExternal from '@/components/common/external.vue'

export default {
  components: {
    cExternal,
  },
}
</script>