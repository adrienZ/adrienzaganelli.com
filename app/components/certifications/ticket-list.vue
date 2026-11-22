<template>
	<ul class="list space-y-2">
		<li
			v-for="(cert, index) in certifications"
			:key="cert.id"
			:style="`--delay: ${0.08 * index}s`"
		>
			<cExternal
				:href="cert.url"
				class="ticket group flex items-center gap-4 rounded-md border border-black border-opacity-25 px-4 py-3"
				@click="track(cert)"
			>
				<Icon
					class="shrink-0"
					size="1.5rem"
					:name="cert.icon"
					aria-hidden="true"
				/>
				<span class="flex-1 min-w-0">
					<span class="flex items-center gap-1.5">
						<span class="font-semibold text-lg truncate">{{ cert.title }}</span>
						<Icon
							class="text-pimper shrink-0"
							size="1.25rem"
							name="i-heroicons-check-badge-20-solid"
							aria-label="Verified"
						/>
					</span>
					<span class="block text-xs opacity-60">{{ cert.issuer }}</span>
				</span>
				<Icon
					class="shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
					size="1.25rem"
					name="i-heroicons-arrow-up-right-20-solid"
					aria-hidden="true"
				/>
			</cExternal>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { Icon } from "#components";
import cExternal from "@/components/common/external.vue";
import type { Certification } from "~/lib/certifications";
import { AnalyticsService } from "~/src/services/AnalyticsService";

defineProps<{ certifications: Certification[] }>();

function track(cert: Certification) {
	AnalyticsService.trackEvent("certification click", { id: cert.id });
}
</script>

<style scoped>
@keyframes enter {
	from {
		opacity: 0;
		transform: translateY(0.25rem);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.list li {
	opacity: 0;
	animation: enter 0.15s ease-out var(--delay) forwards;
}

.ticket {
	transition: background-color 0.15s ease-out;
}
.ticket:hover,
.ticket:focus-visible {
	background-color: var(--surface-color);
}
</style>
