import Vue from 'vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('bus', new Vue())
})