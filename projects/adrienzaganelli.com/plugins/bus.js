import Vue from 'vue'
import mitt from 'mitt'

const instance = mitt()

Vue.use({
	install: function (Vue) {
		Vue.prototype.$bus = instance
	},
})

export const $bus = instance
