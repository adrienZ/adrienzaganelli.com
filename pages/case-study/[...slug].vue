<template>
	<section class="page-project project">
		<FancyCursor />
		<Container variant="home">
			<main
				role="main"
				class="project-header leading-tight uppercase tracking-tight mt-5 sm:mt-12"
			>
				<div ref="titles">
					<span class="block text-4xl sm:text-5xl sm:leading-tight font-bold">
						{{ $project.title }}
					</span>
					<span class="block text-4xl sm:text-5xl sm:leading-tight font-bold">
						{{ $project.title }}
					</span>
					<h1 class="text-5xl sm:text-6xl sm:leading-tight font-bold">
						{{ $project.title }}
					</h1>
				</div>

				<p
					class="mt-3 sm:mt-6 normal-case italic tracking-tighter text-xl opacity-50 sm:w-3/4"
				>
					{{ $project.summary }}
				</p>
			</main>

			<div class="flex-col-reverse sm:flex-row flex mt-8 sm:mt-12">
				<article class="sm:w-3/4 sm:mr-4 flex-shrink-0">
					<ContentRenderer
						class="cms-block"
						ref="cms_block"
						:value="$project"
					/>
				</article>

				<aside class="sm:w-4/3 top-0 text-sm mb-10 sm:mb-0">
					<p>
						<span class="font-semibold">When:&nbsp;</span>
						<time>{{ $project.time_period }}</time>
					</p>
					<p>
						<span class="font-semibold">My role:&nbsp;</span>
						<span>{{ $project.role }}</span>
					</p>

					<div v-if="team && team.body.children.length > 0">
						<span class="font-semibold block">The team:</span>
						<ContentRenderer :value="team" />
					</div>

					<div class="inline-block sm:sticky mt-3 sm:mt-6 project-cta">
						<div
							class="rounded-lg focus:border-indigo-300 hover:border-indigo-300 transition-all duration-200 ease-in-out border-4 py-1 border-transparent overflow-hidden -ml-1"
						>
							<cExternal
								@mouseover="$bus.emit('cursor-default')"
								class="bg-pimper text-white px-4 text-xl font-semibold py-2"
								@click="trackLiveProjectClick($project.title)"
								:href="$project.url"
								data-linkz-ai-ignore
							>
								See project
							</cExternal>
						</div>

						<div class="mt-2 hidden sm:block">
							<nuxt-link
								@mouseover="$bus.emit('cursor-hover')"
								@mouseleave="$bus.emit('cursor-default')"
								class="font-semibold underline"
								to="/"
							>
								Back to Home
							</nuxt-link>
						</div>
					</div>
				</aside>
			</div>

			<cNextProject
				v-if="nextProject"
				class="mt-5 sm:mt-16"
				:mediaType="nextProject.cover.type"
				:mediaUrl="nextProject.cover.src"
				:title="nextProject.title"
				:summary="nextProject.summary"
				:url="`${nextProject._path}?utm_medium=next-project`"
				@apply="trackNextProject($project.title, nextProject.title)"
			/>
			<cFooter class="sm:mt-16 mt-10" />
		</Container>

		<cBackToTop ref="backToTop" class="fixed bottom-0 right-0 mr-8 mb-8" />
		<cImageModale />
	</section>
</template>

<script setup lang="ts">
import cNextProject from "@/components/project/next-project.vue";
import cBackToTop from "@/components/common/back-to-top.vue";
import cFooter from "@/components/common/footer.vue";
import cExternal from "@/components/common/external.vue";
import cImageModale from "@/components/project/image-modale.vue";

import gsap from "gsap";
import lazysizes from "lazysizes";
import { AnalyticsService } from "~/src/services/AnalyticsService";

useHead({
	script: [
		{
			innerHTML: `
          document.body.style.opacity = 0
          var readyStateCheckInterval = setInterval(function() {
              if (document.readyState === "complete") {
                  clearInterval(readyStateCheckInterval);
                  document.body.style.opacity = 1
              }
          }, 10);
        `,
			body: true,
			type: "text/javascript",
		},
	],
});
definePageMeta({
	layout: "folio",
});

const titles = ref<HTMLDivElement | null>(null);
let titleEffect: IntersectionObserver;
let tl: gsap.core.Timeline;

const { path } = useRoute();

const { data: nextProjectSibling } = await fetchContent(
	`${path}-next-projects`,
	async () => {
		const [__, _nextProject] = await queryContent("case-study")
			.where({ draft: false })
			.findSurround(path);
		return _nextProject;
	},
);

const { data: firstProjectInDb } = await fetchContent(
	`project-first-content`,
	() =>
		queryContent("case-study")
			.where({ _partial: false, draft: false })
			.findOne(),
);

const nextProject = computed(
	() => nextProjectSibling.value || firstProjectInDb.value,
);

const { data: $project } = await fetchContent(`${path}-content`, () =>
	queryContent(path).findOne(),
);

const { data: team } = await fetchContent(`${path}-teams`, () => {
	return queryContent("teams")
		.where({
			title: $project.value?.title,
		})
		.findOne();
});

onMounted(() => {
	lazysizes.init();

	tl = gsap.timeline({
		paused: true,
		ease: "circ.out",
	});

	tl
		?.fromTo(
			titles.value?.children,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.3, stagger: 0.12 },
		)
		.to(
			Array.from(titles.value?.children).slice(0, -1),
			{ opacity: 0, duration: 0.15, y: -1, stagger: 0.1 },
			0.35,
		);

	titleEffect = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			tl?.play();
			titleEffect.disconnect();
		}
	});
	titleEffect.observe(getCurrentInstance()!.proxy!.$el);

	window.addEventListener("scroll", handleBackToTop);
});

const backToTop = ref<InstanceType<typeof cBackToTop>>();

onUnmounted(() => {
	titleEffect.disconnect();
	window.removeEventListener("scroll", handleBackToTop);
});

function handleBackToTop() {
	if (window.scrollY > 0) {
		backToTop.value?.hidden && backToTop.value?.show();
	} else {
		!backToTop.value?.hidden && backToTop.value?.hide();
	}
}

function trackNextProject(current: string, next: string) {
	AnalyticsService.trackEvent("next project click", {
		projectTransition: `${current} -> ${next}`,
	});
}

function trackLiveProjectClick(projectName: string) {
	AnalyticsService.trackEvent("project live url click", {
		projectName,
	});
}
</script>

<style lang="scss" scoped>
.page-project {
	.cms-container {
		@apply pb-10;
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
			top: theme("margin.6");
		}
	}

	.project-header {
		span {
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: theme("colors.black");

			background-clip: text;
			color: transparent;
			background-color: transparent;
		}
	}

	.cms-block:v-deep {
		a {
			color: inherit;
		}

		.content-image,
		.content-video {
			position: relative;

			&:before {
				content: "";
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

<style scoped>
h1 {
	view-transition-name: project-name;
}
</style>

<style>
::view-transition-old(project-name),
::view-transition-new(project-name) {
	width: auto;
}
</style>
