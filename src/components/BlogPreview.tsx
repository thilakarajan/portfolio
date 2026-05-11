'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'

type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
}

export default function BlogPreview({ posts }: { posts: Post[] }) {
  return (
    <section id="blog" className="px-6 py-24">
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
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <p className="mb-12 text-muted-foreground">
            Thoughts on tech, projects, and things I&apos;m learning.
          </p>
        </motion.div>

        <div>
          {posts.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No posts yet. Stay tuned!
            </p>
          )}
          {posts.slice(0, 3).map((post, index) => {
            const { month, year } = formatDate(post.date)
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block py-5">
                  <div className="flex gap-5">
                    <div className="flex w-12 shrink-0 flex-col pt-0.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {month}
                      </span>
                      <span className="text-sm font-bold text-foreground">
                        {year}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold group-hover:text-foreground transition-colors">
                          {post.title}
                        </h3>
                        <span className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                          &rarr;
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
                {index < Math.min(posts.length, 3) - 1 && (
                  <hr className="border-border" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
