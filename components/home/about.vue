<template>
  <section>
      <h3 class="text-4xl">About &amp; Contact</h3>

      <div class="sm:flex sm:-mx-3">
        <div class="sm:w-1/4 sm:px-3">
          <img class="lazyload w-full" data-src="https://pbs.twimg.com/profile_images/827316811280613376/SFcivfp6_400x400.jpg">
        </div>
        <div class="sm:w-3/4 sm:px-3">
          <p>Hi, my name is Adrien Zaganelli, nice to meet you!</p>

          <p class="mt-4">HETIC graduate, I learned how to code, design and do business on the Web. I like to try new
            things everyday on this (very) curious world.</p>

          <p class="mt-4">From Paris to Montréal, I've joinder several nice places, companies and agencies as well, such as:
            <cExternal href="https://agence-me.com"><i>AgenceMe</i></cExternal>,
            <cExternal href="https://sketchfab.com"><i>Sketchfab</i></cExternal>,
            <cExternal href="https://akufen.ca"><i>Akufen Studio</i></cExternal>,
            <cExternal href="https://hki.paris"><i>HelloHikimori</i></cExternal>,
            <cExternal href="https://colorz.fr"><i>Colorz</i></cExternal>.
          </p>

          <p class="mt-4">When I can, I write some articles for tech publishers, find them below: </p>
          <ul style="font-size: 90%;">
            <li>
              &rarr; <cExternal
                href="https://medium.com/free-code-camp/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5">
                Time-saving CSS techniques to create responsive images</cExternal>
            </li>
            <li>
              &rarr; <cExternal
                href="https://medium.com/free-code-camp/how-to-make-your-app-work-offline-with-the-power-of-javascript-685d968bcfbb">
                How to make your app work offline with the power of JavaScript</cExternal>
            </li>
            <li>
              &rarr; <cExternal
                href="https://www.freecodecamp.org/news/how-to-share-variables-across-html-css-and-javascript-using-webpack/">
                How to share variables across HTML, CSS, and JavaScript using Webpack</cExternal>
            </li>
          </ul>

          <p class="mt-4">Last but not least, <b>I'm looking for a new job in Paris this fall.</b> you can contact me here:
            <cExternal class="underline-effect--link" href="mailto:adrienzaganelli@gmail.com">adrienzaganelli@gmail.com
            </cExternal>
          </p>
        </div>
      </div>

    <div>
      <h4>Get in touch</h4>
      <div class="md:flex justify-between items-end pb-16">
        <ul>
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
  </section>
</template>

<script>
import cExternal from '@/components/common/external.vue'

import withLazyImages from '@/mixins/withLazyImages'

export default {
  mixins: [withLazyImages],
  components: {
    cExternal,
  }
}
</script>