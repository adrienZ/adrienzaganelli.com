<template>
	<div>
		<Container :variant="containerVariant">
			<div class="menu-bar w-full flex justify-between items-center">
				<nav class="font-bold">
					<ul class="flex gap-4 text-xl items-center">
						<li v-for="link in primaryLinks" :key="link.to">
							<NuxtLink :to="link.to" activeClass="text-pimper">
								{{ link.label }}
							</NuxtLink>
						</li>
						<!-- desktop: secondary links inline -->
						<template v-if="isDesktop">
							<li v-for="link in secondaryLinks" :key="link.to">
								<NuxtLink :to="link.to" activeClass="text-pimper">
									{{ link.label }}
								</NuxtLink>
							</li>
						</template>
						<!-- mobile: secondary links collapse into a native popover (top layer, no z-index needed) -->
						<li v-else>
							<button
								class="menu-more-trigger flex items-center"
								popovertarget="menu-more"
							>
								More
								<Icon
									size="1.25rem"
									name="i-heroicons-chevron-down-20-solid"
									aria-hidden="true"
									class="menu-more-chevron transition-transform"
								/>
							</button>
							<ul
								ref="morePopover"
								id="menu-more"
								popover
								class="menu-more p-4 flex-col gap-3 whitespace-nowrap rounded-md bg-surface text-black shadow-lg"
							>
								<li v-for="link in secondaryLinks" :key="link.to">
									<NuxtLink :to="link.to" activeClass="text-pimper">
										{{ link.label }}
									</NuxtLink>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<MenuActions />
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { Icon, NuxtLink } from "#components";
import { useMediaQuery } from "@vueuse/core";
import Container from "@/components/Container.vue";
import MenuActions from "@/components/MenuActions.vue";

defineProps<{
	containerVariant: "home" | "blog";
}>();

const links = [
	{ to: "/?utm_medium=main-menu", label: "Home" },
	{ to: "/blog?utm_medium=main-menu", label: "Blog" },
	{ to: "/tech-gems?utm_medium=main-menu", label: "Tech gems" },
	{ to: "/certifications?utm_medium=main-menu", label: "Certifications" },
];
const primaryLinks = links.slice(0, 2);
const secondaryLinks = links.slice(2);

// same breakpoint as Tailwind `md`; render one set of links instead of hiding a duplicate with CSS.
// ssrWidth: prerender (and hydration) assume desktop, so desktop visitors get no flash
const isDesktop = useMediaQuery("(min-width: 768px)", { ssrWidth: 1024 });
const route = useRoute();
const morePopover = useTemplateRef<HTMLElement>("morePopover");

// popover light-dismisses on outside click / Escape; close it on navigation too
watch(
	() => route.path,
	() => morePopover.value?.hidePopover(),
);
</script>

<style scoped>
/* the popover spans the bar (= container) width, anchored under it */
.menu-bar {
	anchor-name: --menu-bar;
}
.menu-more {
	position-anchor: --menu-bar;
	inset: auto;
	top: anchor(bottom);
	left: anchor(left);
	right: anchor(right);
	width: auto;
	margin: 0.5rem 0 0;
}
.menu-more:popover-open {
	display: flex;
}
/* the popover sits outside the button, so key off the trigger's open state */
.menu-more-trigger:has(~ .menu-more:popover-open) .menu-more-chevron {
	transform: rotate(180deg);
}
</style>
