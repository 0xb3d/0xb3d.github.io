import ProjectsPageServer from "@/components/ProjectsPageServer";

export const revalidate = 120

export default function Projects() {
    return (
        <section id="projects"
            className="min-h-screen py-16 px-6 transition-colors"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <div className="container mx-auto max-w-6xl">
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
                <ProjectsPageServer />
            </div>
        </section>
    );
}