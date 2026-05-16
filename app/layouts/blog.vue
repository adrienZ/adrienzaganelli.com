<template>
	<div>
		<Menu containerVariant="home" class="my-4" />
		<div class="layout-blog">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import Menu from "@/components/Menu.vue";
</script>
