<template>
	<Container variant="largest">
		<Menu containerVariant="home" class="my-4" />
		<slot />
	</Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import Menu from "@/components/Menu.vue";

useHeadSafe({
	meta: [
		{
			name: "og:image",
			content: "/og-image.jpg",
		},
	],
});
</script>

<style scoped>
.mx-0 {
	margin: 0;
}
</style>
