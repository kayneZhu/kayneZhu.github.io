/**
 * Metadata describing a single blog post.
 *
 * This is the contract between the frontend and the remote content repository.
 * The remote repo publishes an `index.json` manifest (see {@link PostManifest})
 * plus one Markdown file per post. Post bodies are fetched on demand so they are
 * never bundled into the frontend build.
 */
export interface PostMeta {
  /** URL-safe unique id. Used in routes: `/blog/:slug`. */
  slug: string;
  /** Human-readable title. */
  title: string;
  /** Publish date as ISO 8601 (e.g. "2026-07-20"). */
  date: string;
  /** One or two sentence teaser shown on cards and post header. */
  summary?: string;
  /**
   * Cover image. Either an absolute URL or a path relative to the content base.
   * Resolved via `resolveAsset()`.
   */
  cover?: string;
  /** Free-form tags/topics. */
  tags?: string[];
  /**
   * Path to the Markdown body, relative to the content base.
   * Defaults to `posts/<slug>.md` when omitted.
   */
  content?: string;
  /** Estimated reading time in minutes. Optional; shown if present. */
  readingTime?: number;
  /** When true, the post is hidden in production builds. */
  draft?: boolean;
}

/** Shape of the remote `index.json` manifest. */
export interface PostManifest {
  /** Schema version, for forward compatibility. */
  version: number;
  posts: PostMeta[];
}
