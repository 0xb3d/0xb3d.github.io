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

function CornerTicks() {
  return (
    <>
      {(['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'] as const).map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-4 h-4 z-20 pointer-events-none`}>
          <div className={`absolute ${pos} w-full h-px`} style={{ background: 'var(--accent)' }} />
          <div className={`absolute ${pos} h-full w-px`} style={{ background: 'var(--accent)' }} />
        </div>
      ))}
    </>
  );
}

export default function LatestPostPreviewClient({ featured, rest }: { featured: Post; rest: Post[] }) {
  const [featuredHovered, setFeaturedHovered] = useState(false);

  return (
    <div>
      {/* ── Featured latest post ── */}
      <Link
        href={featured.link}
        className="relative block cursor-crosshair overflow-hidden"
        style={{ border: '1px solid var(--border-primary)' }}
        onMouseEnter={() => setFeaturedHovered(true)}
        onMouseLeave={() => setFeaturedHovered(false)}
      >
        <CornerTicks />

        <div className="px-8 py-8 md:px-10 md:py-10">
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
        </div>
      </Link>

      {/* ── Compact rows ── */}
      {rest.length > 0 && (
        <div style={{ border: '1px solid var(--border-primary)', borderTop: 'none' }}>
          {rest.map(post => (
            <Link
              key={post._id}
              href={post.link}
              className="group flex items-stretch cursor-crosshair transition-all duration-200"
              style={{ borderTop: '1px solid var(--border-primary)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(185, 28, 28, 0.06)';
                (el.querySelector('.accent-bar') as HTMLElement | null)?.style.setProperty('background', 'var(--accent)');
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                (el.querySelector('.accent-bar') as HTMLElement | null)?.style.setProperty('background', 'var(--border-primary)');
              }}
            >
              {/* Left accent bar */}
              <div
                className="accent-bar w-[2px] flex-shrink-0 transition-colors duration-200"
                style={{ background: 'var(--border-primary)' }}
              />

              {/* Content */}
              <div className="flex-1 flex items-start justify-between gap-4 py-4 px-5 md:px-7 min-w-0">
                {/* Stacked: meta + title */}
                <div className="flex flex-col gap-1 min-w-0">
                  <div
                    className="flex items-center gap-3 text-[10px] tracking-[2px] uppercase"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <span className="tabular-nums">{formatRowDate(post.date)}</span>
                    {post.readTime && (
                      <>
                        <span style={{ color: 'var(--border-primary)' }}>·</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                  <span
                    className="text-[15px] leading-[1.4] transition-colors duration-200 group-hover:text-[var(--accent)]"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {post.title}
                  </span>
                </div>

                {/* Arrow */}
                <span
                  className="text-[14px] shrink-0 pt-5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
