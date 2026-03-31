import Link from "next/link";
import LatestPostPreview from "./LatestPostPreview";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-36 px-4 md:px-10"
    >
      <div className="container mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="section-marker mb-4">005 — Writings</div>
        <h2
          className="mb-16"
          style={{
            fontSize: 'clamp(40px, 4vw, 64px)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-1px',
            color: 'var(--foreground)',
          }}
        >
          Research<br />Notes
        </h2>

        {/* Latest post preview */}
        <LatestPostPreview />

        {/* View all link */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-4 text-[14px] tracking-[3px] uppercase transition-colors duration-300 hover:text-[var(--red)]"
            style={{ color: 'var(--white-dim)' }}
          >
            <span className="w-8 h-px" style={{ background: 'var(--trace-line)' }} />
            View All Articles
            <span className="w-8 h-px" style={{ background: 'var(--trace-line)' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}