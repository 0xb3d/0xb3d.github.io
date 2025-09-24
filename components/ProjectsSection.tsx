import Link from "next/link";
import ProjectsPage from "./ProjectsPage";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16 px-6 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold text-green-100 mb-8">
                    <span className="text-accent"></span> /projects
                </h2>
                <ProjectsPage />
            </div>
            <div className="text-center mt-12">
                <Link href="/projects" className="hacker-btn font-mono">
                    <i className="fas fa-book-open mr-2"></i>View All Projects 
                </Link>
            </div>
        </section>
    )
}