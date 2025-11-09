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
        <h2 className="text-2xl md:text-3xl font-bold mb-8"
            style={{ color: 'var(--text)' }}>
          <span style={{ color: 'var(--accent)' }}></span> /blog
        </h2>
        
        {/* Show all posts here */}
        <BlogPageServer />
      </div>
    </section>
  )
}