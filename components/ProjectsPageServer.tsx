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
}

export default async function ProjectsServer({limit}: {limit?: number}) {
  const projects: Project[] = await client.fetch(allProjectsQuery);

  // optionally limit to 3 for homepage preview
  const sliced = projects.slice(0, limit)

  return <ProjectsPageClient projects={sliced} />;
}