I finally put up a small corner of the internet that's mine. No feed, no
algorithm — just a homepage and a place to write things down.

## Why bother

Writing forces clarity. When I have to explain a system end to end, the gaps in
my own understanding show up fast. A blog is a low-stakes way to keep doing that.

A few things I wanted from the setup:

- **Fast.** Minimal JavaScript, no heavy animations, content that loads quickly.
- **Simple to publish.** Adding a post shouldn't require a rebuild-the-world ritual.
- **Cheap to host.** Static files on GitHub Pages, deployed by CI.

## How it works

The site is a small React + TypeScript SPA. Post *metadata* lives in a manifest,
while each post's *body* is plain Markdown fetched on demand — so the articles
never bloat the frontend bundle.

> If you're reading this, the pipeline works.

More on the content protocol in the next post.
