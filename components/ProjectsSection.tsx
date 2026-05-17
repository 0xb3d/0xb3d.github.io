import Link from "next/link";
import ProjectsPageServer from "./ProjectsPageServer";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative py-36 px-4 md:px-10"
        >
            <div className="container mx-auto max-w-[1200px]">
                {/* Section header */}
                <div className="section-marker mb-4">004 — Projects</div>
                <h2
                    className="mb-4"
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

                {/* Tagline */}
                <p className="mb-10 text-[12px] tracking-[2px]  uppercase"
                   style={{ color: 'var(--white-dim)', maxWidth: '820px' }}
                >
                    - Selected builds from the lab.
                </p>

                {/* Projects list */}
                <ProjectsPageServer limit={6} />

                {/* View all link */}
                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-4 text-[14px] tracking-[3px] uppercase transition-colors duration-300 text-[var(--white-dim)] hover:text-[var(--red)]"
                    >
                        <span className="w-8 h-px transition-colors duration-300 bg-[var(--trace-line)] group-hover:bg-[var(--red)]" />
                        View All Projects
                        <span className="w-8 h-px transition-colors duration-300 bg-[var(--trace-line)] group-hover:bg-[var(--red)]" />
                    </Link>
                </div>
            </div>
        </section>
    );
}