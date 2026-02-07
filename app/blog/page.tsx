// app/blog/page.tsx
import BlogPageServer from "@/components/BlogPageServer"

export const revalidate = 120

export default function Blog() {
  return (
    <section id="blog"
      className="min-h-screen py-16 px-6 border-t transition-colors"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: 'var(--border-primary)'
      }}>
      <div className="container mx-auto max-w-4xl">

        {/* Section header */}
        <div className="section-marker mb-4">004 — Writings</div>
        <h2
          className="mb-16"
          style={{
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-1px',
            color: 'var(--foreground)',
          }}
        >
          Research<br />Notes
        </h2>

        {/* Show all posts here */}
        <BlogPageServer />
      </div>
    </section>
  )
}