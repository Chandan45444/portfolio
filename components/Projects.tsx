"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content generation platform using machine learning to create high-quality written content.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and reporting features.",
    tech: ["Vue.js", "D3.js", "Express", "MySQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            if (headingRef.current) {
              animate(headingRef.current, {
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 800,
                ease: "out(3)",
              });
            }

            animate(".project-card", {
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 800,
              delay: stagger(150, { start: 300 }),
              ease: "out(3)",
            });

            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 bg-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 opacity-0"
        >
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group bg-card border border-border rounded-lg overflow-hidden opacity-0 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Project Image
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
