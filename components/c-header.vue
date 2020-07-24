<template>
  <header class="c-header py-4 bg-red-200">
    <nav>
      <ul class="text-2xl underline flex">
        <li>
          <h3 class="text-2xl">
            <nuxt-link to="/">
                <svg class="w-12 h-12 inline-block"><use xlink:href="#icon-logo" x="0" y="0"/></svg>
            </nuxt-link>
          </h3>
        </li>
        <li class="mr-3"><nuxt-link to='/blog'>Blog</nuxt-link></li>
        <li class="mr-3"><a href="#about">about</a></li>
      </ul>
    </nav>
  </header>
</template>