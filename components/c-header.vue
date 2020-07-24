<template>
  <header class="c-header py-4 bg-red-100">
    <nav>
      <ul class="text-2xl underline flex">
        <li>
          <h3 class="text-2xl">
            <nuxt-link to="/">
                <svg class="w-6 h-6 inline-block"><use xlink:href="#icon-logo" x="0" y="0"/></svg>
            </nuxt-link>
          </h3>
        </li>
        <li class="ml-5"><nuxt-link to='/blog'>Blog</nuxt-link></li>
        <li class="ml-5"><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
</template>