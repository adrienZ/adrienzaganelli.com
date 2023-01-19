import splitbee from '@splitbee/web'

export default defineNuxtPlugin((nuxtApp) => {
	splitbee.init({
		scriptUrl: 'https://zigzag-proxy.netlify.app/bee.js',
		apiUrl: 'https://zigzag-proxy.netlify.app/_hive',
	})

	return {
		provide: {
			analytics: splitbee,
		},
	}
})
