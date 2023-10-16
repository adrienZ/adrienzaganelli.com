<template>
	<Container variant="largest" class="mx-0">
		<IconsCache />

		<DevOnly>
			<Menu />
		</DevOnly>
		<slot />
	</Container>
</template>

<style scoped>
.mx-0 {
	margin: 0;
}
</style>
