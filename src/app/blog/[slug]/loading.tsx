export default function SlugLoading() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 h-4 w-16 animate-pulse bg-muted" />
        <div className="mb-8 h-12 w-3/4 animate-pulse bg-muted" />
        <div className="mb-12 h-4 w-24 animate-pulse bg-muted" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-full animate-pulse bg-muted" />
          ))}
        </div>
      </div>
    </div>
  )
}
