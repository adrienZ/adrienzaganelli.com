<template>
	<section class="page-project project">
		<div class="cms-container">
			<cHeader class="opacity-75" />

			<main
				role="main"
				class="project-header leading-tight uppercase tracking-tight mt-5 sm:mt-12"
			>
				<div ref="titles">
					<span class="block text-4xl sm:text-5xl font-bold">
						{{ project.title.rendered }}
					</span>
					<span class="block text-4xl sm:text-5xl font-bold">
						{{ project.title.rendered }}
					</span>
					<h1 class="text-5xl sm:text-6xl font-bold">
						{{ project.title.rendered }}
					</h1>
				</div>

				<p
					class="mt-3 sm:mt-6 normal-case italic tracking-tighter text-xl opacity-50 sm:w-3/4"
				>
					{{ project.acf.summary }}
				</p>
			</main>

			<div class="flex-col-reverse sm:flex-row flex mt-8 sm:mt-12">
				<article class="sm:w-3/4 sm:mr-4 flex-shrink-0">
					<div
						ref="cms_block"
						class="cms-block"
						v-html="project.content.modified"
					></div>
				</article>

				<aside class="sm:w-4/3 top-0 text-sm mb-10 sm:mb-0">
					<p>
						<span class="font-semibold">When:</span>
						<time>{{ project.acf.time_period }}</time>
					</p>
					<p>
						<span class="font-semibold">My role:</span>
						<span>{{ project.acf.role }}</span>
					</p>

					<div v-if="project.acf.team.length">
						<span class="font-semibold block">The team:</span>
						<ul>
							<li
								:key="teammate.collaborator[0].ID"
								v-for="teammate in project.acf.team"
							>
								-
								<span class="italic">
									{{ teammate.collaborator[0].post_title }}
								</span>
								as {{ teammate.role }}
							</li>
						</ul>
					</div>

					<div class="inline-block sm:sticky mt-3 sm:mt-6 project-cta">
						<div
							class="rounded-lg focus:border-indigo-300 hover:border-indigo-300 transition-all duration-200 ease-in-out border-4 py-1 border-transparent overflow-hidden -ml-1"
						>
							<cExternal
								@mouseover.native="$bus.emit('cursor-default')"
								class="bg-pimper text-white px-4 text-xl font-semibold py-2"
								:href="project.acf.url"
								data-linkz-ai-ignore
							>
								See project
							</cExternal>
						</div>

						<div class="mt-2 hidden sm:block">
							<nuxt-link
								@mouseover.native="$bus.emit('cursor-hover')"
								@mouseleave.native="$bus.emit('cursor-default')"
								class="font-semibold underline"
								to="/"
							>
								Back to Home
							</nuxt-link>
						</div>
					</div>
				</aside>
			</div>

			<cNextProject :project="nextProject" class="mt-5 sm:mt-16" />
			<cFooter class="sm:mt-16 mt-10" />
		</div>

		<cBackToTop ref="back_to_top" class="fixed bottom-0 right-0 mr-8 mb-8" />
		<cImageModale />
	</section>
</template>

<script lang="ts">
import cNextProject from '@/components/project/next-project.vue'
import cBackToTop from '@/components/common/back-to-top.vue'
import cFooter from '@/components/common/footer.vue'
import cHeader from '@/components/home/header.vue'
import cExternal from '@/components/common/external.vue'
import cImageModale from '@/components/project/image-modale.vue'

import gsap from 'gsap'

import withPageTransition from '@/mixins/withPageTransition'
import withTwitterEmbeds, {
	writeAsyncTwitterEmbeds,
} from '@/mixins/withTwitterEmbeds'
import withLazyImages, {
	writeLazyWpImages,
	writeLazyWpVideos,
} from '@/mixins/withLazyImages'
import { useStore } from '@/store/globalStore'

export default defineNuxtComponent({
	async asyncData() {
		const store = useStore()
		const { params } = useRoute()
		let project = store.getProject(params.slug)

		if (project.content && project.content.rendered) {
			let modified = new String(project.content.rendered)

			// lazyload and options twitter embeds
			modified = writeAsyncTwitterEmbeds(modified)
			// lazysizes on image and iframes
			modified = writeLazyWpImages(modified)
			// modified = writeLaztyIframes(modified)
			modified = writeLazyWpVideos(modified)

			project.content.modified = modified
		}

		const nextProject = store.getNextProject(project)

		return { project, nextProject }
	},
	mounted() {
		window.addEventListener('scroll', this.handleBackToTop)
		const { titles } = this.$refs
		const tl = new gsap.timeline({
			paused: true,
			ease: 'circ.out',
		})

		tl.fromTo(
			titles.children,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.3, stagger: 0.12 }
		).to(
			Array.from(titles.children).slice(0, -1),
			{ opacity: 0, duration: 0.15, y: -1, stagger: 0.1 },
			0.35
		)

		this.waypoint = new this.$waypoint.Inview({
			element: this.$el,
			enter: (direction) => {
				tl.play()
				this.waypoint.destroy()
			},
		})
		;[
			...this.$refs.cms_block.querySelectorAll(
				'.wp-block-image, .wp-block-video'
			),
		].forEach((el) => {
			el.addEventListener('mouseenter', () => {
				this.$bus.emit('cursor-difference')
				this.$bus.emit('cursor-hover')
			})
			el.addEventListener('mouseout', () => this.$bus.emit('cursor-default'))

			const _this = this
			el.addEventListener('click', function () {
				const src = this.querySelector('[src]').src
				const type = this.className.split('wp-block-')[1].split(' ')[0]
				_this.$bus.emit('preview-open', { src, type })
			})
		})
	},
	destroyed() {
		this.waypoint.destroy()
		window.removeEventListener('scroll', this.handleBackToTop)
	},
	mixins: [withPageTransition, withTwitterEmbeds, withLazyImages],
	components: {
		cNextProject,
		cBackToTop,
		cFooter,
		cHeader,
		cExternal,
		cImageModale,
	},
	methods: {
		handleBackToTop() {
			// handle backtop
			const backToTop = this.$refs.back_to_top
			if (window.scrollY > 0) {
				backToTop.hidden && backToTop.show()
			} else {
				!backToTop.hidden && backToTop.hide()
			}
		},
	},
})
</script>

<style lang="scss" scoped>
.page-project {
	.cms-container {
		padding-bottom: 0;
		@apply max-w-5xl;
	}

	.mixin-scale-overlay {
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: rgba(#000, 0.6);
		z-index: 1;

		opacity: 0;
		visibility: hidden;

		transition: 0.3s ease-in-out;

		&.show {
			opacity: 1;
			visibility: visible;
		}
	}

	.project-cta {
		@screen sm {
			top: theme('margin.6');
		}
	}

	.project-header {
		span {
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: theme('colors.black');

			background-clip: text;
			color: transparent;
			background-color: transparent;
		}
	}

	.cms-block:v-deep {
		a {
			color: inherit;
		}

		.wp-block-image,
		.wp-block-video {
			position: relative;

			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				z-index: -1;
				opacity: 0;
				@apply shadow-xl;

				transition: opacity 0.5s;
			}
		}
	}
}
</style>
