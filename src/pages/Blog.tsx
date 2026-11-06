import { PostCard } from "@/components/PostCard";
import { EmptyState, ErrorState, LoadingState } from "@/components/states";
import { useAsync } from "@/hooks/use-async";
import { fetchPosts } from "@/lib/content";

export function Blog() {
  const posts = useAsync(fetchPosts, []);

  return (
    <div className="container max-w-3xl">
      <header className="py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 text-muted-foreground">
          Notes on engineering, systems, and things I&apos;m learning.
        </p>
      </header>

      <section className="pb-8">
        {posts.status === "loading" && <LoadingState />}
        {posts.status === "error" && <ErrorState error={posts.error} />}
        {posts.status === "success" &&
          (posts.data.length === 0 ? (
            <EmptyState label="No posts published yet." />
          ) : (
            <div className="border-t border-border/60">
              {posts.data.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ))}
      </section>
    </div>
  );
}
