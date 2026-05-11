'use client'

import Link from 'next/link'
import LottieAnimation from '@/components/LottieAnimation'
import { notFoundAnimation } from '@/lib/animations'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <LottieAnimation animationData={notFoundAnimation} className="w-32 h-32 mb-6 opacity-30" />
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <p className="mt-2 text-muted-foreground">
        This page doesn&apos;t exist.
      </p>
      <Link href="/" className="mt-6 text-sm font-medium text-foreground border-b border-border hover:border-foreground transition-colors">
        Go home
      </Link>
    </div>
  )
}
