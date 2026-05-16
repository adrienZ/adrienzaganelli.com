<template>
	<div>
		<IconsCache />
		<NuxtLoadingIndicator color="var(--primary-color)" />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import { NuxtLayout, NuxtLoadingIndicator, NuxtPage } from "#components";
import IconsCache from "@/components/IconsCache.server.vue";
</script>
