// components/BlogPageClient.tsx
'use client'

import Link from "next/link"

type Blog = {
  _id: string;
  date: string | Date;
  category: string;
  readTime: string;
  title: string;
  link: string;
  description: string;
  tags?: string[];
};

export default function BlogPage({blogs}: {blogs: Blog[]}) {
  return (
    <div className="space-y-8">
      {blogs.map((blog) => (
        <div key={blog._id} className="hacker-card p-6">
          <div className="flex items-center text-sm mb-3 font-mono"
               style={{ color: 'var(--primary)' }}>
            <span>{new Date(blog.date).toDateString()}</span>
            <span className="mx-2" style={{ color: 'var(--muted-foreground)' }}>|</span>
            <span>{blog.category}</span>
            <span className="mx-2" style={{ color: 'var(--muted-foreground)' }}>|</span>
            <span>{blog.readTime}</span>
          </div>
          <h3 className="text-xl font-bold mb-3"
              style={{ color: 'var(--text)' }}>
            <Link href={blog.link} 
                  className="hover:text-accent transition-colors"
                  style={{ color: 'var(--text)' }}>
              {blog.title}
            </Link>
          </h3>
          <p className="mb-4"
             style={{ color: 'var(--text)' }}>
            {blog.description}
          </p>
          <div className="flex items-center justify-between">
            <Link href={blog.link} 
                  className="font-mono text-sm transition-colors"
                  style={{ color: 'var(--primary)' }}>
              <span style={{ color: 'var(--accent)' }}>[</span>read_more<span style={{ color: 'var(--accent)' }}>]</span>
            </Link>
            <span className="text-sm font-mono"
                  style={{ color: 'var(--muted-foreground)' }}>
              {blog.tags?.map((tag: string) => `#${tag}`).join(" ")}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}