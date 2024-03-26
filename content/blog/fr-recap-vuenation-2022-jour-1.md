---
draft: true
title: '[FR🇫🇷] Recap VueNation 2022 – Jour 1'
date: 2022-02-27
image:
  src: /content/images/1644914476444.jpeg
  height: 418
---

Le 1er talk ([full video](https://www.youtube.com/watch?v=2KBHvaAWJOA)) était celui d’Evan You, le créateur de vuejs.

1.  3️⃣ Vue 3 deviendra la version par défaut le 7 février, remplaçant ainsi Vue 2 et l’option API [blog post](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html)
2.  📖 Ce changement de défaut s’accompagne d’une [**nouvelle documentation**](https://staging.vuejs.org/) !
<!--more-->
3.  🤓 Vous pouvez désormais vous former sur Vue grâce aux différents [**tutoriels officiels**](https://staging.vuejs.org/tutorial/#step-1) de la nouvelle doc (pensez à bien cocher `Composition API` et `SFC` sur le switch ‘Api preference’ en haut a gauche de la page).
4.  🍍 [Pinia](https://pinia.vuejs.org/) est en train de devenir la norme pour le state management au détriment de [Vuex](https://github.com/vuejs/vuex) (qui a pourtant une API très similaire dans sa version 5).
5.  ⚡️ Dans les prochaines années, Vue sera pensé comme un framework fullstack. La belle époque des [SPA](https://developer.mozilla.org/fr/docs/Glossary/SPA) est révolue, place aux applications performantes ! La core team est en train de s’inspirer de la concurrence (notamment [Svelte](https://svelte.dev/)) et teste de nouvelles stratégies de compilation de templates. Pour les SPA, une version optimisée de Vue est en construction, elle s’appellera "[petite-vue](https://github.com/vuejs/petite-vue)""

### Parlons peu, parlons test

Vous ne le savez peut-être pas, mais il existe 2 librairies officielles pour tester ses applications vue. dans la nouvelle doc on peut cependant lire ceci:

> We recommend using `@testing-library/vue` for testing components in applications, as its focus aligns better with the testing priorities of applications. Use `@vue/test-utils` only if you are building advanced components that require testing Vue-specific internals.

[source](https://staging.vuejs.org/guide/scaling-up/testing.html#component-testing)

Le second talk ([full video](https://www.youtube.com/watch?v=L_BK8zXGdBM)) de la journée fut donc celui de [Natalia Tepluhina](https://twitter.com/n_tepluhina), elle y donne de précieux conseils sur les TU dont certains pourraient nous inspirer.

![](/content/images/Pasted-image-20220127001406.png)

- « create a factory method that create your component, and destroy the wrapper afterEach »

- « use helper function to find child elements (wrapper as parameter) »

![](/content/images/capture-decran-2022-01-27-a-01-40-40.jpg)

- « do not spy methods, because of code refactoring, only test the output »

On y apprend également que Cypress travaille sur le [component testing](https://docs.cypress.io/guides/component-testing/introduction) (pas de E2E donc). c’est en alpha donc on ne verra pas ca en prod dans un avenir proche mais il y devrait y avoir un talk dessus ce soir.

### Le reste

Les autres conférences notables ont porté sur :

- L’accessibilité: on nous conseille un [plugin eslint](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) pour commencer simplement puis L’outil [AXE](https://www.deque.com/axe/) pour aller plus loin ([jest](https://www.npmjs.com/package/jest-axe), [cypress](https://www.npmjs.com/package/cypress-axe))
- **NUXT 3** et de son futur moteur nitro (qui en a sous le capot) qui se repose sur plusieurs outils du [unjs universe](https://github.com/unjs). Pour faire simple il sera rapide et marchera sur tout type d’environement (browser, node, workers, peut être deno à l’avenir). On y voit également une slide intéressante sur le cache routing et des modes de rendu par page (mais je ne pense voir ca dans un futur proche)

![](/content/images/capture-decran-2022-01-27-a-00-39-48.jpg)
