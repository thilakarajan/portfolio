'use client'

export default function SlugError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24 text-center">
      <h2 className="text-xl font-bold tracking-tight">Something went wrong</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Something went wrong. Please try again.
      </p>
      {error.digest && (
        <p className="mt-1 text-xs text-muted-foreground">Error code: {error.digest}</p>
      )}
      <button
        onClick={reset}
        className="mt-4 text-sm font-medium border-b border-border hover:border-foreground transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
