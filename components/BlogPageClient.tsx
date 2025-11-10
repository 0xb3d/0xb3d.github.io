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

export default function BlogPage({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="space-y-8">
      {blogs.map((blog) => (
        <div key={blog._id} className="hacker-card p-6 rounded-lg">
          <div className="flex items-center text-sm mb-3 font-mono"
            style={{ color: 'var(--muted-foreground)' }}>
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
          <div className="flex items-center gap-22">
            <Link href={blog.link}
              className="font-mono border rounded-lg px-4 py-1 hover:text-[var(--background)] hover:bg-[var(--foreground)] text-sm transition-colors">
              Read
            </Link>
            <span className="text-sm font-mono flex-1 sm:flex-initial sm:text-right"
              style={{ color: 'var(--muted-foreground)' }}>
              {blog.tags?.map((tag: string) => `#${tag}`).join(" ")}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}