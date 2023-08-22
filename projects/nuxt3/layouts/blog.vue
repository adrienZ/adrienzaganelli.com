<template>
	<div>
		<Header />
		<div class="layout-blog">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import Header from '@/components/blog/header.vue'
</script>
