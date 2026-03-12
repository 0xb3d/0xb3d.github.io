'use client';

import Link from "next/link";
import { useState } from "react";

type Post = {
  _id: string;
  date: string | Date;
  category: string;
  readTime: string;
  title: string;
  link: string;
  description: string;
  tags?: string[];
};

function formatRowDate(date: string | Date): string {
  const d = new Date(date);
  return `${d.toLocaleString('en-US', { month: 'short' })} ${d.getDate()}`;
}

export default function LatestPostPreviewClient({ featured, rest }: { featured: Post; rest: Post[] }) {
  const [featuredHovered, setFeaturedHovered] = useState(false);

  return (
    <div>
      {/* ── Featured latest post ── */}
      <Link
        href={featured.link}
        className="block mb-10 cursor-crosshair"
        onMouseEnter={() => setFeaturedHovered(true)}
        onMouseLeave={() => setFeaturedHovered(false)}
      >
        {/* Meta row */}
        <div
          className="flex items-center gap-3 mb-5 text-[10px] tracking-[2px] uppercase"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <span>
            {new Date(featured.date)
              .toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
              .toUpperCase()}
          </span>
          {featured.category && (
            <>
              <span style={{ color: 'var(--trace-line)' }}>·</span>
              <span style={{ color: 'var(--accent)' }}>{featured.category}</span>
            </>
          )}
          {featured.readTime && (
            <>
              <span style={{ color: 'var(--trace-line)' }}>·</span>
              <span>{featured.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          className="mb-4 transition-colors duration-300"
          style={{
            fontSize: 'clamp(22px, 3vw, 36px)',
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
            color: featuredHovered ? 'var(--accent)' : 'var(--foreground)',
          }}
        >
          {featured.title}
        </h3>

        {/* Description */}
        {featured.description && (
          <p
            className="mb-6 max-w-xl"
            style={{ fontSize: '14px', lineHeight: 1.8, fontWeight: 300, color: 'var(--muted-foreground)' }}
          >
            {featured.description}
          </p>
        )}

        {/* Read link */}
        <div
          className="flex items-center gap-2 text-[11px] tracking-[2px] uppercase transition-colors duration-300"
          style={{ color: featuredHovered ? 'var(--accent)' : 'var(--muted-foreground)' }}
        >
          Read Article
          <span
            className="transition-transform duration-300"
            style={{ transform: featuredHovered ? 'translate(2px, -2px)' : 'none' }}
          >
            ↗
          </span>
        </div>
      </Link>

      {/* ── Divider + compact rows ── */}
      {rest.length > 0 && (
        <>
          <div style={{ height: '1px', background: 'var(--trace-line)' }} />
          {rest.map(post => (
            <Link
              key={post._id}
              href={post.link}
              className="group flex items-start justify-between py-4 transition-all duration-200 cursor-crosshair"
              style={{ borderBottom: '1px solid var(--border-primary)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.paddingLeft = '8px';
                (e.currentTarget as HTMLElement).style.paddingRight = '8px';
                (e.currentTarget as HTMLElement).style.background = 'rgba(185, 28, 28, 0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.paddingLeft = '0';
                (e.currentTarget as HTMLElement).style.paddingRight = '0';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {/* Left: date + title */}
              <div className="flex items-start gap-3 min-w-0 mr-6">
                <span
                  className="text-[11px] tracking-[1px] shrink-0 tabular-nums pt-[2px]"
                  style={{ color: 'var(--muted-foreground)', minWidth: '48px' }}
                >
                  {formatRowDate(post.date)}
                </span>
                <span
                  className="shrink-0 pt-[2px]"
                  style={{ color: 'var(--muted-foreground)', fontSize: '13px' }}
                >
                  —
                </span>
                <span
                  className="text-[15px] leading-[1.4] break-words transition-colors duration-200 group-hover:text-[var(--accent)]"
                  style={{ color: 'var(--foreground)', wordBreak: 'break-word' }}
                >
                  {post.title}
                </span>
              </div>

              {/* Right: read time + arrow */}
              <div className="flex items-center gap-3 shrink-0 pt-[2px]">
                {post.readTime && (
                  <span
                    className="text-[10px] tracking-[1px] tabular-nums"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {post.readTime}
                  </span>
                )}
                <span
                  className="text-[14px] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}
