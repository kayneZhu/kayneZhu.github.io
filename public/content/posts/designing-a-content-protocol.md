A common trap with static blogs is bundling every post into the frontend build.
It works until you have a few hundred posts and every deploy ships all of them to
every visitor. This site avoids that with a tiny protocol.

## The contract

The frontend knows about a **content base URL**. Under it, two things exist:

1. `index.json` — a manifest listing every post's metadata.
2. `posts/<slug>.md` — one Markdown file per post, fetched only when a reader
   opens that post.

The manifest entry looks like this:

```json
{
  "slug": "designing-a-content-protocol",
  "title": "Designing a lightweight content protocol",
  "date": "2026-07-15",
  "summary": "…",
  "cover": "assets/content-protocol.svg",
  "tags": ["engineering"],
  "readingTime": 5
}
```

## Why separate the body

- The homepage and archive only ever need the **manifest**, which is small.
- A post body is fetched **once, on demand**, when someone actually reads it.
- Content can live in a **separate repository** entirely, so writing a post
  never touches the app's source or triggers a frontend rebuild.

## Adding a post

The whole flow is: write a Markdown file, add one entry to `index.json`, commit.
That's the entire SOP — no code changes required.
