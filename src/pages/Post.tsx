import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Prose } from "@/components/Prose";
import { Badge } from "@/components/ui/badge";
import { ErrorState, LoadingState } from "@/components/states";
import { useAsync } from "@/hooks/use-async";
import { fetchPostBody, fetchPostBySlug, resolveAsset } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/types/post";
import { NotFound } from "./NotFound";

interface LoadedPost {
  meta: PostMeta;
  body: string;
}

export function Post() {
  const { slug = "" } = useParams();

  const load = useCallback(async (): Promise<LoadedPost | null> => {
    const meta = await fetchPostBySlug(slug);
    if (!meta) return null;
    const body = await fetchPostBody(meta);
    return { meta, body };
  }, [slug]);

  const state = useAsync(load, [slug]);

  if (state.status === "loading") {
    return (
      <div className="container">
        <LoadingState />
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="container">
        <ErrorState error={state.error} />
      </div>
    );
  }

  if (!state.data) {
    return <NotFound />;
  }

  const { meta, body } = state.data;
  const cover = resolveAsset(meta.cover);

  return (
    <article className="container max-w-prose py-12 sm:py-16">
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Blog
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          {meta.readingTime && <span>· {meta.readingTime} min read</span>}
        </div>

        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {meta.title}
        </h1>

        {meta.summary && (
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{meta.summary}</p>
        )}

        {meta.tags && meta.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </header>

      {cover && (
        <img
          src={cover}
          alt=""
          className="mt-10 aspect-[16/9] w-full rounded-lg border border-border/60 object-cover"
        />
      )}

      <div className="mt-10">
        <Prose>{body}</Prose>
      </div>
    </article>
  );
}
