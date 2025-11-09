import Link from "next/link";
import ProjectsPageServer from "./ProjectsPageServer";

export default function ProjectsSection() {
    return (
        <section id="projects" 
                 className="py-16 px-6 backdrop-blur-sm transition-colors"
                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8"
                    style={{ color: 'var(--text)' }}>
                    <span style={{ color: 'var(--accent)' }}></span> /projects
                </h2>
                <ProjectsPageServer limit={3}/>
            </div>
            <div className="text-center mt-12">
                <Link href="/projects" className="hacker-btn text-lg">
                    <i className="fas fa-book-open mr-2"></i>View All Projects 
                </Link>
            </div>
        </section>
    )
}