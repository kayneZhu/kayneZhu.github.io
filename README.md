# Personal Site & Blog

A minimal personal website + blog built as a single-page app and deployed to
GitHub Pages via GitHub Actions.

- **Stack:** React + TypeScript + Vite + pnpm + Tailwind CSS + shadcn/ui
- **Design:** minimalist, reading-focused (inspired by the OpenAI blog), no
  unnecessary animations, aggressive code-splitting for performance.
- **Content:** post metadata lives in a manifest; post bodies are plain Markdown
  fetched **on demand** from a remote content repository, so articles never
  bloat the frontend bundle.

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages
├── public/
│   ├── 404.html                   # SPA deep-link redirect for GitHub Pages
│   └── content/                   # Sample content (local-dev fallback)
│       ├── index.json             # Post manifest
│       ├── posts/*.md             # Post bodies
│       └── assets/*               # Covers / images
├── src/
│   ├── components/                # UI + layout + shared components
│   │   ├── ui/                    # shadcn/ui primitives (button, badge)
│   │   └── layout/                # Header, Footer, Layout
│   ├── config/site.ts             # ← personalize name, bio, links here
│   ├── hooks/                     # use-theme, use-async
│   ├── lib/                       # content loader, utils
│   ├── pages/                     # Home, Blog (archive), Post, NotFound
│   ├── styles/globals.css         # Tailwind + theme tokens
│   └── types/post.ts              # Content protocol types
└── docs/CONTENT.md                # Blog authoring SOP + protocol spec
```

## Local development

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

Other scripts:

```bash
pnpm build      # typecheck + production build into dist/
pnpm preview    # preview the production build locally
pnpm lint       # eslint
```

By default the app reads content from the bundled `public/content/` folder so it
works with zero configuration. To point at a remote content repo, copy
`.env.example` to `.env` and set `VITE_CONTENT_BASE_URL`.

## Personalizing

Edit `src/config/site.ts` — name, role, bio, social links, and nav all live there.

## Writing posts

See [`docs/CONTENT.md`](docs/CONTENT.md) for the content protocol and the
step-by-step SOP for adding a new post.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. See the "GitHub setup" section below (or the
message from your assistant) for one-time repository configuration.
