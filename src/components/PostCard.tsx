import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { resolveAsset } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/types/post";

interface PostCardProps {
  post: PostMeta;
}

/** Archive list item — an OpenAI-news-style row with an optional cover thumbnail. */
export function PostCard({ post }: PostCardProps) {
  const cover = resolveAsset(post.cover);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group grid grid-cols-1 gap-4 border-b border-border/60 py-8 sm:grid-cols-[1fr_200px] sm:gap-8"
    >
      <div className="flex flex-col">
        <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags?.slice(0, 1).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-muted-foreground">
          {post.title}
        </h3>

        {post.summary && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {post.summary}
          </p>
        )}
      </div>

      {cover && (
        <div className="order-first overflow-hidden rounded-lg border border-border/60 bg-muted sm:order-none">
          <img
            src={cover}
            alt=""
            loading="lazy"
            className="aspect-[16/10] h-full w-full object-cover"
          />
        </div>
      )}
    </Link>
  );
}
