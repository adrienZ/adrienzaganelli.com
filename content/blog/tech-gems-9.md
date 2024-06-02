---
draft: false
title: "Tech gems 👁️ #9: Nuxt at scale and vector search for SQLite"
date: 2024-06-10
image:
  src: /content/images/tech-gems-placeholder.webp
---

- [▶️](#vector-search-is-coming-to-sqlite) Vector Search is coming to SQLite
- [▶️](#vector-search-with-nuxt-and-sqlite) Vector Search with Nuxt and SQLite
- [▶️](#domain-driven-code-architecture-with-nuxt-layers) Domain-driven code architecture with Nuxt layers
- [▶️](#be-cautious-with-nuxt-auto-imports) Be cautious with Nuxt auto-imports
- [▶️](#the-best-way-to-validate-forms-in-nuxt-full-stack) The best way to validate forms in Nuxt (full-stack)


<!-- more -->

---

### Vector Search is coming to SQLite

<RichLink href="https://turso.tech/blog/turso-brings-native-vector-search-to-sqlite" title="Turso brings Native Vector Search to SQLite"></RichLink>

[Vector search](https://www.elastic.co/what-is/vector-search/) is a technique that converts unstructured data into numeric representations to enable more relevant and efficient searches beyond just keywords. It's widely used in machine learning and LLM.

While vector search is possible in SQLite with an extension, Turso includes it natively in their fork: [LibSQL](https://turso.tech/libsql).

---

### Vector Search with Nuxt and SQLite

<RichLink href="https://markus.oberlehner.net/blog/nuxt-building-a-similar-products-feature-with-vector-search-and-sqlite/" title="Nuxt: Building a Similar Products Feature with Vector Search and SQLite"></RichLink>

Markus Oberlehner provides a step-by-step tutorial on how to integrate SQLite and OpenApi into a Nuxt app. This could useful if you are working on e-commerce.

---

### Domain-driven code architecture with Nuxt layers

<RichLink href="https://davestewart.co.uk/blog/nuxt-layers/" title="Modular site architecture with Nuxt layers
"></RichLink>

The [flat folder structure of Nuxt](https://nuxt.com/docs/api/nuxt-config#dir) might not be well suited for teams or large projects. Dave Steward gives us a few ways to organize our code by domain (or feature) with [Nuxt layers](https://nuxt.com/docs/getting-started/layers).

---

### Be cautious with Nuxt auto-imports

<RichLink href="https://davestewart.co.uk/blog/nuxt-auto-import/" title="Getting a grip on Nuxt's auto-import functionality"></RichLink>

Nuxt's [auto-import](https://nuxt.com/docs/guide/concepts/auto-imports) functionality can be both useful and challenging. While it saves lines and improves readbility, it can grow you bundle size and/or global namespace collisions.

Dave Stewart (again) explains how to avoid these pitfalls in large projects.

---

### The best way to validate forms in Nuxt (full-stack)

<RichLink href="https://soubiran.dev/posts/nuxt-going-full-stack-how-to-validate-forms" title="Nuxt Going Full-Stack: How to Validate Forms?"></RichLink>

Estéban Soubiran from [UnJs](https://unjs.io/) shows us how he managed to validate forms on both the client and server sides without duplicating the validation logic, from simple text fields to complex file uploads.
