# Content protocol & authoring SOP

This blog separates **metadata** from **content** so that:

- The homepage and archive only load a small manifest.
- A post's body is fetched **once, on demand**, when a reader opens it.
- Content can live in a **separate repository** — writing a post never touches
  the app's source and never triggers a frontend rebuild.

## 1. The layout

The frontend is configured with a **content base URL** (`VITE_CONTENT_BASE_URL`).
Under that base, the following must exist:

```
<content-base>/
├── index.json            # the manifest (required)
├── posts/
│   └── <slug>.md         # one Markdown file per post
└── assets/               # images, covers, etc. (any structure you like)
```

During local development, if `VITE_CONTENT_BASE_URL` is unset, the base defaults
to the app's own `public/content/` folder — that's the sample content in this repo.

## 2. The manifest: `index.json`

```json
{
  "version": 1,
  "posts": [
    {
      "slug": "my-post",
      "title": "My post title",
      "date": "2026-07-20",
      "summary": "One or two sentences shown on cards and the post header.",
      "cover": "assets/my-post.jpg",
      "tags": ["engineering"],
      "readingTime": 5,
      "content": "posts/my-post.md",
      "draft": false
    }
  ]
}
```

### Field reference

| Field         | Required | Notes                                                                    |
| ------------- | -------- | ------------------------------------------------------------------------ |
| `slug`        | ✅       | URL-safe unique id. Route becomes `/blog/<slug>`.                        |
| `title`       | ✅       | Post title.                                                              |
| `date`        | ✅       | ISO 8601 date (`YYYY-MM-DD`). Used for sorting (newest first).           |
| `summary`     | ➖       | Teaser text on the archive and post header.                              |
| `cover`       | ➖       | Absolute URL, or path relative to the content base.                      |
| `tags`        | ➖       | Array of strings.                                                        |
| `readingTime` | ➖       | Minutes; shown on the post header if present.                            |
| `content`     | ➖       | Path to the Markdown body. Defaults to `posts/<slug>.md` when omitted.   |
| `draft`       | ➖       | `true` hides the post in production; still visible in local dev.         |

Relative `cover` / image paths are resolved against the content base
automatically, so store images anywhere under it and reference them relatively.

## 3. The body: `posts/<slug>.md`

Plain Markdown (GitHub-Flavored Markdown supported: tables, task lists,
strikethrough, autolinks). Raw HTML is allowed but use it sparingly. Images can
use relative paths (e.g. `![diagram](assets/diagram.png)`) — they resolve against
the content base.

Do **not** put the title as an `<h1>` at the top of the body; the title comes
from the manifest and is rendered by the post header. Start the body with your
intro paragraph and use `##` for section headings.

---

## SOP: Add a new post

1. **Write the body.** Create `posts/<slug>.md` in the content location.
2. **Add assets (optional).** Drop a cover / images under `assets/`.
3. **Register it.** Add one object to the `posts` array in `index.json` with at
   least `slug`, `title`, and `date`. Point `cover` / `content` at your files.
4. **Publish.**
   - If content lives in a **separate repo**: commit & push there. The change is
     live as soon as it's reachable at the content base URL (no app rebuild).
   - If content lives in this repo's `public/content/`: commit & push to `main`;
     the deploy workflow republishes the site.
5. **Verify.** Open `/blog` — the post should appear at the top (newest first),
   and `/blog/<slug>` should render the body.

### Draft workflow

Set `"draft": true` while writing. Drafts are visible in local dev (`pnpm dev`)
but hidden from the production build. Flip to `false` (or remove it) to publish.

## Where should content live?

Two supported options:

1. **Separate content repo (recommended for frequent writing).**
   Put `index.json`, `posts/`, and `assets/` in a dedicated repo. Then set:
   - Raw files: `VITE_CONTENT_BASE_URL=https://raw.githubusercontent.com/<user>/<repo>/main`
   - Or its own Pages site: `VITE_CONTENT_BASE_URL=https://<user>.github.io/<repo>`

2. **In this repo under `public/content/` (simplest to start).**
   No env var needed. Posts ship as static files with the site. Downside: adding
   a post requires an app redeploy.

Switching later is just a matter of moving the `content/` files and setting the
env var — the protocol is identical.
