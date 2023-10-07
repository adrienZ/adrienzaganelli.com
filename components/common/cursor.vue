<template>
	<div data-scrollbar-fixed class="c-cursor relative h-8 w-8 rounded-full js">
		<div ref="inner" class="absolute c-cursor__inner w-1/2 rounded-full"></div>
		<div
			ref="outer"
			class="absolute c-cursor__outer w-full h-full rounded-full"
		></div>
	</div>
</template>

<script>
import withMouse from '@/mixins/withMouse'
import gsap from 'gsap'

export default {
	mixins: [withMouse],
	created() {
		this.onFrame = this.onFrame.bind(this)
		this.cloneMouseMove = this.onMouseMove.bind({})
	},
	data() {
		return {
			...useAppConfig(),
			hidden: false,
			hovering: false,
			inner__scale: 0,
			outer__scale: 0.5,
			outer__opacity: 0,
		}
	},
	mounted() {
		this.hide()
		const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints

		if (supportsTouch) {
			// no cursor
			this.$el.parentElement.removeChild(this.$el)
			this.$destroy()
			return false
		}

		// show custom cursor on first mouse move
		const once = () => {
			this.smoothMouseInner = this.smoothMouseOuter = this.$mouse.position
			this.show()
			window.removeEventListener('mousemove', once)
		}
		window.addEventListener('mousemove', once)

		// start preview mouse track
		this.smoothMouseInner = { x: 0, y: 0 }
		this.smoothMouseOuter = { x: 0, y: 0 }
		this.lastRender = 0

		window.addEventListener('mousemove', this.updateCursorState)
		window.addEventListener('mousedown', this.onMouseDown)
		window.addEventListener('mouseup', this.onMouseUp)

		this.hoverTl = null

		this.$bus.on('cursor-hover', () => {
			if (this.hoverTl) this.hoverTl.kill()

			this.hovering = true

			gsap.to(this, {
				duration: 0.5,
				outer__scale: 1,
				outer__opacity: 1,
			})
		})

		this.$bus.on('cursor-default', () => {
			if (this.hoverTl) this.hoverTl.kill()

			this.$el.classList.remove('c-cursor__difference')

			gsap.to(this, {
				duration: 0.5,
				outer__scale: 0.5,
				outer__opacity: 0,
				onComplete: () => (this.hovering = false),
			})
		})

		this.$bus.on('cursor-difference', () => {
			this.$el.classList.add('c-cursor__difference')
		})

		this.$bus.on('cursor-show', this.show)
		this.$bus.on('cursor-hide', this.hide)

		gsap.ticker.add(this.onFrame)
	},
	beforeDestroy() {
		// stop preview mouse track
		window.removeEventListener('mousemove', this.updateCursorState)
		window.removeEventListener('mousedown', this.onMouseDown)
		window.removeEventListener('mouseup', this.onMouseDown)

		gsap.ticker.remove(this.onFrame)
	},
	methods: {
		onFrame() {
			const now = Date.now()

			if (now - this.lastRender > this.RAF_DELTA_TIME) {
				this.moveCursor()
			}
		},
		moveCursor() {
			if (!this._.isUnmounted) {
				const mouse = this.$mouse.position

				this.smoothMouseInner.x += (mouse.x - this.smoothMouseInner.x) * 0.4
				this.smoothMouseInner.y += (mouse.y - this.smoothMouseInner.y) * 0.4

				this.smoothMouseOuter.x += (mouse.x - this.smoothMouseOuter.x) * 0.3
				this.smoothMouseOuter.y += (mouse.y - this.smoothMouseOuter.y) * 0.3

				const { height, width } = this

				const innerOptions = {
					x: this.smoothMouseInner.x - width / 2,
					y: this.smoothMouseInner.y - height / 2,
					scale: 1 - 0.5 * this.inner__scale,
				}

				gsap.set(this.$refs.inner, innerOptions)

				const outerOptions = {
					x: this.smoothMouseOuter.x - width / 2,
					y: this.smoothMouseOuter.y - height / 2,
					scale: this.outer__scale,
					opacity: this.outer__opacity,
				}

				gsap.set(this.$refs.outer, outerOptions)

				this.lastRender = Date.now()
			}
		},
		updateCursorState(e) {
			const { target } = e
			this.cloneMouseMove(e)

			// handle IFRAMES
			if (target.tagName === 'IFRAME' && !this.hidden) {
				this.hide()
			}
			if (target.tagName !== 'IFRAME' && this.hidden) {
				this.show()
			}
		},
		// overide
		onResize() {
			this.width = this.$el.offsetWidth
			this.height = this.$el.offsetHeight
		},
		onMouseDown() {
			gsap.to(this, { inner__scale: 1, duration: 0.1 })
		},
		onMouseUp() {
			gsap.to(this, { inner__scale: 0, duration: 0.1 })
		},
		hide() {
			const { position } = this.$mouse
			if (this.tl) this.tl.kill()
			this.tl = gsap.to(this.$el, { autoAlpha: 0, duration: 0.25 })
			this.hidden = true

			return this.tl
		},
		show() {
			const { position } = this.$mouse
			if (this.tl) this.tl.kill()
			this.tl = gsap.to(this.$el, { autoAlpha: 1, duration: 0.15 })
			this.hidden = false
		},
	},
}
</script>

<style lang="scss">
.c-cursor {
	z-index: 100;
	pointer-events: none;
	position: fixed;
	top: 0;
	left: 0;
	opacity: 0;

	&__inner {
		height: 50%;
		left: 25%;
		top: 25%;
		transform-origin: center center;
		will-change: tranform;
		@apply bg-pimper bg-opacity-75;
	}

	&__outer {
		@apply border-2 border-pimper;
		transform-origin: center center;
		will-change: tranform;
	}

	&__difference {
		mix-blend-mode: difference;
	}
}
</style>
