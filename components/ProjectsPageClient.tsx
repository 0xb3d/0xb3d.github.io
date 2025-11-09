"use client";

import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  icon: string;
  tech: string[];
  github?: string;
  external?: string;
}

interface ProjectsPageClientProps {
  projects: Project[];
}

export default function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project._id} className="hacker-card group">
          <div className="h-48 flex items-center justify-center relative overflow-hidden border-b transition-colors"
               style={{ 
                 backgroundColor: 'var(--card-bg)',
                 borderColor: 'var(--border-primary)'
               }}>
            <i className={`${project.icon} text-6xl transition-colors`}
               style={{ color: 'var(--primary)' }}></i>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ backgroundColor: 'var(--shadow-primary)' }}></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2"
                style={{ color: 'var(--text)' }}>
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} 
                      className="px-2 py-1 rounded text-xs font-mono"
                      style={{ 
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--primary)',
                        border: '1px solid var(--border-primary)'
                      }}>
                  {tech}
                </span>
              ))}
            </div>
            <p className="mb-4"
               style={{ color: 'var(--text)' }}>
              {project.description}
            </p>
            <div className="flex justify-between items-center">
              <Link 
                href={`/projects/${project.slug.current}`} 
                className="font-mono text-sm transition-colors"
                style={{ color: 'var(--primary)' }}
              >
                <span style={{ color: 'var(--accent)' }}>[</span>view_details<span style={{ color: 'var(--accent)' }}>]</span>
              </Link>
              <div className="flex space-x-3">
                {project.github && (
                  <Link 
                    href={project.github} 
                    className="transition-colors"
                    style={{ color: 'var(--muted-foreground)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                )}
                {project.external && (
                  <Link 
                    href={project.external} 
                    className="transition-colors"
                    style={{ color: 'var(--muted-foreground)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}