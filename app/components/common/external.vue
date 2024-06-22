<template>
	<a
		rel="noopener noreferrer"
		target="_blank"
		@mouseover="$bus.emit('cursor-hover')"
		@mouseleave="$bus.emit('cursor-default')"
	>
		<slot />
	</a>
</template>
