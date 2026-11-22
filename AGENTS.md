## Preprod

When you need to test changes against master, you can use netlify preprod: https://zigzag-preprod.netlify.app/

## Server code

Write `server/` code against `nuxt/server`, the server-agnostic API independent of h3 and Nitro: import `defineEventHandler`, `getQuery`, `createError`, `serverFetch`, `useSession` and the rest from `nuxt/server`. Nitro auto-imports are off, so every helper is an explicit import. Docs: https://nuxt.com/docs/getting-started/upgrade#moving-to-nuxtserver

- Set headers with `event.res.headers.set()` and return the body, instead of h3's `setResponseHeader` / `res.end()`.
- Cache a handler with `defineCachedEventHandler` from `nitropack/runtime` (`nuxt/server` has no cached handler), and import that handler's helpers (`getQuery`, `createError`) from `h3`, since `nuxt/server` helpers do not accept its event.
- Pass `status` / `statusText` to `createError`, not `statusCode` / `statusMessage`.
