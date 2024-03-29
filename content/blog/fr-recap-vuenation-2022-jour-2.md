---
draft: true
title: '[FR🇫🇷] Recap VueNation 2022 – Jour 2'
date: 2022-02-28
image:
  src: /content/images/1644914476444.jpeg
  height: 418
---

2eme journée bien remplie, on y a parlé de différents sujets:

- state machine avec [xState](https://xstate.js.org/docs/visualizer/#write-and-visualize-your-code)
- migration vue-cli -> vitejs
- validation de formulaire avec [VeeValidate](https://github.com/logaretm/vee-validate)
<!--more-->
- **Nuxt et ecommerce**
- **cypress et component testing**
- open-source et succès/argent
- [Pinia](https://pinia.vuejs.org/), le nouveau store à la mode

## 🍍 Pinia

Après une petite démo de la librairie, nous apprenons pas mal de choses lors de la FAQ.

- Vuex et Pinia sont toujours en concurrence, maintenus par 2 personnes différentes de la core team Vue
- Selon son créateur, Pinia a subjectivement une meilleur synthaxe mais il a encore insisité sur la similarité avec vuex@5
- Une chose est cependant certaine: Pinia a meilleur support de typescript que vuex@4\. Typescript déduit les types directement avec Pinia la où vuex@4 a besoin d’un [setup et de l’utilisation de clées d’injections](https://next.vuex.vuejs.org/guide/typescript-support.html)
- Il répond également à la question « Do you need a store », en ajoutant qu’avec la composition api les applications petites/moyennes n’ont plus besoin de store.

![](/content/images/pasted-image-202201280025444.png)

## Cypress veut prendre le monopole du testing front-end

Comme évoqué hier, Cypress travaille sur les tests de composants qui devraient être la grosse feature du Cypress@10, en plus de leur domination dans les tests E2E. La feature est encore en cours de dévéloppement (alpha).

ils expliquent pourquoi Cypress s’attaque au composants

<figure class="wp-block-table">

| Actuellement 📉                                         | avec Cypress 📈                         |
| ------------------------------------------------------- | --------------------------------------- |
| DOM Virtuel (jsdom, node)                               | DOM du navigateur                       |
| Difficile à debugger (n’est ce pas)                     | UI avec temps d’exécutions, status, etc |
| Déroulement des tests abstraits, pas de retours visuels | Retours visuels comme pour l’E2E        |

</figure>

![](/content/images/Pasted-image-20220127225433.png)

La partie compliquée sera de setup un plugin webpack pour lancer le web server nécessaire au tests, j’ai l’impression qu’ils ont encore du travail a faire sur cet partie qui n’était pas très clair.

Pour compléter les tests de composants, on nous rapelle qu’il existe une feature de [tests visuels](https://docs.cypress.io/guides/tooling/visual-testing) qui peut être très intéressante pour l’équipe design.

Il semblerait également qu’on est la possibilité de tester nos composants sur [plusieurs navigateurs](https://www.cypress.io/blog/2020/02/06/introducing-firefox-and-edge-support-in-cypress-4-0/#header) supportés par Cypress

En résumé: Cypress 10: 1 DX, 1 API, 1 outil, et une nouvelle UI

## Nuxt for e-commerce (headless shopify)

Un talk très intéressant et complet sur l’optimization d’ecommerce shopify, en passant par un nuxt headless. Il s’agit principalement d’utiliser shopify comme API backend, pré-rendre les pages en statique et tout mettre en cache.

L’intervenant explique qu’il voulait éviter de refaire tout son site d’un coup.  
Pour faire sa migration, il a eu l’idée d’utiliser un hébergeur permettant de partager ses routes en plusieurs backends.

Les premiers élements convertits en headless sont ceux du chemin d’achat: header, footer, homeage, pages collection, pages produits, panier. Le reste est renvoyer vers le theme shopify SSR.

Après avoir fait le chemin d’achat la suite de la migration c’est faite en fonction de la valeur SEO des pages.

Le plus gros bénéfices du headless est la vitesse, nous entrons ensuite dans les détails techniques

- Je ne vous apprend sans doute rien, le cache est primordial. Dans son cas, chaque route à une clée associée dans le cache, permettant de purger le cache spéficiquement pour une page produit par exemple.
- Un cache doit expirer, essayez de prendre en compte la vitesse a laquelle votre contenu évolue pour détérminer la durée de votre cache. mettez en cache l’API dès que c’est possible
- Pour ca, utiliser des service workers coté front. 2 http-clients, un avec et sans cache. n’utilisez pas de cache pour les opérations lié au panier
- Soyez prudent avec le prefetching, sur les appareils d’entrée de gamme, cela peut nuire au perfomances
- Proriser l’optimisation de vos images, définissez le height and width pour réduire le [cumulative shift layout](https://www.fasterize.com/fr/blog/core-web-vitals-google-quest-ce-que-le-cumulative-layout-shift-cls/) => [@nuxt/image](https://image.nuxtjs.org/)
- avec Vuex, faites persister le au reload avec [vuex-persist](https://github.com/championswimmer/vuex-persist#readme). Synchronisez votre state quand un utilisateur à plusieurs onglets ouverts avec [vuex multi tabs](https://github.com/gabrielmbmb/vuex-multi-tab-state)
- Ne mettez jamais en cache les inventaires (liste derniers produits, liste produits populaires). Cela vous pemettra de garder en cache vos pages produits plus longtemps.
- Le code tiers va détruire votre performance, lazy-loadé après la première interaction de l’utilisateur (mousemove, clock, touchstart, etc)
- garder la valeur scroll avec vue-router quand l’utilisateur revient sur une page, remettez le scroll a 0 quand il arrive sur une nouvelle page.
- Utilisez un proxy server-side pour GTM, cela permet en plus de contourner AdBlock

Tout ses enseignements sont matérialisés par ce template Nuxt e-commerce:

![](/content/images/pasted-image-202201280138255.png)

**FAQ**  
Pourquoi TailwindCSS ?

> tailwind est un bon combo avec vue (composants) et il optimize très bien le css

Qu’offre Shopify que vous utilisez toujours pour votre backend ?

> l’api, le panier et la sécurité offerte, de nombreux plugins pratique (thrid-party plugin payments)

Qu’avez utilisé pour faire le caching sur Nuxt

> Layer0

## nuxt 3 from hero to zero

La core team nuxt nous fait la démo d’un clone du jeux wordle. Ils font un exemple ou Nuxt est utilisé comme back-end, le code est partagé entre le front le back, le tout en Typescript. Il utilise le nouveau moteur nitro qui a plein d’utilitaires. On note également l’utilisation systématique de la [script setup synthax](https://staging.vuejs.org/api/sfc-script-setup.html#script-setup) (vue3)

Dans la FAQ, on apprends que:

- @nuxt/bridge est considéré stable, il a pratiquement toutes les features de nuxt 3 et la migration devrait être très simple si on l’utilise
- Incremental static generation is in the Nuxt 3 roadmap
- nuxt 3 is still in development they shipped router middle ware 3-4 days ago
- Nuxt est un peu moins robuste que [Next](https://nextjs.org/) mais il est plus « Hackable »
- **release candidate Q1 2022**,
