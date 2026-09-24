# KAIROS — Private Experiences

Portfolio case site for an **AI Web Developer** interview: a full marketing + booking experience for a fictional private-experiences studio. Not affiliated with Fashion Atlas — an original demo of modern UI, intentional motion, and clean code.

## What’s included

- Full-bleed atmospheric hero with parallax (GPU-friendly transforms)
- Services catalog with one-click booking entry
- Multi-step booking flow (service → date/time → contact → confirmation)
- Process + space storytelling sections
- Responsive layout, reduced-motion support
- Static build ready for **GitHub Pages**

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43127](http://127.0.0.1:43127)

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

Live site: https://nazarlakusta.github.io/kairos-experiences/

1. Push to `main` — the workflow builds the site and publishes the `gh-pages` branch.
2. In the repo: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`** / **`/` (root)**
3. Wait ~1 minute for the site to update.

Local one-off deploy:

```bash
npm run deploy
```

Vite `base` is `/kairos-experiences/` for this project Pages URL.

## Interview talking points

- **Brand-first hero** — name dominates the first viewport; one CTA, one line of support.
- **Motion budget** — entrance stagger, scroll parallax, modal spring; transforms/opacity only.
- **Booking UX** — progressive disclosure, validation, success state, Escape/backdrop close.
- **Ship quality** — typed data model, accessible dialog, semantic sections, GH Pages path.

Built as a case study of shipping a complete slice with AI-assisted development (Cursor).
