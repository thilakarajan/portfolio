import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Thilakarajan",
  description: "Thoughts on tech, projects, and things I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mb-12 text-muted-foreground">
          Thoughts on tech, projects, and things I&apos;m learning.
        </p>

        {posts.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No posts yet. Stay tuned!
          </p>
        )}

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <h2 className="mb-1 text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="mb-2 text-xs text-muted-foreground">{post.date}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
