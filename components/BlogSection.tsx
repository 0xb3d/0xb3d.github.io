import Link from "next/link";
import BlogPageServer from "./BlogPageServer";

export default function BlogSection() {
  return (
    <section id="blog" 
             className="py-16 px-6 border-t transition-colors"
             style={{ 
               backgroundColor: 'rgba(0, 0, 0, 0.05)',
               borderColor: 'var(--border-primary)'
             }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8"
            style={{ color: 'var(--text)' }}>
          <span style={{ color: 'var(--accent)' }}></span> /blog
        </h2>
        
        {/* Show only 3 posts on homepage */}
        <BlogPageServer limit={3} />

        <div className="text-center mt-12">
          <Link href="/blog" className="hacker-btn text-lg">
            <i className="fas fa-book-open mr-2"></i>View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}