---
draft: false
title: "Tech gems 👁️ #15: All-in PostgreSQL with PGLite"
date: 2024-08-26
image:
  src: /content/images/tech-gems-placeholder.webp
---

- ▶️ [PGLite is SQLite for PostgreSQL](#pglite-is-sqlite-for-postgresql)
- ▶️ [Postgres.new will write SQL for you](#postgresnew-will-write-sql-for-you)
- ▶️ [Exploring pg-boss: Background Jobs in TypeScript and PostgreSQL](#exploring-pg-boss-background-jobs-in-typescript-and-postgresql)
- ▶️ [Backup Strategies Simplified: Using pg_back with PostgreSQL](#backup-strategies-simplified-using-pg_back-with-postgresql)


<!-- more -->

---

### PGLite is SQLite for PostgreSQL

<RichLink href="https://github.com/electric-sql/pglite" title="pglite on Github"></RichLink>

You can now work with Postgre databases without a server. With PGLite, your database can be in memory, in your filesystem or directly in [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). This is huge for testing as you run can this [locally](https://x.com/sitnikcode/status/1826646718777016772). It's also good to know that [Drizzle ORM already supports it](https://orm.drizzle.team/learn/latest-releases/drizzle-orm-v0306).

---

### Postgres.new will write SQL for you

<RichLink href="https://postgres.new/" title="Postgres.new from Supabase"></RichLink>

Speaking of [PGLite](https://x.com/ElectricSQL/status/1822999721109033051), here comes Postgres.new !

> It’s like if ChatGPT and Postgres had a love-child: launch as many databases as you want, build them with AI, create charts, create embeddings. 100% open source.
>
> [from](https://x.com/kiwicopple/status/1822997940983472329) <cite>Paul Copplestone, Supabase CEO </cite>

Here is a [demo](https://x.com/rauchg/status/1822999849056584003) from the Vercel CEO.

---

### Exploring pg-boss: Background Jobs in TypeScript and PostgreSQL

<RichLink href="https://logsnag.com/blog/deep-dive-into-background-jobs-with-pg-boss-and-typescript" title="pg-boss in TypeScript: A Deep Dive"></RichLink>

This article explores pg-boss, a Node.js job queue library using PostgreSQL, discussing its benefits, basic usage, scheduling jobs, and a proposal for a TypeScript wrapper for easier job handling.

---

### Backup Strategies Simplified: Using pg_back with PostgreSQL

<RichLink href="https://github.com/orgrim/pg_back" title="pg_back on Github"></RichLink>