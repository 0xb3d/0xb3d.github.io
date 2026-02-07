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
  status?: string;
}

interface ProjectsPageClientProps {
  projects: Project[];
}

export default function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  return (
    <div
      className="flex flex-col"
      style={{ background: 'var(--border-primary)' }}
    >

      {projects.map((project, index) => (
        <Link
          key={project._id}
          href={`/projects/${project.slug.current}`}
          className="group block transition-all duration-400 cursor-crosshair"
          style={{ background: 'var(--background)' }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[80px_1fr_200px_120px] items-center py-6 px-10 gap-2 transition-all duration-400 group-hover:pl-14"
            style={{ transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(244, 128, 128, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {/* Index */}
            <span
              className="text-[11px] tracking-[2px] font-normal"
              style={{ color: 'var(--accent)' }}
            >
              {String(index + 1).padStart(3, '0')}
            </span>

            {/* Title */}
            <h3
              className="text-[18px] transition-colors duration-300"
              style={{ color: 'var(--foreground)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--foreground)';
              }}
            >
              {project.title}
            </h3>

            {/* Tech tags */}
            <div className="hidden md:flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-[9px] tracking-[2px] uppercase px-2.5 py-1 transition-all duration-300"
                  style={{
                    color: 'var(--muted-foreground)',
                    border: '1px solid var(--border-primary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Status */}
            <span
              className="hidden md:block text-[10px] tracking-[2px] uppercase text-right"
              style={{
                color:
                  project.status === 'in-progress' || project.status === 'active'
                    ? 'var(--accent)'
                    : 'var(--muted-foreground)',
              }}
            >
              {project.status || 'View'}
            </span>
          </div>

          {/* Separator */}
          <div className="h-px" style={{ background: 'var(--border-primary)' }} />
        </Link>
      ))}
    </div>
  );
}