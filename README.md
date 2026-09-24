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

1. Push this repo to GitHub.
2. Enable **Pages** → Source: **GitHub Actions** or deploy from `gh-pages` branch.
3. One-command deploy (creates `gh-pages` branch from `dist`):

```bash
npm run deploy
```

The Vite `base` is set to `./` so asset paths work for both user sites (`username.github.io`) and project sites (`username.github.io/repo-name`).

If you use a custom Actions workflow, build with `npm run build` and publish the `dist` folder.

## Interview talking points

- **Brand-first hero** — name dominates the first viewport; one CTA, one line of support.
- **Motion budget** — entrance stagger, scroll parallax, modal spring; transforms/opacity only.
- **Booking UX** — progressive disclosure, validation, success state, Escape/backdrop close.
- **Ship quality** — typed data model, accessible dialog, semantic sections, GH Pages path.

Built as a case study of shipping a complete slice with AI-assisted development (Cursor).
