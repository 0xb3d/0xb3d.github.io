import Link from "next/link";
import projects from "../data/projects"; // adjust path if needed

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="hacker-card group">
          <div className="h-48 bg-green-900/20 flex items-center justify-center relative overflow-hidden border-b border-green-500/30">
            <i className={`${project.icon} text-6xl text-green-500 group-hover:text-accent transition-colors`}></i>
            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">{tech}</span>
              ))}
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <Link href={project.detailsLink} className="text-green-500 hover:text-accent font-mono text-sm">
                <span className="text-accent">[</span>view_details<span className="text-accent">]</span>
              </Link>
              <div className="flex space-x-3">
                <Link href={project.github} className="text-gray-400 hover:text-green-500">
                  <i className="fab fa-github"></i>
                </Link>
                <Link href={project.external} className="text-gray-400 hover:text-green-500">
                  <i className="fas fa-external-link-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
