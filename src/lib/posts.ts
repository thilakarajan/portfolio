import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

function parseDate(dateStr: string): Date {
  const monthYear = dateStr.match(/^(\w+)\s+(\d{4})$/);
  if (monthYear) {
    const month = new Date(`${monthYear[1]} 1, 2000`).getMonth()
    if (!Number.isNaN(month)) {
      return new Date(Number(monthYear[2]), month, 1)
    }
  }

  const ymd = dateStr.match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?$/)
  if (ymd) {
    const year = Number(ymd[1])
    const month = Number(ymd[2]) || 1
    const day = Number(ymd[3]) || 1
    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      return new Date(year, month - 1, day)
    }
  }

  return new Date(NaN)
}

const RAW_HTML_RE = /<\/?[a-z][^>]*>/i

function assertNoRawHtml(content: string, slug: string): void {
  if (RAW_HTML_RE.test(content)) {
    throw new Error(
      `Post "${slug}" contains raw HTML/JSX, which is not allowed. Remove any raw <tag> markup from content/blog/${slug}.md.`
    )
  }
}

let cachedPosts: Omit<Post, 'content'>[] | null = null
let cachedBodies: Map<string, string> | null = null
let cacheTime = 0
const CACHE_TTL = 60_000

export function getAllPosts(): Omit<Post, 'content'>[] {
  const now = Date.now()
  if (cachedPosts && now - cacheTime < CACHE_TTL) {
    return cachedPosts
  }

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter((fn) => fn.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      assertNoRawHtml(content, slug)

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        excerpt: data.excerpt || '',
      }
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date)
      const dateB = parseDate(b.date)
      return dateB.getTime() - dateA.getTime()
    })

  cachedPosts = posts
  cacheTime = now
  return posts
}

export function getPostBySlug(slug: string): Post | null {
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
    return null
  }

  const now = Date.now()
  const listCache = cachedPosts
  const bodiesCache = cachedBodies
  const cacheValid = Boolean(
    listCache && bodiesCache && now - cacheTime < CACHE_TTL
  )

  if (cacheValid && listCache && bodiesCache) {
    const cached = listCache.find((post) => post.slug === slug)
    const body = bodiesCache.get(slug)
    if (cached && body !== undefined) {
      return { ...cached, content: body }
    }
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    assertNoRawHtml(content, slug)

    const post: Post = {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
    }

    if (bodiesCache) {
      bodiesCache.set(slug, content)
    } else {
      cachedBodies = new Map([[slug, content]])
    }

    return post
  } catch {
    return null
  }
}
