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
import {
	IconsCache,
	NuxtLayout,
	NuxtLoadingIndicator,
	NuxtPage,
} from "#components";
</script>
