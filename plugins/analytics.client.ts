import splitbee from '@splitbee/web';
import {
  defineNuxtPlugin
} from '#app'

export default defineNuxtPlugin(nuxtApp => {
  splitbee.init({
    scriptUrl: 'https://zigzag-proxy.netlify.app/bee.js',
    apiUrl: "https://zigzag-proxy.netlify.app/_hive",
  })


  nuxtApp.provide('analytics', splitbee)
})
