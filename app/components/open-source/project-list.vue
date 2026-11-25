<template>
	<div class="space-y-6">
		<section
			v-for="group in groups"
			:key="group.repo"
			class="rounded-md border border-black border-opacity-25 overflow-hidden"
		>
			<cExternal
				:href="githubUrl(group.repo)"
				class="header flex items-center gap-3 px-4 py-3 border-b border-black border-opacity-25"
			>
				<OwnerAvatar
					:owner="group.owner"
					:ownerType="group.ownerType"
					:size="44"
				/>
				<span class="flex-1 min-w-0">
					<span class="block text-xs opacity-60">{{ group.owner }}</span>
					<span class="block text-xl font-bold truncate">
						{{ group.repo.split("/")[1] }}
					</span>
				</span>
				<span
					class="inline-flex items-center gap-1 rounded-full border border-black border-opacity-25 px-2.5 py-0.5 text-sm font-semibold"
				>
					<Icon
						name="i-heroicons-star-20-solid"
						class="text-amber-500"
						size="1rem"
					/>
					{{ formatStars(group.stars) }}
				</span>
			</cExternal>
			<ul class="divide-y divide-black divide-opacity-10">
				<li v-for="pr in group.prs" :key="pr.url">
					<cExternal
						:href="pr.url"
						class="row group flex items-center gap-3 px-4 py-2.5 text-sm"
					>
						<Icon
							name="i-octicon-git-merge-16"
							class="merged shrink-0"
							size="1rem"
							aria-label="Merged"
						/>
						<span
							class="flex-1 truncate group-hover:underline underline-offset-2"
						>
							{{ pr.title }}
						</span>
						<span class="shrink-0 font-mono text-xs opacity-60">
							#{{ pr.number }}
						</span>
					</cExternal>
				</li>
			</ul>
		</section>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "#components";
import cExternal from "@/components/common/external.vue";
import OwnerAvatar from "./owner-avatar.vue";
import {
	formatStars,
	githubUrl,
	groupByRepo,
	type Contribution,
} from "#shared/contributions";

const props = defineProps<{ prs: Contribution[] }>();
const groups = computed(() => groupByRepo(props.prs));
</script>

<style scoped>
/* GitHub's "merged" purple */
.merged {
	color: #8250df;
}
:global(.dark) .merged {
	color: #ab7df8;
}
.header,
.row {
	transition: background-color 0.15s ease-out;
}
.header:hover,
.row:hover {
	background-color: var(--surface-color);
}
</style>
