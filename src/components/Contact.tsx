'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { contactAnimation } from '@/lib/animations'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!
if (!FORMSPREE_ENDPOINT) throw new Error('NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set')

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded with ${res.status}`)
      setSubmitted(true)
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mb-12 text-muted-foreground">
            Have a question or want to work together? Send me a message.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Lottie animationData={contactAnimation} loop autoplay className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Thanks for reaching out!</p>
            <p className="mt-1 text-sm text-muted-foreground">
              I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <Lottie animationData={contactAnimation} loop autoplay className="w-12 h-12 mx-auto mb-2 opacity-30" />
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full border-b border-border bg-transparent px-0 py-2 text-sm outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={254}
                  className="w-full border-b border-border bg-transparent px-0 py-2 text-sm outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={5000}
                className="w-full border-b border-border bg-transparent px-0 py-2 text-sm outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>
            {error && (
              <p className="text-sm text-muted-foreground">{error}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full border border-foreground px-6 py-2.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-30"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}
