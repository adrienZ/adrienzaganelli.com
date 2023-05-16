<template>
	<section class="c-about-the-author">
		<div class="mx-auto flex">
			<nuxt-link to="/" class="flex-shrink-0">
				<NuxtImg
					class="sm:h-16 w-16 rounded-full p-1 border-2"
					src="/assets/img/avatar.jpg"
					alt="Author photo"
				/>
			</nuxt-link>
			<div class="ml-4 pt-2">
				<div class="flex items-center">
					<h4 class="mr-4 text-xl text-gray-900 leading-tight">
						{{ $store.state.author.name }}
					</h4>
					<MyNetworks class="hidden sm:flex" />
				</div>

				<p class="text-md text-gray-600 leading-relaxed">
					{{ $store.state.author.description }}
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import MyNetworks from '@/components/my-networks.vue'
</script>

<style></style>
