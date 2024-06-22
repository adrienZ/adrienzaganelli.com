<template>
	<section
		class="c-hire-me border-2 p-6 rounded-lg border-green-400 block sm:flex items-center text-black"
	>
		<header class="flex items-center flex-shrink-0">
			<div class="c-hire-me__ping w-4 h-4 rounded-full bg-green-400"></div>
			<h5 class="ml-2 sm:ml-4 text-xl text-gray-900 font-bold leading-tight">
				Hire me !
			</h5>
		</header>

		<div class="ml-10 sm:ml-8 mt-2 sm:-0">
			<p class="text-sm">
				I'm available for full-time contract in Paris, contact me here:
				<a class="hover:underline" href="mailto:adrienzaganelli@gmail.com">
					adrienzaganelli@gmail.com
				</a>
			</p>
			<p class="text-xs mt-1">
				You you want to learn more about me,
				<nuxt-link class="underline" to="/">click here</nuxt-link>
				.
			</p>
		</div>
	</section>
</template>

<style lang="scss">
.c-hire-me {
	z-index: 1;
	@apply relative;
}

.c-hire-me__ping {
	@apply relative;
	@apply m-2;

	&::after {
		content: "";
		@apply absolute;
		@apply rounded-full;
		@apply h-8;
		@apply w-8;
		@apply -ml-2;
		@apply -mt-2;
		@apply bg-green-200;
		z-index: -1;
		animation: ping 2s infinite;
	}

	@keyframes ping {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
}
</style>
