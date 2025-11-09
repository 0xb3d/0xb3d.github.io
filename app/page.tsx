// "use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import MatrixRain from "@/components/MatrixRain";

export default function Home() {
  return (
    <>
      {/* <MatrixRain /> */}

      <Hero />
      <About />
      <ProjectsSection />
      <BlogSection />
      <Contact />
    </>
  );
}
