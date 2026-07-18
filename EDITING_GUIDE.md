# Vrikshya website editing guide

## Content

- Company services and project records: `app/lib/content.ts`
- Homepage copy and featured projects: `app/page.tsx`
- About page: `app/about/page.tsx`
- Contact details: `app/contact/page.tsx` and `app/components/SiteFooter.tsx`
- Enquiry email: `app/components/ContactForm.tsx`

Project records include the project name, category, location, status, service, cover image, gallery, description, and scope. Add a new record to the `projects` array to create its portfolio card and detail page automatically.

## Images and logo

- Main logo: `public/images/brand/vrikshya-logo.png`
- Browser icon: `public/favicon.png`
- Project images: `public/images/projects/`

To replace an image without changing code, use the same filename and keep the image reasonably optimized for the web. WebP is recommended for photographs and renders.

## UI and brand styling

- Global colors, typography, spacing, cards, galleries, and responsive rules: `app/globals.css`
- Navigation: `app/components/SiteHeader.tsx`
- Footer: `app/components/SiteFooter.tsx`

The main brand colors are CSS variables at the top of `app/globals.css`: `--deep`, `--forest`, `--terracotta`, `--sand`, `--stone`, and `--paper`.

## Preview and hosting

The site is hosted with ChatGPT Sites. Ask ChatGPT Work to update the checked-out site, preview it, and publish a checkpoint. Each published checkpoint updates the hosted website while keeping the project source private to the site owner unless access is changed.

Before publishing source changes locally, run:

```bash
npm run lint
```

