<template>
	<div
		class="shiki relative text-sm my-2 p-4"
		:class="{
			multiline: isMultiline,
		}"
	>
		<span v-if="filename" class="filename">{{ filename }}</span>
		{{}}
		<slot />
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		code?: string
		language?: string | null
		filename?: string | null
		highlights?: Array<number>
		meta?: string | null
	}>(),
	{ code: '', language: '', filename: null, highlights: () => [], meta: null }
)

const isMultiline = computed(
	() => props.code.split('\n').filter(Boolean).length > 1
)
</script>

<style lang="scss" scoped>
.shiki {
	background: #1e1e1e;
}

.filename {
	color: white;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	@apply text-xs;

	// icon
	background-image: url(~/assets/img/file-icon-dark.svg);
	padding: 0 8px 0 20px;
	background-repeat: no-repeat;
	background-position: center left 8px;
	background-size: auto 10px;
}

.multiline :slotted(code) {
	counter-reset: step;
	counter-increment: step 0;
}

.multiline :slotted(code) .line::before {
	content: counter(step);
	counter-increment: step;
	width: 1rem;
	padding-right: 2rem;
	margin-right: 1rem;
	border-right: 1px solid white;
	display: inline-block;
	text-align: left;
	@apply text-white;
	opacity: 0.35;
}

:slotted(pre) {
	overflow: auto;
}
</style>
