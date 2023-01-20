// import Scrollbar from 'smooth-scrollbar'
import gsap from 'gsap'

export default {
	mounted() {
		const ModulePromise = import('smooth-scrollbar')
		ModulePromise.then((module) => {
			const Scrollbar = module.default

			const defaults = {
				syncCallbacks: true,
				damping: 0.03,
			}

			this.Scrollbar = Scrollbar

			this.scrollbar = Scrollbar.init(document.body, defaults)

			this.scrollbarFixedEls = document.querySelectorAll(
				'[data-scrollbar-fixed]'
			)

			if (!window.document.documentMode) {
				this.scrollbar.addListener(({ offset }) => {
					;[...this.scrollbarFixedEls].map((fixed) => {
						gsap.set(fixed, {
							// x: offset.x + 'px',
							y: offset.y + 'px',
						})
					})
				})
			}
		})
	},
	beforeDestroy() {
		if (this.scrollbar) {
			this.scrollbar.destroy(document.body)
			;[...this.scrollbarFixedEls].map((fixed) => {
				gsap.set(fixed, {
					// x: '0px',
					y: '0px',
				})
			})
		}
	},
}
