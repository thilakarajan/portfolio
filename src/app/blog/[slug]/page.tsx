import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import LottieAnimation from "@/components/LottieAnimation";
import { readingAnimation } from "@/lib/animations";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Thilakarajan`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          Back
        </Link>

        <header className="mb-8">
          <LottieAnimation animationData={readingAnimation} className="w-10 h-10 mb-6 opacity-40" />
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{post.date}</p>
          <hr className="mt-6 border-border" />
        </header>

        <div className="text-sm leading-[1.8] text-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-border [&_a:hover]:decoration-foreground [&_p]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:mb-4 [&_ul]:pl-5 [&_ul]:list-disc [&_ol]:mb-4 [&_ol]:pl-5 [&_ol]:list-decimal [&_li]:mb-1 [&_code]:text-xs [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:mb-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:mb-4 [&_img]:rounded-lg [&_img]:mb-4">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
