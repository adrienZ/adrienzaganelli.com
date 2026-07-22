<template>
	<ul class="c-list font-semibold">
		<li
			ref="items"
			class="c-list__item text-left mb-3 sm:mb-6"
			:key="index"
			v-for="(p, index) in projects"
		>
			<NuxtLink
				@mouseleave="$bus.emit('cursor-default')"
				@focus="onFocus($event, p, index)"
				@mouseover="onHover($event, p, index)"
				@click="trackProjectClick(p.title)"
				:to="p._path"
				class="inline-block"
				data-linkz-ai-ignore
			>
				<div class="relative">
					<h2 class="c-list__item__title leading-tight text-3xl sm:text-4xl">
						<span class="inline-block c-list__item__index mr-1 tracking-wide">
							{{ formatIndex(index) }}
						</span>
						<span class="inline-block c-list__item__text">
							{{ p.title }}
						</span>
					</h2>
				</div>
			</NuxtLink>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import { reactive } from "vue";
import { AnalyticsService } from "~/src/services/AnalyticsService";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Project = any;

const { $bus } = useNuxtApp();
const items = useTemplateRef("items");
const emit = defineEmits<{
	(event: "update", value: [Project, number]): void;
}>();

defineExpose({
	getItemElements: () => items.value ?? [],
});

const useTimer = (duration: number, callback: () => void) => {
	const interval = setTimeout(callback, duration);

	return {
		reset: () => clearTimeout(interval),
	};
};

const { data: projects } = await useAsyncData(`content-projects`, () => {
	return queryContent("case-study")
		.where({ draft: false })
		.only(["title", "_path", "cover"])
		.find();
});

let timer: ReturnType<typeof useTimer> | null = null;

const state = reactive({
	currentProjectUrl: null,
	currentIndex: 0,
});

function update(e: Event, project: Project, index: number) {
	const item = e.currentTarget;

	// dont emit if already active
	if (state.currentProjectUrl === project._path) return;

	// loading state
	// ...

	if (item) {
		// reset action event
		item.addEventListener("mouseleave", cancel);
	}

	// delay before doing action
	timer = useTimer(120, () => {
		emit("update", [project, index]);
		state.currentProjectUrl = project._path;
		AnalyticsService.trackEvent("showcase project selection", project.title);
	});
}

function onHover(e: MouseEvent, project, index: number) {
	$bus.emit("cursor-hover");
	update(e, project, index);
}

function onFocus(e: FocusEvent, project: Project, index: number) {
	update(e, project, index);
}

function formatIndex(indexToFormat: number) {
	// 0x
	return indexToFormat + 1 < 10 ? "0" + (indexToFormat + 1) : indexToFormat + 1;
}

function cancel() {
	timer?.reset();
}

function trackProjectClick(projectName: string) {
	AnalyticsService.trackEvent("showcase project click", {
		projectName,
		isVisual: false,
	});
}
</script>

<style lang="scss" scoped>
.c-list__item {
	&.active &__index,
	&.active &__index {
		-webkit-text-stroke-color: transparent;
		@apply bg-pimper;
	}
}

.c-list__item__index {
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: theme("colors.black");

	background-clip: text;
	color: transparent;
	background-color: transparent;

	transition: 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
}
</style>
