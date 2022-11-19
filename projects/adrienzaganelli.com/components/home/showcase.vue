<template>
	<section class="c-showcase relative">
		<h3 ref="title" class="landing-title">Selected Works:</h3>

		<div class="sm:flex justify-between items-start">
			<cList
				class="flex-grow-0 flex-shrink-0"
				ref="list"
				v-on:update="onProjectChange"
			/>

			<nuxt-link
				:to="'/case-study/' + slug"
				ref="media"
				class="c-showcase__media mt-2 sm:mt-0 hidden xl:block xl:sticky inline-block flex-grow-0 flex-shrink-0 right-0 top-0"
				@mouseover.native="$bus.emit('cursor-hover')"
				@mouseleave.native="$bus.emit('cursor-default')"
				aria-label="Showcase project preview"
			>
				<cThumbnail :index="index" :media="media" />
			</nuxt-link>
		</div>
	</section>
</template>

<script>
// components
import cThumbnail from '@/components/showcase/thumbnail.vue'
import cList from '@/components/showcase/list.vue'

// libs
import gsap from 'gsap'

// helpers
import withMouse from '@/mixins/withMouse'

export default {
	created() {
		this.onFrame = this.onFrame.bind(this)
	},
	components: {
		cThumbnail,
		cList,
	},
	mixins: [withMouse],
	data() {
		return {
			media: this.$store.state.projects[0].acf.showcase_image,
			slug: this.$store.state.projects[0].slug,
			index: 0,
			isLoading: false,
		}
	},
	mounted() {
		// start preview mouse track
		this.smoothMouse = { x: 0, y: 0 }
		this.lastRender = 0

		const { media, title, list } = this.$refs
		const tl = new gsap.timeline({
			paused: true,
		})

		tl.fromTo(
			title,
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 0.2 },
			0
		)
		tl.fromTo(media.$el, { opacity: 0 }, { opacity: 1, duration: 0.25 }, 0.2)
		tl.fromTo(
			list.$el.children,
			{ opacity: 0, y: 10 },
			{ opacity: 1, y: 0, duration: 0.3, stagger: 0.12 },
			0.2
		)

		tl.timeScale(0.85)

		this.fadeWaypoint = new this.$waypoint.Inview({
			element: this.$el,
			enter: (direction) => {
				tl.play()
				this.fadeWaypoint.destroy()
			},
		})

		this.rafWaypoint = new this.$waypoint.Inview({
			element: this.$el,
			enter: () => {
				// dont follow mouse under 1280px (tailwind xl)
				if (document.documentElement.clientWidth >= 1280) {
					gsap.ticker.add(this.onFrame)
				}
			},
			exited: () => {
				gsap.ticker.remove(this.onFrame)
			},
		})

		// preload medias with ajax
		document.documentElement.clientWidth >= 1280 &&
			window.addEventListener('load', () => {
				this.$store.state.projects.forEach((p) => {
					switch (p.acf.showcase_image.type) {
						case 'image':
							const image = new Image()
							image.crossOrigin = 'anonymous'
							image.src = p.acf.showcase_image.url
							break
						case 'video':
							const video = document.createElement('video')
							video.crossOrigin = 'anonymous'
							video.src = p.acf.showcase_image.url
							video.load()
							break
					}
				})
			})
	},
	destroyed() {
		this.fadeWaypoint.destroy()
		this.rafWaypoint.destroy()
		// stop preview mouse track
		gsap.ticker.remove(this.onFrame)
	},
	methods: {
		onFrame() {
			const now = Date.now()

			if (now - this.lastRender > this.$store.state.RAF_DELTA_TIME) {
				this.followMouse()
			}
		},
		onProjectChange([project, index]) {
			this.media = project.acf.showcase_image
			this.slug = project.slug
			this.index = index

			Array.from(this.$refs.list.$el.children).forEach((el, k) => {
				k === index ? el.classList.add('active') : el.classList.remove('active')
			})

			this.$refs.list.$el.children[index].class
		},
		followMouse() {
			if (!this._isBeingDestroyed) {
				const mouse = this.$mouse.movement

				this.smoothMouse.x += (mouse.x / 10 - this.smoothMouse.x) * 0.1
				this.smoothMouse.y += (mouse.y / 10 - this.smoothMouse.y) * 0.1

				gsap.set(this.$refs.media.$el, {
					x: this.smoothMouse.x + 'px',
					y: this.smoothMouse.y + 'px',
					// rotateZ: ((Math.abs(this.smoothMouse.y) - Math.abs(this.smoothMouse.x)) / 20) + 'deg',
					force3D: true,
				})

				this.lastRender = Date.now()
			}
		},
		onProjectSelect(index) {
			if (this.isLoading) return

			this.isLoading = true

			const nextProject = this.$store.state.projects[index]

			const items = Array.from(
				this.$refs.list.$el.querySelectorAll('.c-list__item')
			)

			// hide all items expept selected
			gsap.to(
				items.filter((el, i) => i !== index),
				{
					autoAlpha: 0,
					x: -30,
					duration: 0.2,
					stagger: 0.075,
					onComplete: () => {
						this.isLoading = false
						this.$router.push('/case-study/' + nextProject.slug)
					},
					ease: 'power4.out',
				}
			)
		},
	},
}
</script>

<style lang="scss" scoped>
.c-showcase__media {
	max-width: 720px;
	width: 100%;

	@screen md {
		will-change: transform;
		backface-visibility: hidden;
		width: 55%;
		top: 2vw;
	}
}
</style>
