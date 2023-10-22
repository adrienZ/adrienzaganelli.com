<template>
	<section class="c-about-the-author">
		<div class="mx-auto flex items-start">
			<NuxtImg
				class="sm:h-16 w-16 rounded-full p-1 border-4"
				src="/images/avatar.jpg"
				alt="Author photo"
			/>
			<div class="ml-4 pt-2">
				<div class="flex items-center">
					<h4 class="mr-4 text-xl text-black opacity-90 leading-tight">
						Adrien Zaganelli
					</h4>
					<MyNetworks class="hidden sm:flex" />
				</div>

				<p class="text-md text-black opacity-70 leading-relaxed">
					🇫🇷 Front-end @amexgbt | Typescript, CSS tricks, Vue.js and everything
					javascript
				</p>
			</div>
		</div>
	</section>
</template>
