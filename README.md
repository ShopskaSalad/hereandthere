# Between Borders

A minimalist Astro diary for Kamil Akin's storytelling and Toastmasters contest journey.

## Local development

```bash
npm install
npm run dev
```

The site is configured with the GitHub Pages base path `/hereandthere/`. Astro's development server handles that base automatically.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Type-check Astro files |
| `npm run build` | Validate and create the production build |
| `npm run preview` | Preview the production build |

## Adding a diary entry

Create a Markdown file in `src/content/diary/`:

```md
---
title: "Entry title"
description: "A short summary."
pubDate: 2026-10-24
tags: ["story craft"]
featured: false
draft: false
---

Your note begins here.
```

Draft entries are excluded from pages and the RSS feed.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site after changes reach `main`.

Expected public URL:

<https://shopskasalad.github.io/hereandthere/>

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions** once. GitHub then uses the included workflow for future deployments.

## Analytics

The site supports privacy-friendly [Umami](https://umami.is/) analytics. Tracking is disabled unless a website ID is supplied.

Add these under **Settings → Secrets and variables → Actions → Variables**:

| Variable | Value |
| --- | --- |
| `PUBLIC_UMAMI_WEBSITE_ID` | The website ID from the Umami dashboard |
| `PUBLIC_UMAMI_SCRIPT_URL` | `https://cloud.umami.is/script.js` for Umami Cloud |

No analytics token is required in the browser. The integration does not load any analytics script when the website ID is absent.

## Included features

- Responsive minimalist design
- Astro content collection for diary entries
- About page and introductory posts
- RSS feed and generated sitemap
- Open Graph and X social cards
- Accessible navigation and reduced-motion support
- GitHub Pages deployment workflow
- Optional Umami analytics
