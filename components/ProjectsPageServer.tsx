import { client } from "@/sanity/lib/client";
import { allProjectsQuery } from "@/sanity/lib/queries";
import ProjectsPageClient from "./ProjectsPageClient";

// Project type matching the original structure
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
  status?: 'in-progress' | 'completed' | 'archived' | 'planning';
  featured?: boolean;
  tags?: string[];
  thumbnail?: { asset: { url: string }; alt?: string };
}

export default async function ProjectsServer({ limit, showFilters }: { limit?: number; showFilters?: boolean }) {
  const projects: Project[] = await client.fetch(allProjectsQuery);

  // optionally limit to 3 for homepage preview
  const sliced = limit !== undefined ? projects.slice(0, limit) : projects;

  return <ProjectsPageClient projects={sliced} showFilters={showFilters} />;
}