'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-xs text-muted-foreground">
          Open to opportunities
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m{' '}
          <span className="text-primary">Thilakarajan</span>
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          Full Stack Engineer building reliable, quality-driven products with React, Node.js, and modern web technologies.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
