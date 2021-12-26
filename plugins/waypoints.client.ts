import { defineNuxtPlugin } from '#app'
import 'waypoints/lib/noframework.waypoints.js'
import 'waypoints/lib/shortcuts/inview.js'

declare global {
  interface Window { Waypoint: Waypoint }
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('waypoint', window.Waypoint)
})


