# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RESPIVER is a static marketing/informational site for a pulmonary medicine clinic in Veracruz, Mexico. It is a Next.js 14 app using the App Router, exported as a fully static site (`output: 'export'`) and deployed on Vercel.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Static export to /out (runs next build with output: 'export')
npm run start    # Serve the production build locally
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

### Routing
- `app/page.tsx` — home page (single-page layout with anchor navigation)
- `app/estudios/[slug]/page.tsx` — individual study detail pages, statically generated from `STUDIES` array via `generateStaticParams`
- `app/layout.tsx` — root layout: sets metadata, injects JSON-LD schema, loads Google Fonts, initializes theme

### Data layer
All study content lives in `lib/studies.ts` as a typed `STUDIES: Study[]` array — no external data fetching. Adding or editing a respiratory study means editing that array. The `Study` interface defines: `slug`, `name`, `category`, `categorySlug`, `tagline`, `description`, `howItWorks`, `parameters`, `indications`, `duration`, `preparation`, `clinicalSignificance`.

### Theme system
Dark mode is the default. Theme state is stored in `localStorage` under key `respiver-theme`. A blocking inline `<script>` in `layout.tsx` runs before first paint to apply the saved theme class and prevent FOUC. The `ThemeProvider` component (`components/ThemeProvider.tsx`) exposes `useTheme()` for reading and toggling.

### Styling
- Tailwind CSS with `darkMode: 'class'`
- All theme colors are CSS custom properties defined in `globals.css` on `:root` (light) and `.dark` (dark), **not** Tailwind color utilities directly. Use `var(--accent)`, `var(--bg)`, etc. for colors in components.
- `text-white` utilities in light mode are overridden to dark text via `!important` rules in `globals.css` — this is intentional and necessary since components are written for dark mode first.
- Three font families: `font-jakarta` (Plus Jakarta Sans, headings), `font-manrope` (Manrope, body), `font-space` (Space Grotesk, labels/badges). CSS variables: `--font-jakarta`, `--font-manrope`, `--font-space`.
- Utility classes `.text-gradient`, `.glow-accent`, `.card-surface` are defined in `globals.css` `@layer utilities`.

### Performance
- Below-fold sections use `next/dynamic` with skeleton loading placeholders in `app/page.tsx`
- `next.config.mjs` sets `images: { unoptimized: true }` (required for static export)
- Hero image (`/hero-respiratory.svg`) has a `<link rel="preload">` in the layout

### SEO / Schema
- `app/layout.tsx` injects a `MedicalClinic` JSON-LD schema
- `app/estudios/[slug]/page.tsx` injects a `MedicalTest` JSON-LD schema per study page
- `app/sitemap.ts` and `app/robots.ts` generate sitemap and robots.txt
- Canonical site URL: `https://respi-ver.vercel.app`

### Analytics
`@vercel/analytics` is integrated via `<Analytics />` in the root layout.
