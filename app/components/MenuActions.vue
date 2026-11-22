<template>
	<div class="flex">
		<a
			:href="rssFeedPath"
			class="text-black py-1 px-2 bg:ligth rounded-md hover:bg-surface"
			@click="AnalyticsService.trackEvent('rss feed clicked')"
		>
			<Icon size="1.5rem" name="i-heroicons-rss-20-solid" aria-hidden="false" />
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
						isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'
					"
					aria-hidden="false"
				/>
			</ClientOnly>
			<span class="sr-only">Toggle dark mode</span>
		</button>
	</div>
</template>

<script setup lang="ts">
import { ClientOnly, Icon } from "#components";
import { useDark, useToggle } from "@vueuse/core";
import { AnalyticsService } from "~/src/services/AnalyticsService";

const { rssFeedPath } = useAppConfig();

const isDark = useDark();
const toggleDarkValue = () => {
	AnalyticsService.trackEvent("toogle dark mode");
	return useToggle(isDark)();
};
</script>
