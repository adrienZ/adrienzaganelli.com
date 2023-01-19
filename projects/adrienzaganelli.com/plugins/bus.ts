import mitt from 'mitt'
const instance = mitt()

export default defineNuxtPlugin(({ provide }) => {
	return {
		provide: {
			bus: instance,
		},
	}
})

export const $bus = instance
