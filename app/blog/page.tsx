// app/blog/page.tsx
import BlogPageServer from "@/components/BlogPageServer"

export default function Blog() {
  return (
    <section id="blog" className="min-h-screen py-16 px-6 border-t border-green-500/30 bg-black/70">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-green-100 mb-8">
          <span className="text-accent"></span> /blog
        </h2>
        
        {/* Show all posts here */}
        <BlogPageServer />
      </div>
    </section>
  )
}
