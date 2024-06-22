<template>
	<ul class="c-my-networks flex">
		<li>
			<a href="https://twitter.com/adri_zag">
				<span class="sr-only">Twitter</span>
				<svg class="w-4 h-4 inline-block fill-current">
					<use xlink:href="#icon-twitter" x="0" y="0" />
				</svg>
			</a>
		</li>
		<li class="ml-2">
			<a href="https://github.com/adrienZ">
				<span class="sr-only">Github</span>
				<svg class="w-4 h-4 inline-block fill-current">
					<use xlink:href="#icon-github" x="0" y="0" />
				</svg>
			</a>
		</li>
		<li class="ml-2">
			<a href="https://www.linkedin.com/in/adrienzaganelli/">
				<span class="sr-only">Linkedin</span>
				<svg class="w-4 h-4 inline-block fill-current">
					<use xlink:href="#icon-linkedin" x="0" y="0" />
				</svg>
			</a>
		</li>
		<li class="ml-2">
			<a href="mailto:adrienzaganelli@gmail.com">
				<span class="sr-only">Mail</span>
				<svg class="w-4 h-4 inline-block fill-current">
					<use xlink:href="#icon-send" x="0" y="0" />
				</svg>
			</a>
		</li>
	</ul>
</template>

<style>
.c-my-networks a:hover svg,
.c-my-networks a:focus svg {
	fill: theme("colors.pimper");
}
</style>
