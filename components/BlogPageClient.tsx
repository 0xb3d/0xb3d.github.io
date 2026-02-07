// components/BlogPageClient.tsx
'use client';

import Link from "next/link";

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

function formatDate(date: string | Date): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  return `${year} — ${month}`;
}

export default function BlogPageClient({ blogs }: { blogs: Blog[] }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ background: '', gap: '1px' }}
    >
      {blogs.map((blog) => (
        <Link
          key={blog._id}
          href={blog.link}
          className="group relative block p-12 transition-all duration-400 cursor-crosshair"
          style={{ background: 'var(--background)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(244, 128, 128, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--background)';
          }}
        >
          {/* Date + Category */}
          <div
            className="text-[10px] tracking-[2px] uppercase mb-4"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {formatDate(blog.date)} — <span style={{ color: 'var(--accent)' }}>{blog.category}</span>
          </div>

          {/* Title */}
          <h3
            className="text-[22px] leading-[1.3] mb-3 transition-colors duration-300"
            style={{ color: 'var(--foreground)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            {blog.title}
          </h3>

          {/* Description */}
          <p
            className="text-[12px] leading-[1.8] pr-8"
            style={{ color: 'var(--muted-foreground)', fontWeight: 300 }}
          >
            {blog.description}
          </p>

          {/* Arrow */}
          <span
            className="absolute bottom-12 right-12 text-[18px] transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: 'var(--border-primary)' }}
            ref={(el) => {
              if (!el) return;
              const parent = el.closest('.group');
              if (!parent) return;
              parent.addEventListener('mouseenter', () => {
                el.style.color = 'var(--accent)';
              });
              parent.addEventListener('mouseleave', () => {
                el.style.color = 'var(--border-primary)';
              });
            }}
          >
            ↗
          </span>
        </Link>
      ))}
    </div>
  );
}