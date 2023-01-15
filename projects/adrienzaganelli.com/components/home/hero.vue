<template>
	<section class="c-hero text-2xl">
		<div class="c-hero__container relative z-10">
			<div class="text-2xl">
				<p class="landing-title" ref="title">Hello there 👋</p>
				<p ref="intro" class="inline">
					My name is Adrien Zaganelli. I’m a web developer working at
					<a
						href="https://www.amexglobalbusinesstravel.com/fr/neo-voyages-notes-de-frais/"
						class="hover:text-pimper focus:text-pimper"
						title="Neo - Voyages d'affaires et notes de frais"
						rel="noopener noreferrer"
						target="_blank"
						@mouseover="$bus.emit('cursor-hover')"
						@mouseleave="$bus.emit('cursor-default')"
					>
						Neo Technology Group.
					</a>

					I mostly work with Typescript and CSS, building fast and reliable
					websites and applications.
				</p>
			</div>

			<ul ref="list" class="mt-5 leading-relaxed">
				<li class="group flex">
					<span>📩</span>
					<a
						class="hover:text-pimper focus:text-pimper underline ml-3 inline-block"
						title="adrienzaganelli@gmail.com"
						rel="noopener noreferrer"
						href="mailto:adrienzaganelli@gmail.com"
						target="_blank"
						@mouseover="$bus.emit('cursor-hover')"
						@mouseleave="$bus.emit('cursor-default')"
					>
						Contact me
					</a>
				</li>
				<li class="group flex">
					<span>✏️</span>
					<nuxt-link
						title="my blog"
						class="hover:text-pimper focus:text-pimper underline ml-3 inline-block"
						@mouseover.native="$bus.emit('cursor-hover')"
						@mouseleave.native="$bus.emit('cursor-default')"
						to="/blog"
					>
						Blog
					</nuxt-link>
				</li>
				<li class="group flex">
					⚙️
					<a
						class="hover:text-pimper focus:text-pimper underline ml-3 inline-block"
						title="adrienzaganelli@gmail.com"
						rel="noopener noreferrer"
						href="https://zigzag-components.netlify.app/"
						target="_blank"
						@mouseover="$bus.emit('cursor-hover')"
						@mouseleave="$bus.emit('cursor-default')"
					>
						Components
					</a>
					<span></span>
				</li>
			</ul>
		</div>

		<div
			ref="bubble"
			class="bubble-1 rellax"
			data-rellax-speed="-5"
			data-rellax-xs-speed="-3"
			data-rellax-percentage="0.5"
		>
			<div class="circle w-full bg-light shadow-xl"></div>
			<div class="circle w-2/3 bg-light shadow-lg"></div>
			<div class="circle w-1/3 bg-light shadow-md"></div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.c-hero__container {
	max-width: 760px;
}

.circle {
	@apply rounded-full absolute;

	&.w-full {
		height: 100%;
	}
	&.w-2\/3 {
		top: (100% - (100%/ (3/2))) / 2;
		left: (100%- (100%/ (3/2))) / 2;
		height: (100%/ (3/2));
	}
	&.w-1\/3 {
		top: (100%/3);
		left: (100%/3);
		height: (100%/3);
	}
}

.bubble-1 {
	position: absolute;
	height: 50vw;
	width: 50vw;
	right: -25vw;
	top: 30vw;

	@screen md {
		right: -15vw;
		top: 0vw;
	}
}
</style>

<script>
import gsap from 'gsap'

function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
	mounted() {
		const { bubble, title, intro, list } = this.$refs
		const tl = new gsap.timeline({
			paused: true,
		})

		tl.fromTo(
			title,
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 0.2 },
			0
		)
		tl.fromTo(intro, { opacity: 0 }, { opacity: 1, duration: 0.25 }, 0.2)
		tl.fromTo(
			bubble.children,
			{ scale: 0, y: 0 },
			{ scale: 1, y: 0, duration: 0.35, stagger: 0.1 },
			0.25
		)
		tl.fromTo(
			list.children,
			{ opacity: 0, y: 10 },
			{ opacity: 1, y: 0, duration: 0.3, stagger: 0.12 },
			0.2
		)

		tl.timeScale(0.85)

		this.waypoint = new this.$waypoint.Inview({
			element: this.$el,
			enter: (direction) => {
				tl.play()
				this.waypoint.destroy()

				gsap.fromTo(
					bubble.children,
					{ rotateZ: 0 },
					{
						rotateZ: 360,
						duration: randomIntFromInterval(20, 40),
						stagger: () => randomIntFromInterval(1, 15),
						repeat: -1,
					}
				)
			},
		})
	},
	destroyed() {
		this.waypoint.destroy()
	},
}
</script>
