---
draft: false
title: "Tech gems 👁️ #2: Nuxt 4 announced, Get a Laravel job, Stable Diffusion 3"
date: 2024-03-01
image:
  src: /content/images/tech-gems-placeholder.webp
---

- A plethora of features unveiled at Vue Amsterdam 2024
- Essential Laravel interview questions
- Resend's challenging start to the year
- Introduction to Stable Diffusion 3

<!--more-->

## Erratum

In the previous issue, it was mistakenly stated that Inertia will take over the `inertiajs/inertia` package. This is incorrect. Instead, the community package `eidellev/inertiajs-adonisjs` will become an official first-party integration, known as `@adonisjs/inertia`.

### Highlights from Vue.js Amsterdam 2024 (day one)

While React wants you to write html in native application with [react-strict-dom](https://github.com/facebook/react-strict-dom); the Vue community is converging in Europe as [Vue Amsterdam conference](https://vuejs.amsterdam/) is running.

<RichLink href="https://nitro.unjs.io/guide/database" title="Databases for Nitro"></RichLink>

At of this writing, I only saw the first day, yet the talks have been fantastic ([find them here](https://www.youtube.com/watch?v=4H9S7iIVQqI)).

Here are the key insights:
1. As mentioned [last week](/blog/introducing-tech-gems-series#rumors): **[NuxtHub](https://hub.nuxt.com/)** has officially launched with comprehensive documentation. Sebastien Chopin also demonstrated file uploads, database usage, blobs and KV storage. Looks like **Cloudflare could become the "Vercel of Nuxt"**
2. #Rumors: the creator behind the state management library [pinia](https://pinia.vuejs.org/) is working on another library focused on data fething called "**Pinia Colada**". [Clip](https://youtube.com/clip/UgkxSdPjQ7U5fG9H42bRWKQ4fElvLmkFiQhp?si=WJzCMUV7D6QNwief)
3. **Nuxt 4** is on the Horizon, but don't expect major annoucement as features are delivered in minor versions. Instead look out for new modules: [test-utils](https://nuxt.com/docs/getting-started/testing), [fonts](https://github.com/nuxt/fonts), auth notably.
4. Julien Huang showcased the interactive Vue server components, also known as "Nuxt islands."

However, the most significant news, in my opinion, concerns the latest release of Nitro (the backend behind [Solid Start](https://start.solidjs.com/getting-started/what-is-solidstart), Nuxt, [Analog](https://analogjs.org/)). Indeed this release includes:
- [WebAssembly support](https://github.com/unjs/unwasm)
- [scheduled tasks](https://nitro.unjs.io/guide/tasks#scheduled-tasks) (cron jobs)
- [web sockets](https://nitro.unjs.io/guide/websocket)
- **[database layer](https://nitro.unjs.io/guide/database)** (sqlite for now)

<Tweet>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Try out with <a href="https://twitter.com/nuxt_js?ref_src=twsrc%5Etfw">@nuxt_js</a> chat demo hosted on a <a href="https://twitter.com/Raspberry_Pi?ref_src=twsrc%5Etfw">@raspberry_pi</a> 5 with <a href="https://twitter.com/bunjavascript?ref_src=twsrc%5Etfw">@bunjavascript</a> as runtime and only Nitro built-in features.<br><br>🟢 <a href="https://t.co/UMM4YOez7f">https://t.co/UMM4YOez7f</a><br><br>👀 <a href="https://t.co/IOO240Wjj6">https://t.co/IOO240Wjj6</a> <a href="https://t.co/VAY0ppHbDB">https://t.co/VAY0ppHbDB</a></p>&mdash; Pooya Parsa  (@_pi0_) <a href="https://twitter.com/_pi0_/status/1762861645275988150?ref_src=twsrc%5Etfw">February 28, 2024</a></blockquote>
</Tweet>

### Laravel interview questions

<RichLink href="https://dev.to/lambdatest/190-top-laravel-interview-questions-2023-3nog" title="laravel questions"></RichLink>

Dreaming of a Lamborghini? Land a Laravel job first! This post offers a comprehensive overview of the Laravel Ecosystem.

### Resend's Turbulent Start to the Year

<RichLink href="https://resend.com/blog/incident-report-for-february-21-2024" title="Resend drama"></RichLink>

Following an incident in [January](https://resend.com/blog/incident-report-for-january-10-2024) where Resend leaked "emails sent, domains, API Keys (encrypted), logs, and contacts, affecting all users".

The email provider faced another setback in February... this time it was an outage for several hours.

> While building a feature, we performed a database migration command locally, but it incorrectly pointed to the production environment instead, which dropped all tables in production.
>
> The first attempt to restore the database took 6 hours but failed due to a wrong selection of the backup timestamp. The second attempt to restore took an extra 5 hours and succeeded, bringing all data back besides a 5-minute window of data loss.

Morality: keep your prod credentials safe !

### Others

<RichLink href="https://stability.ai/news/stable-diffusion-3" title="Stable diffusion 3"></RichLink>

---

<RichLink href="https://redmonk.com/kholterhoff/2024/02/15/frontend-developers-the-newest-new-kingmakers/" title="front ends are the kings"></RichLink>


