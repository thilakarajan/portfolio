'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { heroAnimation } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-[0.06] dark:opacity-[0.04] pointer-events-none">
        <Lottie animationData={heroAnimation} loop autoplay className="w-[500px] h-[500px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m{' '}
          <span>Thilakarajan</span>
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          Full Stack Engineer building reliable, quality-driven products with React, Node.js, and modern web technologies.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full border border-foreground px-6 py-2.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
