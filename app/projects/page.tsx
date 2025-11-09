import ProjectsPageServer from "@/components/ProjectsPageServer";

export default function Projects() {
    return (
        <section id="projects" 
                 className="min-h-screen py-16 px-6 transition-colors"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8"
                    style={{ color: 'var(--text)' }}>
                    <span style={{ color: 'var(--accent)' }}></span> /projects
                </h2>
                <ProjectsPageServer />
            </div>
        </section>
    );
}