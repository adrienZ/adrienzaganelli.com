---
draft: false
title: "Tech gems 👁️ #14: Refactoring components well, SQLite and TypeScript in Node.js"
date: 2024-08-12
image:
  src: /content/images/tech-gems-placeholder.webp
---

- ▶️ [Refactoring your components, the good way](#refactoring-your-components-the-good-way)
- ▶️ [TutorialKit by Stackblitz](#tutorialkit-by-stackblitz)
- ▶️ [Node.js is getting experimental support for TypeScript](#nodejs-is-getting-experimental-support-for-typescript)
- ▶️ [Node.js implements a build-in support for SQLite](#nodejs-implements-a-build-in-support-for-sqlite)

<!-- more -->

---

### Refactoring your components, the good way

<RichLink href="https://alexkondov.com/refactoring-a-messy-react-component/" title="Common Sense Refactoring of a Messy React Component"></RichLink>

[Alex Kondov](https://alexkondov.com/) gives a glimpse of how you should refactor those legacy components you'll encounter at your new job. Don't forget to test your code!

---

### TutorialKit by Stackblitz

<RichLink href="https://blog.stackblitz.com/posts/announcing-tutorialkit/" title="Announcing TutorialKit: Interactive tutorials in the browser"></RichLink>

TutorialKit is a new open-source project that simplifies the creation of interactive tutorials for JavaScript frameworks or libraries.

It runs on WebContainers, but tutorials built with TutorialKit are static sites that can be hosted on various platforms and customized visually with themes.

It comes with a CLI generator and a [VSCode extension](https://marketplace.visualstudio.com/items?itemName=StackBlitz.tutorialkit) to get you started.

---

### Node.js is getting experimental support for TypeScript

<RichLink href="https://nodejs.org/api/typescript.html" title="Modules: TypeScript"></RichLink>

In Node.js version 22, new features are coming. One of those is a lightweight support for Typescript ! Under the hood, node will [strip types](https://nodejs.org/api/typescript.html#type-stripping).

For other cases, you'll need to use TypeScript as usual. My personal favorite is [jiti](https://github.com/unjs/jiti) from [unjs](https://unjs.io/?utm_source=adrienzaganelli.com).

---

### Node.js implements a build-in support for SQLite

<RichLink href="https://nodejs.org/api/sqlite.html" title="SQLite"></RichLink>