<template>
  <section>
      <h3 class="landing-title">About &amp; Contact</h3>

      <div class="sm:flex sm:-mx-3">
        <div class="sm:w-1/3 sm:px-3 mb-5 sm:mb-0">
          <img
            @mouseenter="$bus.$emit('cursor-difference')"
            @mouseout="$bus.$emit('cursor-default')"
            alt=""
            class="lazyload w-full shadow-xl rounded-md rellax"
            :data-src="require('~/assets/img/portrait.jpg')"
            data-rellax-speed="0.5"
            data-rellax-xs-speed="0"
            data-rellax-mobile-speed="0"
            data-rellax-tablet-speed="0"
            data-rellax-percentage="0.5" />
        </div>

        <div class="sm:w-2/3 sm:px-3 text-xl sm:-mt-1 rellax"
            data-rellax-speed="-0.25"
            data-rellax-xs-speed="0"
            data-rellax-mobile-speed="0"
            data-rellax-tablet-speed="0"
            data-rellax-percentage="0">
          <p>Hi, my name is Adrien Zaganelli, nice to meet you!</p>

          <p class="mt-4">HETIC graduate, I learned how to code, design and do business on the Web. I like to try new things everyday on this (very) curious world.</p>

          <p class="mt-4">From Paris to Montréal, I've worked in several nice places. Both Companies and agencies, such as:
            <cExternal href="https://agence-me.com"><i>AgenceMe</i></cExternal>,
            <cExternal href="https://sketchfab.com"><i>Sketchfab</i></cExternal>,
            <cExternal href="https://akufen.ca"><i>Akufen Studio</i></cExternal>,
            <cExternal href="https://hki.paris"><i>HelloHikimori</i></cExternal>,
            and <cExternal href="https://colorz.fr"><i>Colorz</i></cExternal>.
          </p>

          <p class="mt-4">In my spare time, I write some articles for tech publishers, find them below: </p>
          <ul class="italic text-lg">
            <li class="my-3 sm:my-0">
              &rarr; <cExternal
                href="https://medium.com/free-code-camp/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5">
                Time-saving CSS techniques to create responsive images</cExternal>
            </li>
            <li class="my-3 sm:my-0">
              &rarr; <cExternal
                href="https://medium.com/free-code-camp/how-to-make-your-app-work-offline-with-the-power-of-javascript-685d968bcfbb">
                How to make your app work offline with the power of JavaScript</cExternal>
            </li>
            <li class="my-3 sm:my-0">
              &rarr; <cExternal
                href="https://www.freecodecamp.org/news/how-to-share-variables-across-html-css-and-javascript-using-webpack/">
                How to share variables across HTML, CSS, and JavaScript using Webpack</cExternal>
            </li>
          </ul>

          <p class="mt-4">Last but not least, <b>I'm looking for a new job in Paris this fall.</b> you can contact me here:
            <cExternal class="text-pimper underline-effect--link" href="mailto:adrienzaganelli@gmail.com">adrienzaganelli@gmail.com
            </cExternal>
          </p>
        </div>
      </div>
  </section>
</template>

<script>
// components
import cExternal from '@/components/common/external.vue'

// mixins
import withLazyImages from '@/mixins/withLazyImages'

export default {
  mixins: [withLazyImages],
  components: {
    cExternal,
  },
}
</script>