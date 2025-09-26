import ProjectsPageServer from "@/components/ProjectsPageServer";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen py-16 px-6 bg-black/70">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold text-green-100 mb-8">
                    <span className="text-accent"></span> /projects
                </h2>
                <ProjectsPageServer />
            </div>
        </section>
    );
}

