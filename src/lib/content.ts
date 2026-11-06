import type { PostManifest, PostMeta } from "@/types/post";

/**
 * Base URL of the remote content repository.
 *
 * Configure via the `VITE_CONTENT_BASE_URL` env var (see `.env.example`).
 * When unset, we fall back to the `content/` folder shipped in `public/`,
 * so the site works out of the box during local development.
 *
 * The value is normalized to always end with a trailing slash.
 */
export function getContentBaseUrl(): string {
  const configured = import.meta.env.VITE_CONTENT_BASE_URL as string | undefined;
  const raw = configured && configured.trim().length > 0
    ? configured
    : `${import.meta.env.BASE_URL}content`;
  const withSlash = raw.endsWith("/") ? raw : `${raw}/`;
  // Anchor relative bases (e.g. "/content/") to the current origin so the
  // result is always an absolute URL usable as a base in `new URL()`.
  return new URL(withSlash, window.location.origin).toString();
}

/** Resolve a possibly-relative asset path (e.g. a cover image) to a full URL. */
export function resolveAsset(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) return undefined;
  if (/^(https?:)?\/\//.test(pathOrUrl) || pathOrUrl.startsWith("data:")) {
    return pathOrUrl;
  }
  const base = getContentBaseUrl();
  return new URL(pathOrUrl.replace(/^\//, ""), base).toString();
}

function isProd(): boolean {
  return import.meta.env.PROD;
}

let manifestCache: PostMeta[] | null = null;

/**
 * Fetch and cache the list of posts from the remote manifest.
 * Posts are sorted newest-first; drafts are removed in production builds.
 */
export async function fetchPosts(): Promise<PostMeta[]> {
  if (manifestCache) return manifestCache;

  const url = new URL("index.json", getContentBaseUrl()).toString();
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`Failed to load content manifest (${res.status}) from ${url}`);
  }

  const data = (await res.json()) as PostManifest;
  const posts = (data.posts ?? [])
    .filter((post) => (isProd() ? !post.draft : true))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  manifestCache = posts;
  return posts;
}

/** Look up a single post's metadata by slug. */
export async function fetchPostBySlug(slug: string): Promise<PostMeta | undefined> {
  const posts = await fetchPosts();
  return posts.find((post) => post.slug === slug);
}

/** Fetch the raw Markdown body for a post. */
export async function fetchPostBody(meta: PostMeta): Promise<string> {
  const contentPath = meta.content ?? `posts/${meta.slug}.md`;
  const url = resolveAsset(contentPath)!;
  const res = await fetch(url, { headers: { Accept: "text/markdown, text/plain" } });
  if (!res.ok) {
    throw new Error(`Failed to load post body (${res.status}) from ${url}`);
  }
  return res.text();
}
