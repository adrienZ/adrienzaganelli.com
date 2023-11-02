<template>
	<div>
		<IconsCache />
		<DevOnly>
			<Menu />
			<!-- <DevColorSchema /> -->
		</DevOnly>
		<BlogHeader />
		<div class="layout-blog">
			<slot />
		</div>
	</div>
</template>
