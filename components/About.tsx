"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current && contentRef.current) {
              animate(headingRef.current, {
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 800,
                ease: "out(3)",
              });

              animate(contentRef.current, {
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1000,
                delay: 200,
                ease: "out(3)",
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 opacity-0"
        >
          About Me
        </h2>
        
        <div ref={contentRef} className="grid md:grid-cols-2 gap-12 opacity-0">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for creating 
              beautiful, functional, and user-friendly digital experiences. With 
              expertise in modern web technologies, I bring ideas to life through 
              clean code and thoughtful design.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development started several years ago, and 
              since then, I've been constantly learning and evolving with the 
              ever-changing landscape of technology. I specialize in building 
              scalable web applications that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge 
              with the developer community.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-lg text-foreground">Your City, Country</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="text-lg text-foreground">X+ Years in Development</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Focus</p>
                <p className="text-lg text-foreground">Full-Stack Development</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="text-lg text-foreground">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
