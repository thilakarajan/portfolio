import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/formatDate";

export const metadata: Metadata = {
  title: "Blog | Thilakarajan",
  description: "Thoughts on tech, projects, and things I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          Back
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mb-16 text-muted-foreground">
          Thoughts on tech, projects, and things I&apos;m learning.
        </p>

        {posts.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No posts yet. Stay tuned!
          </p>
        )}

        <div>
          {posts.map((post, index) => {
            const { month, year } = formatDate(post.date);
            return (
              <div key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block py-6">
                  <div className="flex gap-6">
                    <div className="flex w-14 shrink-0 flex-col items-center pt-0.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {month}
                      </span>
                      <span className="text-sm font-bold text-foreground">
                        {year}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <span className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                          &rarr;
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
                {index < posts.length - 1 && (
                  <hr className="border-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
