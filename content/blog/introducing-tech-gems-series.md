---
draft: false
title: Introducing Tech gems series 👁️
date: 2024-02-22
image:
  src: /content/images/tech-gems-placeholder.webp
---

I'm glad to start a new blog series about web development and technology in general!

In "**Tech gems**" we will try to uncover insider information in the JavaScript ecosystem and also share the main informations and various discoveries.

I'll try to post weekly or at the very least, monthly.

<!--more-->

---

Before we dive into the recent discoveries, I'd like to add a personal note.

Keeping up with the ecosystem can be hard as things move absurdly fast. I want to warn those entering in the industry that you don't need to know everything nor try every framework out there.

What you need is to build your own path: show up every day, find your speciality, and then broaden your skills and build on top of top them.
You must learn constantly as a developer; these posts will try to help discoveri new opportunities, and avoid tutorial hell.

This job can be stressful when you have clients and/or deadlines. It can also be full of corporate/scrum stuff that will make you bang your head against the wall. Dealing with legacy code is also a special snowflake and will probably give you the hardest challenges.

At the end of the day, code is code. Make sure to enjoy your life, the one outside of your IDE 🤭

Always remember that "[The Best Code is No Code At All](https://blog.codinghorror.com/the-best-code-is-no-code-at-all/)"

To be fully honest, I still do not apply all of the advice I gave you above... I also began this series to avoid FOMO in my everyday discoveries. Writing them down every now and then will force me to filter the amount of information I read, and make sure to keep here the ones that are worthy.

Let's conclude with the biggest taboo in our industry: Burnout. Since I started back in 2019, I saw a lot of my friends and colleagues falling into it, or approaching close the edge.
It's not worth it, I'll leave you with some good stuff from Austin Gil:

<RichLink href="https://austingil.com/work-life-balance/" title="On Work-Life Balance, Depression, & Purpose"></RichLink>

Now that you're warned, let's go to the good stuff !

## Tech gems 👁️ #1

### Rumors

- <RichLink href="https://github.com/nuxt-hub" title="NuxtHub on Github"></RichLink>

Sebastien Chopin, aka [@atinux](https://twitter.com/Atinux), creator of Nuxt.js, posted an enigmatic [tweet](https://twitter.com/Atinux/status/1757796143864394155) a few days ago:
> Not tweeting a lot lately, cooking something 🍰

We can now guess it's about the new `NuxtHub` organization on Github. NuxtHub should help developers to "build full-stack application with Nuxt on CloudFlare, with zero configuration and transparent pricing."


### Tutorials:

- <RichLink href="https://tympanus.net/codrops/2024/01/19/making-css-view-transitions-easy-with-velvette/" title="Making CSS View Transitions Easy with Velvette
"></RichLink>

[Noam Rosenthal](https://www.linkedin.com/in/noamrosenthal), co-editor of the CSS view-transitions spec, gives us a splendid tutorial on Codrops.

He explains how to achieve advanced smooth page transitions with the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) and the [velvette library](https://github.com/noamr/velvette) to handle the missing pieces.

You have to understand it's a game changer to make those with so little JavaScript, it will close the gap between server rendered websites and fully interactive SPAs.

### Backend

- <RichLink href="https://www.uber.com/en-FR/blog/how-uber-serves-over-40-million-reads-per-second-using-an-integrated-cache/" title="How Uber Serves Over 40 Million Reads Per Second from Online Storage Using an Integrated Cache
"></RichLink>

A long read where Uber explain how their "Docstore Architecture" allows them to perform numerous database reads thanks to caching.

---

- <RichLink href="https://adonisjs.com/blog/future-plans-for-adonisjs-6" title="Future plans for AdonisJS v6
"></RichLink>

After [announcing their new major version](https://adonisjs.com/blog/adonisjs-v6-announcement) (V6), the AdonisJS team brings some details about the roadmap without promising any release dates or timelines.
Overall, they aim to improve type safety and have realeased a few packages outside of the core:
- Bento Cache
- Edge (templating)
- Japa (testing)
- VineJS (validation and schema)
- Verrou (locks in Node.js)

~~But the real takeway for me is that **Adonis decided to take over the inertia package and maintain it officially.**~~.

> **Erratum (24/02/2024):** This is incorrect. Instead, the community package `eidellev/inertiajs-adonisjs` will become an official first-party integration, known as `@adonisjs/inertia`.

[Inertia](https://inertiajs.com/) is often used as "glue" between your front-end and your back-end and has been popularized by the [Laravel](https://laravel.com/) community from PHP.

In the post, Adonis mentions SSR supports for Inertia, which could be a game changer for "server components" in nodejs.

### Business

- <RichLink href="https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/" title="(Almost) Every infrastructure decision I endorse or regret after 4 years running infrastructure at a startup
"></RichLink>

[Jack Lindamood](https://cep.dev/) has gone through a lot while building his startup. He kindly details many strategic infrastructure decisions such as picking AWS over Google Cloud or regretting choosing Datatog.

Must read if you plan to build a digital business one day !

### Misc


- <RichLink href="https://qr.blinry.org" title="qr.blinry.org"></RichLink>

A fun website to learn how to read a QR code, it's as hard as it sounds.