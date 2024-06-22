<template>
	<section class="c-hero text-2xl">
		<div class="c-hero__container max-w-[40rem] relative z-10">
			<div class="text-2xl">
				<p class="landing-title" ref="title">Hello there 👋</p>
				<p ref="intro" class="inline">
					My name is Adrien Zaganelli. I’m a web developer working at
					<a
						href="https://www.amexglobalbusinesstravel.com/fr/neo-voyages-notes-de-frais/"
						class="hover:text-pimper focus:text-pimper underline"
						title="Neo - Voyages d'affaires et notes de frais"
						rel="noopener noreferrer"
						target="_blank"
						@mouseover="$bus.emit('cursor-hover')"
						@mouseleave="$bus.emit('cursor-default')"
						@click="trackLinkClick"
						>Amex GBT Neo.</a
					>

					I mostly work with Typescript and CSS, building fast and reliable
					websites and applications.
				</p>
			</div>

			<nav class="mt-5">
				<ul ref="list" class="flex gap-2">
					<li v-for="link in links" :key="link.title">
						<a
							:title="link.title"
							:href="link.href"
							class="inline-flex items-center text-black py-2 px-2 bg:ligth rounded-md hover:bg-surface"
							target="_blank"
							@mouseover="$bus.emit('cursor-hover')"
							@mouseleave="$bus.emit('cursor-default')"
							@click="trackContactIconClick(link.title)"
							data-linkz-ai-ignore
						>
							<Icon :size="iconSizes" :name="link.icon" aria-hidden="false" />
							<div class="text-sm ml-1 sr-only">{{ link.title }}</div>
						</a>
					</li>
				</ul>
			</nav>
			<!-- 			
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
						@click="trackLinkClick"
					>
						Contact me
					</a>
				</li>
				<li class="group flex">
					<span>✏️</span>
					<nuxt-link
						title="my blog"
						class="hover:text-pimper focus:text-pimper underline ml-3 inline-block"
						@mouseover="$bus.emit('cursor-hover')"
						@mouseleave="$bus.emit('cursor-default')"
						@click="trackLinkClick"
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
						@click="trackLinkClick"
						data-linkz-ai-ignore
					>
						Components
					</a>
					<span></span>
				</li>
			</ul> -->
		</div>

		<div
			ref="bubble"
			class="bubble-1 rellax"
			data-rellax-speed="-5"
			data-rellax-xs-speed="-3"
			data-rellax-percentage="0.5"
		>
			<div class="circle w-full bg-light shadow-xl"></div>
			<div class="circle w-3/4 bg-light shadow-lg"></div>
			<div class="circle w-2/4 bg-light shadow-lg"></div>
			<div class="circle w-1/4 bg-light shadow-md"></div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.circle {
	@apply rounded-full absolute;

	&.w-full {
		height: 100%;
	}
	&.w-3\/4 {
		top: (100% - (100%/ (4/3))) / 2;
		left: (100%- (100%/ (4/3))) / 2;
		height: (100%/ (4/3));
	}
	&.w-2\/4 {
		top: (100% - (100%/ (4/2))) / 2;
		left: (100%- (100%/ (4/2))) / 2;
		height: (100%/ (4/2));
	}
	&.w-1\/4 {
		top: (100% - (100%/ (4/1))) / 2;
		left: (100%- (100%/ (4/1))) / 2;
		height: (100%/4);
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

<script setup lang="ts">
import gsap from "gsap";
import { AnalyticsService } from "~/src/services/AnalyticsService";

function randomIntFromInterval(min: number, max: number) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const bubble = ref<HTMLElement>();
const title = ref();
const intro = ref();
const list = ref();

useRellax(bubble);

const instance = getCurrentInstance()?.proxy;

const iconSizes = "2rem";
const links = [
	{
		title: "Github",
		href: "https://github.com/adrienZ",
		icon: "i-mdi-github",
	},
	{
		title: "Twitter",
		href: "https://twitter.com/adri_zag",
		icon: "i-mdi-twitter",
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/adrienzaganelli/",
		icon: "i-mdi-linkedin",
	},
	{
		title: "Email",
		href: "mailto:adrienzaganelli@gmail.com",
		icon: "i-heroicons-envelope-solid",
	},
];

let bubbleEffect: IntersectionObserver | null = null;

onMounted(() => {
	const tl = gsap.timeline({
		paused: true,
	});

	tl.fromTo(
		title.value,
		{ opacity: 0, y: 20 },
		{ opacity: 1, y: 0, duration: 0.2 },
		0,
	);
	tl.fromTo(intro.value, { opacity: 0 }, { opacity: 1, duration: 0.25 }, 0.2);
	tl.fromTo(
		bubble.value.children,
		{ scale: 0, y: 0 },
		{ scale: 1, y: 0, duration: 0.35, stagger: 0.1 },
		0.25,
	);
	tl.fromTo(
		list.value.children,
		{ opacity: 0, y: 10 },
		{ opacity: 1, y: 0, duration: 0.3, stagger: 0.12 },
		0.2,
	);

	tl.timeScale(0.85);

	bubbleEffect = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			tl.play();
			bubbleEffect?.disconnect(instance.$el),
				gsap.fromTo(
					bubble.value.children,
					{ rotateZ: 0 },
					{
						rotateZ: 360,
						duration: randomIntFromInterval(20, 40),
						stagger: () => randomIntFromInterval(1, 15),
						repeat: -1,
					},
				);
		}
	});

	bubbleEffect.observe(instance.$el);
});

onUnmounted(() => {
	bubbleEffect?.disconnect(instance.$el);
});

function trackContactIconClick(name: string) {
	AnalyticsService.trackEvent(`homepage contact:${name}`);
}

function trackLinkClick(event: MouseEvent) {
	const link = event
		.composedPath()
		.find((el) => (el as HTMLElement).hasAttribute("href"));

	AnalyticsService.trackEvent("homepage link click", {
		url: (link as HTMLLinkElement).getAttribute("href") || "ERROR",
	});
}
</script>
