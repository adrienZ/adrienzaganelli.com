<template>
	<div class="top-0 z-20">
		<Container :variant="containerVariant">
			<div class="w-full flex justify-between items-center">
				<nav class="font-bold">
					<ul class="flex gap-4 text-xl">
						<li>
							<NuxtLink to="/?utm_medium=main-menu" activeClass="text-pimper"
								>Home</NuxtLink
							>
						</li>
						<li>
							<NuxtLink
								to="/blog?utm_medium=main-menu"
								activeClass="text-pimper"
								>Blog</NuxtLink
							>
						</li>
						<li class="hidden md:block">
							<NuxtLink
								to="/tech-gems?utm_medium=main-menu"
								activeClass="text-pimper"
								>Tech gems</NuxtLink
							>
						</li>
					</ul>
				</nav>

				<div class="flex">
					<a
						:href="rssFeedPath"
						class="text-black py-1 px-2 bg:ligth rounded-md hover:bg-surface"
						@click="AnalyticsService.trackEvent('rss feed clicked')"
					>
						<Icon
							size="1.5rem"
							name="i-heroicons-rss-20-solid"
							aria-hidden="false"
						/>
						<span class="sr-only">Rss feed</span>
					</a>
					<button
						@click="toggleDarkValue()"
						class="text-black py-1 px-2 bg:ligth rounded-md hover:bg-surface"
					>
						<ClientOnly>
							<Icon
								size="1.5rem"
								:name="
									isDark
										? 'i-heroicons-sun-20-solid'
										: 'i-heroicons-moon-20-solid'
								"
								aria-hidden="false"
							/>
						</ClientOnly>
						<span class="sr-only">Toggle dark mode</span>
					</button>
				</div>
			</div>
		</Container>
	</div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { AnalyticsService } from "~/src/services/AnalyticsService";

defineProps<{
	containerVariant: "home" | "blog";
}>();
const { rssFeedPath } = useAppConfig();

const isDark = useDark();
const toggleDarkValue = () => {
	AnalyticsService.trackEvent("toogle dark mode");
	return useToggle(isDark)();
};
</script>
