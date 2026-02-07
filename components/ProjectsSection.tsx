import Link from "next/link";
import ProjectsPageServer from "./ProjectsPageServer";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative py-36 px-10"
        >
            <div className="container mx-auto max-w-[1200px]">
                {/* Section header */}
                <div className="section-marker mb-4">004 — Projects</div>
                <h2
                    className="mb-16"
                    style={{
                        fontSize: 'clamp(32px, 4vw, 56px)',
                        fontWeight: 300,
                        lineHeight: 1.1,
                        letterSpacing: '-1px',
                        color: 'var(--foreground)',
                    }}
                >
                    Selected<br />Works
                </h2>

                {/* Projects list */}
                <ProjectsPageServer limit={6} />

                {/* View all link */}
                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-4 text-[11px] tracking-[3px] uppercase transition-colors duration-300 hover:text-[var(--red)]"
                        style={{ color: 'var(--white-dim)' }}
                    >
                        <span className="w-8 h-px" style={{ background: 'var(--trace-line)' }} />
                        View All Projects
                        <span className="w-8 h-px" style={{ background: 'var(--trace-line)' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
}