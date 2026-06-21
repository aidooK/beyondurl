# BeyondURL — Agency Website

Next.js site for BeyondURL: Home, Work, Services, About, Contact.

## Before you deploy — 2 things to check

1. **FutureFinder's live URL** — open `lib/sites.ts` and replace the
   placeholder with FutureFinder's real domain. SPE Ghana is already set to
   `https://www.speghana.com`, but double-check that's still correct.
2. **Contact form** — right now, "Send your request" opens the visitor's
   email app with a prefilled message to `hello@beyondurl.com`. That works
   with zero setup, but it depends on the visitor having an email app
   configured (which not everyone does on mobile). Once you want a true
   in-page form, the simplest upgrade is a free form backend like
   [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io) —
   swap the `handleSubmit` function in `components/ContactForm.tsx` for a
   `fetch()` call to their endpoint. Happy to wire that up once you've
   picked one.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Cloudflare Pages (via GitHub)

1. Push this project to a GitHub repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, and select the repo.
3. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output directory: `.vercel/output/static`
4. Deploy. Every push to your main branch will redeploy automatically.

Once `hello@beyondurl.com` is live on Zoho, point your domain's MX/DNS
records there, and connect `beyondurl.com` to this Pages project under
**Custom domains**.

## Project structure

```
app/            Pages (Home, Work, Services, About, Contact) — App Router
components/     Reusable UI (Navbar, Footer, cards, contact form, icons)
lib/sites.ts    External case-study links + contact email, in one place
```

## Brand reference

| Token       | Value     |
| ----------- | --------- |
| Teal        | `#1B4D6B` |
| Amber       | `#F5A623` |
| Background  | `#F9F9F7` |
| Charcoal    | `#1C1C1E` |
| Headings    | Plus Jakarta Sans |
| Body        | Inter |

Colors and fonts are defined once in `app/globals.css` — change them there
and they update sitewide.
