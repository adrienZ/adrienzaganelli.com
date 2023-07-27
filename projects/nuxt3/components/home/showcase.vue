<template>
	<section class="c-showcase relative">
		<h3 ref="title" class="landing-title">Selected Works:</h3>

		<div class="sm:flex justify-between items-start">
			<cList
				class="flex-grow-0 flex-shrink-0"
				ref="list"
				@update="onProjectChange"
			/>

			<nuxt-link
				:to="data.url"
				ref="media"
				class="c-showcase__media mt-2 sm:mt-0 hidden xl:sticky lg:inline-block flex-grow-0 flex-shrink-0 right-0 top-0"
				@mouseover="$bus.emit('cursor-hover')"
				mouseleave="$bus.emit('cursor-default')"
				aria-label="Showcase project preview"
				data-linkz-ai-ignore
			>
				<cThumbnail :index="data.index" :media="data.media" />
			</nuxt-link>
		</div>
	</section>
</template>

<script setup lang="ts">
// components
import cThumbnail from '@/components/showcase/thumbnail.vue'
import cList from '@/components/showcase/list.vue'

// libs
import gsap from 'gsap'

const { $waypoint } = useNuxtApp()
const instance = getCurrentInstance()!.proxy!
const { $mouse } = useMouse()

const { data: projects } = await useAsyncData(`content-projects`, () => {
	return queryContent('case-study').only(['title', '_path', 'cover']).find()
})

const title = ref<HTMLHeadingElement | null>(null)
const media = ref<ComponentPublicInstance | null>(null)
const list = ref<InstanceType<typeof cList> | null>(null)

const data = reactive({
	...useAppConfig(),
	media: projects.value[0].cover,
	url: projects.value[0]._path,
	index: 0,
	isLoading: false,
	fadeObserver: null,
	rafWaypoint: null,
	// start preview mouse track
	smoothMouse: { x: 0, y: 0 },
	lastRender: 0,
})

onMounted(() => {
	const tl = new gsap.timeline({
		paused: true,
	})

	tl.fromTo(
		title.value,
		{ opacity: 0, y: 20 },
		{ opacity: 1, y: 0, duration: 0.2 },
		0
	)
	tl.fromTo(
		media.value.$el,
		{ opacity: 0 },
		{ opacity: 1, duration: 0.25 },
		0.2
	)
	tl.fromTo(
		list.value.$el.children,
		{ opacity: 0, y: 10 },
		{ opacity: 1, y: 0, duration: 0.3, stagger: 0.12 },
		0.2
	)

	tl.timeScale(0.85)

	data.rafWaypoint = new $waypoint.Inview({
		element: instance.$el,
		enter: () => {
			// dont follow mouse under 1280px (tailwind xl)
			if (document.documentElement.clientWidth >= 1280) {
				gsap.ticker.add(onFrame)
			}
		},
		exited: () => {
			gsap.ticker.remove(onFrame)
		},
	})

	// preload medias with ajax
	document.documentElement.clientWidth >= 1280 &&
		window.addEventListener('load', () => {
			projects.value.forEach((p) => {
				console.log(p)

				switch (p.cover.type) {
					case 'image':
						const image = new Image()
						image.crossOrigin = 'anonymous'
						image.src = p.cover.src
						break
					case 'video':
						const video = document.createElement('video')
						video.crossOrigin = 'anonymous'
						video.src = p.cover.src
						video.load()
						break
				}
			})
		})

	data.fadeObserver = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				tl.play()
				data.fadeObserver.disconnect()
			}
		},
		{
			threshold: 0.25, // quarter of item height
		}
	)

	data.fadeObserver.observe(instance.$el)
})

onBeforeUnmount(() => {
	data.fadeObserver?.disconnect()
	data.rafWaypoint.destroy()
	// stop preview mouse track
	gsap.ticker.remove(onFrame)
})

function onFrame() {
	const now = Date.now()

	if (now - data.lastRender > data.RAF_DELTA_TIME) {
		followMouse()
	}
}

function onProjectChange([project, index]: [any, number]) {
	if (project._path === data.url) {
		return false
	}

	const tl = new gsap.timeline({
		paused: true,
	})

	tl.to(media.value.$el, {
		opacity: 0.75,
		scale: 0.95,
		duration: 0.1,
		onComplete: () => {
			data.media = project.cover
			data.url = project._path
			data.index = index
		},
	})
	tl.to(media.value.$el, {
		opacity: 1,
		scale: 1,
		duration: 0.2,
	})
	tl.play()

	Array.from(list.value.$el.children).forEach((el, k) => {
		k === index ? el.classList.add('active') : el.classList.remove('active')
	})

	list.value.$el.children[index].class
}

function followMouse() {
	const mouse = $mouse.movement

	data.smoothMouse.x += (mouse.x / 10 - data.smoothMouse.x) * 0.1
	data.smoothMouse.y += (mouse.y / 10 - data.smoothMouse.y) * 0.1

	gsap.set(media.value.$el, {
		x: data.smoothMouse.x + 'px',
		y: data.smoothMouse.y + 'px',
		// rotateZ: ((Math.abs(this.smoothMouse.y) - Math.abs(this.smoothMouse.x)) / 20) + 'deg',
		force3D: true,
	})

	data.lastRender = Date.now()
}

function onProjectSelect(index: number) {
	if (data.isLoading) return

	data.isLoading = true

	// const nextProject = this.$store.$state.projects[index]

	const items = Array.from(list.value.$el.querySelectorAll('.c-list__item'))

	// hide all items expept selected
	gsap.to(
		items.filter((el, i) => i !== index),
		{
			autoAlpha: 0,
			x: -30,
			duration: 0.2,
			stagger: 0.075,
			onComplete: () => {
				data.isLoading = false
				alert('redirect')
				// this.$router.push('/case-study/' + nextProject.url)
			},
			ease: 'power4.out',
		}
	)
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
