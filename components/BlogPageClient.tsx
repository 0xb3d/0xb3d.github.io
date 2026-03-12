'use client';

import Link from "next/link";
import { useState, useMemo } from "react";

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

function formatRowDate(date: string | Date): string {
  const d = new Date(date);
  const month = d.toLocaleString('en-US', { month: 'short' });
  const day = d.getDate();
  return `${month} ${day}`;
}

function getYear(date: string | Date): number {
  return new Date(date).getFullYear();
}

export default function BlogPageClient({ blogs }: { blogs: Blog[] }) {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');

  // Derive unique categories and tags from all posts
  const allCategories = useMemo(() =>
    [...new Set(blogs.map(b => b.category).filter(Boolean))].sort(),
    [blogs]
  );
  const allTags = useMemo(() =>
    [...new Set(blogs.flatMap(b => b.tags ?? []))].sort(),
    [blogs]
  );

  // Toggle helpers
  function toggleCategory(cat: string) {
    setActiveCategories(prev => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  }
  function toggleTag(tag: string) {
    setActiveTags(prev => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  }
  function resetFilters() {
    setActiveCategories(new Set());
    setActiveTags(new Set());
    setSearch('');
  }

  // Filter posts
  const filtered = useMemo(() => {
    return blogs.filter(b => {
      if (activeCategories.size > 0 && !activeCategories.has(b.category)) return false;
      if (activeTags.size > 0 && ![...activeTags].every(t => b.tags?.includes(t))) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!b.title.toLowerCase().includes(q) && !b.description?.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [blogs, activeCategories, activeTags, search]);

  // Group by year
  const years = useMemo(() => {
    const grouped: Record<number, Blog[]> = {};
    for (const post of filtered) {
      const y = getYear(post.date);
      grouped[y] = [...(grouped[y] ?? []), post];
    }
    return Object.keys(grouped).map(Number).sort((a, b) => b - a);
  }, [filtered]);

  const groupedByYear = useMemo(() => {
    const map: Record<number, Blog[]> = {};
    for (const post of filtered) {
      const y = getYear(post.date);
      map[y] = [...(map[y] ?? []), post];
    }
    return map;
  }, [filtered]);

  const hasFilters = activeCategories.size > 0 || activeTags.size > 0 || search.trim().length > 0;

  return (
    <div>
      {/* ── Filter bar ── */}
      <div className="mb-12 space-y-4">

        {/* Search */}
        <div style={{ borderBottom: '1px solid var(--trace-line)', paddingBottom: '2px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span className="text-[10px] tracking-[2px] uppercase" style={{ color: 'var(--muted-foreground)' }}>⌕</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="bg-transparent outline-none text-[12px] tracking-[1px] w-48 placeholder:opacity-40"
            style={{ color: 'var(--foreground)', fontFamily: 'var(--font-mono, monospace)' }}
          />
        </div>

        {/* Category pills */}
        {allCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[9px] tracking-[2px] uppercase mr-1" style={{ color: 'var(--muted-foreground)' }}>Category</span>
            {allCategories.map(cat => {
              const isActive = activeCategories.has(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className="text-[9px] tracking-[2px] uppercase px-3 py-1 transition-all duration-200 cursor-crosshair"
                  style={{
                    border: '1px solid var(--border-primary)',
                    color: isActive ? '#fff' : 'var(--muted-foreground)',
                    background: isActive ? 'var(--accent)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--muted-foreground)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)';
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Tag pills */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[9px] tracking-[2px] uppercase mr-1" style={{ color: 'var(--muted-foreground)' }}>Tags</span>
            {allTags.map(tag => {
              const isActive = activeTags.has(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className="text-[9px] tracking-[2px] uppercase px-3 py-1 transition-all duration-200 cursor-crosshair"
                  style={{
                    border: '1px solid var(--border-primary)',
                    color: isActive ? '#fff' : 'var(--muted-foreground)',
                    background: isActive ? 'var(--accent)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--muted-foreground)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)';
                    }
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Timeline ── */}
      {years.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-[13px] tracking-[1px]" style={{ color: 'var(--muted-foreground)' }}>
            No articles match your filters.
          </p>
          {hasFilters && (
            <button
              onClick={resetFilters}
              className="mt-4 text-[11px] tracking-[2px] uppercase transition-colors duration-200 hover:text-[var(--accent)] cursor-crosshair"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-16">
          {years.map(year => (
            <div key={year}>
              {/* Year heading */}
              <div className="flex items-baseline gap-6 mb-2">
                <h3
                  style={{
                    fontSize: 'clamp(40px, 5vw, 72px)',
                    fontWeight: 300,
                    lineHeight: 1,
                    letterSpacing: '-2px',
                    color: 'var(--foreground)',
                    fontFamily: 'var(--font-jetbrains)',
                  }}
                >
                  {year}
                </h3>
                <span className="text-[10px] tracking-[2px] uppercase" style={{ color: 'var(--muted-foreground)' }}>
                  {groupedByYear[year].length} {groupedByYear[year].length === 1 ? 'article' : 'articles'}
                </span>
              </div>

              {/* Separator */}
              <div style={{ height: '1px', background: 'var(--trace-line)', marginBottom: '0' }} />

              {/* Post rows */}
              <div>
                {groupedByYear[year].map(post => (
                  <Link
                    key={post._id}
                    href={post.link}
                    className="group flex items-start justify-between py-4 transition-all duration-200 cursor-crosshair"
                    style={{
                      borderBottom: '1px solid var(--border-primary)',
                      color: 'var(--foreground)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(185, 28, 28, 0.08)';
                      (e.currentTarget as HTMLElement).style.paddingLeft = '8px';
                      (e.currentTarget as HTMLElement).style.paddingRight = '8px';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.paddingLeft = '0';
                      (e.currentTarget as HTMLElement).style.paddingRight = '0';
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
                      <span className="text-[13px] shrink-0 pt-[2px]" style={{ color: 'var(--muted-foreground)', margin: '0 2px' }}>—</span>
                      <span
                        className="text-[15px] leading-[1.4] break-words transition-colors duration-200 group-hover:text-[var(--accent)]"
                        style={{ color: 'var(--foreground)', wordBreak: 'break-word' }}
                      >
                        {post.title}
                      </span>
                    </div>

                    {/* Right: read time + arrow */}
                    <div className="flex items-start gap-3 shrink-0 pt-[2px]">
                      {post.readTime && (
                        <span className="text-[10px] tracking-[1px] tabular-nums" style={{ color: 'var(--muted-foreground)' }}>
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
