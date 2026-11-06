import { memo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { resolveAsset } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ProseProps {
  children: string;
  className?: string;
}

/**
 * Renders Markdown post bodies with a clean, reading-focused layout.
 * Relative image sources are resolved against the content base so posts can
 * reference assets stored alongside them in the remote content repo.
 */
function ProseImpl({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-neutral max-w-none dark:prose-invert",
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-p:leading-relaxed prose-img:rounded-lg prose-pre:rounded-lg",
        "prose-a:underline-offset-4",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          img: ({ src, alt, ...props }) => (
            <img src={resolveAsset(src as string)} alt={alt ?? ""} loading="lazy" {...props} />
          ),
          a: ({ href, children, ...props }) => {
            const external = typeof href === "string" && /^https?:\/\//.test(href);
            return (
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

export const Prose = memo(ProseImpl);
