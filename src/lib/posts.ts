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
    return new Date(`${monthYear[1]} 1, ${monthYear[2]}`);
  }
  return new Date(dateStr);
}

let cachedPosts: Omit<Post, 'content'>[] | null = null
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
      const { data } = matter(fileContents)

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

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
    }
  } catch {
    return null
  }
}
