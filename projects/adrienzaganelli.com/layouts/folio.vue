<template>
	<div>
		<CustomCursor />
		<slot />
	</div>
</template>

<script setup lang="ts">
import CustomCursor from '@/components/common/cursor.vue'
</script>
