<template>
	<section class="c-about-the-author">
		<div class="mx-auto flex">
			<NuxtImg
				class="sm:h-16 w-16 rounded-full p-1 border-2"
				src="/assets/img/avatar.jpg"
				alt="Author photo"
			/>
			<div class="ml-4 pt-2">
				<div class="flex items-center">
					<h4 class="mr-4 text-xl text-gray-900 leading-tight">
						Adrien Zaganelli
					</h4>
					<MyNetworks class="hidden sm:flex" />
				</div>

				<p class="text-md text-gray-600 leading-relaxed">
					🇫🇷 Front-end @amexgbt | young jury @awwwards | Grad @Hetic | indie
					games, heavy metal and anime
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import MyNetworks from '@/components/my-networks.vue'
</script>

<style></style>
