<template>
	<Container variant="blog" class="min-h-[100dvh]">
		<c-page-header title="Certifications 🎓" />

		<main>
			<CertificationTicketList :certifications="certifications" />
		</main>

		<c-footer class="sm:mt-20 mt-10" />
	</Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import cFooter from "@/components/common/footer.vue";
import cPageHeader from "@/components/common/page-header.vue";
import CertificationTicketList from "@/components/certifications/ticket-list.vue";
import { certifications } from "~/lib/certifications";

useSeoMeta({
	title: "Certifications | Adrien Zaganelli",
	ogTitle: "Certifications | Adrien Zaganelli",
});

definePageMeta({
	layout: "blog",
});
</script>
