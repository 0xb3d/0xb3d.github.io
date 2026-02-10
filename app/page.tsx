// "use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";

export const revalidate = 10

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <BlogSection />
      {/* <Contact /> */}
    </>
  );
}
