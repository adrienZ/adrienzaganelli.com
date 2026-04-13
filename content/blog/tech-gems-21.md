---
draft: false
title: "Tech gems 👁️ #21: SSR tweet with vue.js, translate to Linkedin speak"
date: 2026-04-13
image:
  src: /content/images/tech-gems-placeholder.webp
---

- ▶️ [SSR rendered tweet with Nuxt](#ssr-rendered-tweet-with-nuxt)
- ▶️ [Translate your message in corporate bullsh*t](#translate-your-message-in-corporate-bullsht)
- ▶️ [A new framework agnostic markdown renderer](#a-new-framework-agnostic-markdown-renderer)


<!-- more -->


### SSR rendered tweet with Nuxt

<RichLink href="https://vue-better-tweet.vercel.app" title="vue-better-tweet"></RichLink>

I made a thing ! this is the vue port of Vercel's [react-tweet](https://react-tweet.vercel.app/). It solves the paintpoint of loading a lot of javascript on the client to embed tweet by allowing you to render them on the server.

---

### Translate your message in corporate bullsh*t

<RichLink href="https://translate.kagi.com/?from=auto&to=linkedin" title="Linkedin Speak"></RichLink>

Kagi Translate gave us the corporate translator we always wanted.

> "I made a thing ! this is the vue port of Vercel's react-tweet"

becomes

> "🚀 Thrilled to share what I’ve been working on! I just built a Vue port of Vercel's react-tweet. 🛠️✨ <br /><br />
> It’s been an incredible journey bringing this functionality to the Vue ecosystem. Can’t wait to see how the community uses it! Check it out. 👇 <br /><br />
> #VueJS #WebDevelopment #OpenSource #Vercel #FrontendEngineering #Innovation"

---

### A new framework agnostic markdown renderer

<RichLink href="https://comark.dev/" title="comark.dev"></RichLink>

Nuxt team continues to deliver ! comark.dev is the framwork agnostic heir of [Nuxt Content](https://content.nuxt.com/).
Here is [Sebastien Chopin's words](https://x.com/Atinux/status/2041534822347313305) about it:

> We’ve been evolving Nuxt Content & MDC into Comark.
> It’s a fast, streaming-ready Markdown parser and renderer for @vuejs, @reactjs, @sveltejs, HTML, and even ANSI terminals.

> By decoupling parsing & rendering, it allows you to parse on the server + cache it and render the AST on the app-side, keeping your app fast and payload minimal.

> On the next phase, we plan to add support for collections and navigation generation, so if you love Nuxt Content but have to use another framework, we got you.

