'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
}

export default function BlogPreview({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="px-6 py-24 bg-muted/50">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
            <Link
              href="/blog"
              className="text-sm text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <p className="mb-12 text-muted-foreground">
            Thoughts on tech, projects, and things I&apos;m learning.
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              No posts yet. Stay tuned!
            </motion.p>
          )}
          {posts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md">
                  <h3 className="mb-1 text-lg font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-2 text-xs text-muted-foreground">{post.date}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
