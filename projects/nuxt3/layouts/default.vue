<template>
	<div>
		<Icons />
		<CustomCursor />
		<slot />
	</div>
</template>

<script setup lang="ts">
import Icons from '@/layouts/icons.vue'
import CustomCursor from '@/components/common/cursor.vue'
</script>
