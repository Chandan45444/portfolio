"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import cnImage from "@/app/image/cn.png";
import kidneyImage from "@/app/image/kidney.png";
import hotelImage from "@/app/image/hotel.png";

const projects = [
  {
    id: 1,
    title: "Career Navigator",
    description: "AI-powered coding interview prep platform built with modern web technologies. Features personalized learning paths and real-time code execution through JDoodle API integration.",
    tech: ["Next.js", "TypeScript", "MongoDB Atlas", "Gemini AI", "JDoodle API"],
    github: "https://github.com/Chandan45444/career_navigator",
    demo: "https://career-navigator-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Kidney Stone Detection",
    description: "Deep learning model for kidney stone detection using CT scan images. Implemented using CNNs with advanced image preprocessing and achieved high accuracy in classification.",
  tech: ["Python", "Keras", "OpenCV", "scikit-learn", "TensorFlow"],
  image: kidneyImage,
    
  },
  {
    id: 3,
    title: "Hotel Management System",
    description: "Comprehensive hotel management solution implementing core functionalities including booking management, guest check-in/check-out, and billing system for seamless operations.",
    tech: ["HTML", "MySQL", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    
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
                {project.id === 1 ? (
                  <Image
                    src={cnImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : project.id === 2 ? (
                  <Image
                    src={kidneyImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : project.id === 3 ? (
                  <Image
                    src={hotelImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Project Image
                  </div>
                )}
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
                
                {/* Show Code/Demo links only for the Career Navigator (id:1) */}
                {project.id === 1 ? (
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
