'use client';

import { useEffect } from 'react';

import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import BlogSection from '@/components/BlogSection';
import ProjectsSection from '@/components/ProjectsSection';
import About from '@/components/About';

// import whoami from "@/data/whoami";
// import skills from "@/data/skills";
// import projects from "@/data/projects";
// import blogPosts from '@/data/blog';

export default function Home() {




  useEffect(() => {
    const canvas = document.getElementById('matrixRain') as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const alphabet = katakana + latin + nums + symbols;
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = new Array(Math.floor(columns)).fill(3);

    // Draw characters as matrix style 
    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // ctx.fillStyle = '#00ff00';
      ctx.fillStyle ='#fff';
      ctx.font = fontSize + 'px monospace';

      rainDrops.forEach((_, i) => {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      });
    };

    const matrixInterval = setInterval(draw, 30);

    return () => clearInterval(matrixInterval);
  }, []);

  return (
    <>
      {/* Matrix rain background */}
      <canvas id="matrixRain" className="matrix-rain" />


      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <ProjectsSection />


      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <Contact />

    </>
  );
}