<template>
	<img
		:src="ownerAvatar(owner, size * 2)"
		:alt="owner"
		:width="size"
		:height="size"
		loading="lazy"
		class="shrink-0 border border-black border-opacity-10 bg-surface"
		:class="ownerType === 'Organization' ? 'rounded-md' : 'rounded-full'"
	/>
</template>

<script setup lang="ts">
import { ownerAvatar, type Contribution } from "#shared/contributions";

withDefaults(
	defineProps<{
		owner: string;
		ownerType: Contribution["ownerType"];
		size?: number;
	}>(),
	{ size: 40 },
);
</script>
