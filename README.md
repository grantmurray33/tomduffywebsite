# Tom Duffy CPA Website

Premium Next.js website for [Tom Duffy, CPA, P.A. & P.C.](https://www.tomduffycpa.com) — tax minimization, international tax, and Puerto Rico Act 60 advisory.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for correct canonical URLs during local development (defaults to production URL in metadata helper if unset).

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Production build               |
| `npm start`     | Run production server          |
| `npm run lint`  | Run Next.js lint               |

## Project structure

```
app/                    # Next.js App Router pages
  [slug]/               # Article pages (SEO-preserving root URLs)
  about/
  articles/             # Articles hub
  contact/
  services/
    [slug]/             # Individual service pages
components/             # Reusable UI (layout, articles, SEO)
content/
  articles/             # Article data (CMS-ready)
  services.ts           # Service definitions
  site.ts               # Firm copy and navigation
lib/                    # Articles helpers, metadata utilities
public/
render.yaml             # Render deployment blueprint
```

## Adding articles

1. Open `content/articles/data.ts`
2. Add a new entry using `defineArticle({ ... })`
3. Preserve the original slug from tomduffycpa.com for SEO
4. Set `contentStatus: 'published'` when full body text is migrated
5. Replace `content` array with paragraph/heading blocks (see existing entries)

## Deployment (Render)

1. Connect this repository to [Render](https://render.com)
2. Use the `render.yaml` blueprint or create a **Web Service**
3. Set environment variable: `NEXT_PUBLIC_SITE_URL=https://www.tomduffycpa.com`
4. Build: `npm install && npm run build`
5. Start: `npm start`

## SEO & redirects

- Article URLs preserved at root (e.g. `/statute-of-limitations`)
- Redirects: `/about-us` → `/about`, `/our-services/:slug` → `/services/:slug`
- JSON-LD for organization and articles
- Canonical URLs, Open Graph, and meta descriptions on all pages

## Content migration

Most articles are marked `needs_migration` with introductory excerpts from the live site. Paste full article bodies into `content/articles/data.ts` from the original site or PDFs. Do not invent legal or tax claims.
