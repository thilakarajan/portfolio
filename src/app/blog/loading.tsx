export default function BlogLoading() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 h-8 w-24 animate-pulse rounded bg-muted" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-6 h-24 animate-pulse bg-muted" />
        ))}
      </div>
    </div>
  )
}
