---
title: "Getting Started with Next.js"
date: "2026-05-11"
excerpt: "A quick overview of what I learned building this portfolio with Next.js App Router, Tailwind CSS, and dark mode support."
---

I recently built this portfolio using Next.js and learned a few things along the way. Here's a quick rundown.

## What I Used

- **Next.js 16** with the App Router
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **next-themes** for dark/light mode

## Key Takeaways

1. The App Router makes file-based routing intuitive — pages, layouts, and nested routes are just folders and files.
2. Tailwind v4 uses `@import "tailwindcss"` instead of the old `@tailwind` directives.
3. Server Components reduce client-side JS by default — only add `"use client"` where interactivity is needed.
4. `params` is now a `Promise` that must be awaited in page components.

## Dark Mode

Using `next-themes` with Tailwind's class strategy was straightforward. The theme toggle persists across sessions and respects system preference by default.

Overall, Next.js continues to be a solid choice for full-stack React applications.
