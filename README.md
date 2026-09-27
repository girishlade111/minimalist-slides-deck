# Minimalist Slides Deck

A minimalist, keyboard-navigable slide deck presentation on **"Software 3.0 — The Era of LLM-Programmable Systems"** (inspired by Andrej Karpathy's YC 2024 talk). Stark black-and-white aesthetic, mono/display typography, Lucide icons, and smooth slide transitions — a clean template for technical talks and essay-style presentations.

## Features

- **Slide deck navigation** — previous/next chevron controls, clickable progress, and keyboard navigation (arrow keys)
- **"Software 3.0" slide content** — pre-built slides covering the evolution of software (1.0 traditional code → 2.0 neural networks → 3.0 LLM-programmable systems), with quotes, grids, and icon callouts
- **Minimalist design system** — black/white palette, mono accents, generous whitespace; each slide is a composable `<Slide>` with title, subtitle, icon, and custom content
- **Reset control** — one-click return to the title slide
- **Data-driven slides** — all slide content lives in a single `slides` array in `components/slide-deck.tsx`, so adding a slide is just appending an object
- **Dark mode theming** — `next-themes` provider with shadcn/ui token-based colors
- **Responsive** — adapts from mobile to desktop

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, static export via `output: "export"`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4 + shadcn/ui + Radix UI primitives
- **Icons:** Lucide React
- **Theming:** next-themes

## Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm

### Install & Run

```bash
# install dependencies
pnpm install
# or: npm install

# start the dev server
pnpm dev
```

Open [http://localhost:3000/minimalist-slides-deck](http://localhost:3000/minimalist-slides-deck) in your browser.

### Build (static export)

```bash
pnpm build
```

This produces a fully static site in `out/`, ready to host anywhere (GitHub Pages, Cloudflare Pages, Netlify, Vercel).

## Project Structure

```
├── app/
│   ├── page.tsx          # Home page: renders <SlideDeck />
│   ├── layout.tsx        # Root layout, fonts, metadata, theme provider
│   └── globals.css       # Tailwind + theme tokens
├── components/
│   ├── slide-deck.tsx    # Deck logic: navigation, keyboard, progress, all slide content
│   ├── slide.tsx         # <Slide> presentational component (title/subtitle/icon/content)
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui primitives
├── lib/
│   └── utils.ts          # clsx + tailwind-merge helper
├── tailwind.config.ts    # Tailwind v3 config
├── next.config.mjs       # output: "export", images unoptimized
└── components.json       # shadcn/ui config
```

## Environment Variables

None. This is a pure UI demo — no backend, no API keys, no third-party services.

## Deployment Notes

- The site is a **static export** (`output: "export"` in `next.config.mjs`) — no server, no API routes, no server actions required.
- **GitHub Pages:** `basePath: "/minimalist-slides-deck"` is set for the project-pages subpath (`https://girishlade111.github.io/minimalist-slides-deck/`). **Remove `basePath` when deploying to a root domain or Vercel.**
- **Vercel:** deploy directly — no changes needed beyond removing `basePath` (originally generated on [v0.app](https://v0.app)).
- Images are marked `unoptimized: true` so `next/image` optimization is skipped during static export.

## Notes

- TypeScript and ESLint errors are ignored during builds (`ignoreBuildErrors` / `ignoreDuringBuilds`) — this matches the original v0.app project settings.
- To author your own deck, edit the `slides` array in `components/slide-deck.tsx` — each slide takes `id`, `title`, `subtitle`, `icon`, and arbitrary `content` JSX.

---

Built by Girish Lade — https://ladestack.in
