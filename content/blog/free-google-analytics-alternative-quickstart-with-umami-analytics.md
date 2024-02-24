---
draft: false
date: 2023-10-21T08:49:16.000Z
title: "Free Google Analytics Alternative: Quickstart with Umami Analytics"
description: "Explore Umami Analytics, a free Google Analytics alternative. This tutorial covers setup to custom event tracking, offering a self-hosted, open-source solution."
image:
  src: /content/images/umami-cover.png
---

I used to love splitbee.io to handle my analytics for a while. But since Vercel bought it, the service no longer works. To avoid this unpleasant situation again, I wanted to find an open-source alternative that I can self-host while being developer friendly and RGPD compliant. Let me tell you a few words about Umami analytics.

<!-- more -->

## Context

As a European, I have witnessed [Google Analytics become illegal](https://plausible.io/blog/google-analytics-illegal). That's why in early 2021 I was looking for an alternative, at that time I got fond of [splitbee.bio](https://splitbee.io/).

::tweet
<p lang="en" dir="ltr"><a href="https://twitter.com/splitbee?ref_src=twsrc%5Etfw">@splitbee</a> is a simpler, European-based alternative to Google analytics.<br><br>I really like the cute UI, but my favorite feature is the ability to avoid ad-blockers with a proxy 😈😈😈</p>&mdash; Adrien Zaganelli (@adri_zag) <a href="https://twitter.com/adri_zag/status/1372861060731052035?ref_src=twsrc%5Etfw">March 19, 2021</a>
::

...But once it became [Vercel Analytics](https://vercel.com/blog/vercel-acquires-splitbee) I had to find something else to avoid vendor lock-in.

If you want to avoid what happened to me, here is what you need to look for your analytics tool:
- 🤑 Self hosted and free (avoid cloud solution)
- 🍪 RGPD compliant for europeans laws (also avoid the need for cookies banner)
- 🥷 Bypass ad-blockers
- 🪽 Performant without too much javascript
- 🔓 Open-source is a big plus
- 🧑🏻‍💻 Developer friendly

**I chose to go with [Umami analytics](https://umami.is/)**. It matches all of the above !

Umami tracks page views, custom events, visitor location but you can host it yourself and own your data in your own database.
It also allows you to work in teams, the UI is translated in many languages, you can share your dashboards and many other [features](https://umami.is/features)... including dark mode 😎.

> That's cool but I do get this in my own website ?

Excellent question Timmy ! you have two choices:
- use their cloud solution (with a free tier): [https://cloud.umami.is](https://cloud.umami.is)
- Follow this tutorial to discover the simplest, cost-free path in under 10 minutes (ideal if you're a developer who wants to manage your data and avoid bills)

You will need node v16.13+ and PostgreSQL.

## Setup your database

To get started quickly I used [PlanetScale](https://planetscale.com/pricing). Umami also provides guides for:
- [Digital Ocean](https://umami.is/docs/running-on-digitalocean)
- [Supabase](https://umami.is/docs/running-on-supabase)

But any PostgreSQL database will do the job.

Create an account and create your database in PlanetScale. Choose your region and take the free options (you still need to enter your credit card).
![PlanetScale's database creation interface](/content/images/umami-planetscale-setup.jpg)

I took the "Others" provider
![PlanetScale's providers interface](/content/images/umami-planetscale-provider.jpg)

Set your database password
![PlanetScale's password interface](/content/images/umami-planetscale-password.jpg)

you should have this file at the end
```toml[.env]
# your values will be different
DATABASE_HOST="aws.connect.psdb.cloud"
DATABASE_NAME="umami"
DATABASE_USERNAME="zz6qgpsqiq4u932t2axo"
DATABASE_PASSWORD="pscale_pw_zfsPwRz0tW9H2wLDaykeXqZV5SA34l52gqAgA7XoWc0"
# added by me for next step
# mysql://[username]:[password]@[host]/[dbname]?sslaccept=strict
DATABASE_URL="mysql://zz6qgpsqiq4u932t2axo:pscale_pw_zfsPwRz0tW9H2wLDaykeXqZV5SA34l52gqAgA7XoWc0@aws.connect.psdb.cloud/umami?sslaccept=strict"
```

## Self-host your Umami instance

Fork Umami analytics on Github: [🔗 fork here](https://github.com/umami-software/umami/fork).

Your instance can be hosted on many providers such as:
- [Vercel](https://umami.is/docs/running-on-vercel)
- [Netlify](https://umami.is/docs/running-on-netlify)
- [Railway](https://umami.is/docs/running-on-railway)
- [fly.io](https://umami.is/docs/running-on-fly-io)

You may notice that our fork is a [Next.js](https://nextjs.org/) project, so we will host it on [Vercel](https://nextjs.org/).

When creating you project you have 3 things to do:
1. Override build command: `yarn build`.
2. Override install command: `yarn install`.
3. Set `DATABASE_URL` in environment variables (take a look at the `.env` file above to see what you should get).

![Vercel's project creation interface](/content/images/umami-vercel-setup.jpg)

After deployment, you should be able to see your instance's login !

![Umami empty login screen](/content/images/umami-login.jpg)

Before continuing, login as username: `admin`, password `umami`. Make sure to change your password: [see docs](https://umami.is/docs/login)

## Setup your application

Once you're logged in, go to settings and create your website's project in Umami:

![Umami modal to add project to your instance](/content/images/umami-create-project.jpg)

Once created, go to Settings > (your project's row) > Edit > Tracking code. Paste the tracking code in your HTML.
```html
<script async src="https://umami-self-host-example.vercel.app/script.js" data-website-id="a477d142-f3d5-4514-8251-f9f538a2b28f"></script>
```

![The script you need to add in your HTML](/content/images/umami-tracking-code.jpg)


## track custom events

You can track custom events using `window.umami.track` or using HTML attributes: `data-umami-event`, `data-umami-event-****` for custom properties.
[See docs](https://umami.is/docs/track-events)

Here is a real-world example app with an increment tracker:
<iframe class="w-full" height="480" src="https://stackblitz.com/edit/vitejs-vite-fqrzhn?ctl=1&embed=1&file=src%2FApp.tsx"></iframe>


## Conclusion

And that's how to easily set up Umami Analytics in 10 minutes ! You can publicly access all the trackings of the stackblitz on my Umami instance: [https://umami-self-host-example.vercel.app](https://umami-self-host-example.vercel.app/share/le9BgW02hInXZhxR/umami-self-host-example)

![Analytics dashboard](/content/images/umami-final.jpg)