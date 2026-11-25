<template>
	<Container variant="blog" class="min-h-[100dvh]">
		<c-page-header title="Open source 🌱" />

		<main>
			<OpenSourceProjectList :prs="prs ?? []" />
		</main>

		<c-footer class="sm:mt-20 mt-10" />
	</Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import cFooter from "@/components/common/footer.vue";
import cPageHeader from "@/components/common/page-header.vue";
import OpenSourceProjectList from "@/components/open-source/project-list.vue";

const { data: prs } = await useFetch("/api/prerender/contributions");

useSeoMeta({
	title: "Open source | Adrien Zaganelli",
	ogTitle: "Open source | Adrien Zaganelli",
});

definePageMeta({
	layout: "blog",
});
</script>
