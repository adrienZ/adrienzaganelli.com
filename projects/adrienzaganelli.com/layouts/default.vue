<template>
	<main>
		<slot />
		<Icons />
		<CustomCursor />
	</main>
</template>

<script>
import Icons from '@/layouts/icons.vue'
import CustomCursor from '@/components/common/cursor.vue'

export default {
	components: {
		Icons,
		CustomCursor,
	},
}
</script>
