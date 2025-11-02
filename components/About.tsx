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
             I'm Chandan Kumar C, a 2025 Information Science Engineering graduate from Maharaja Institute of Technology, Mysore (CGPA: 8.03), with a strong foundation in Java, SQL, and full-stack development. I’m a certified AI DevOps Engineer (Skill India / NASSCOM) and have interned at Runshaw Technologies, contributing to Flutter mobile app features. My key projects include CNN-based Kidney Stone Detection, Career Navigator (Next.js & MongoDB Atlas), and a Hotel Management System. I’m passionate about developing end-to-end solutions that integrate AI, cloud, and web technologies.
            </p>

          </div>

          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Quick Facts</h3>
            <div className="space-y-8">
              <div>
                <p className="text-lg text-foreground mb-2">Location</p>
                <p className="text-base text-muted-foreground">Bengaluru, Karnataka, India</p>
              </div>
             
              <div>
                <p className="text-lg text-foreground mb-2">Education</p>
                <p className="text-base text-muted-foreground">B.E. Information Science — Maharaja Institute of Technology Mysore (CGPA: 8.03/10)</p>
              </div>
             
              <div>
                <p className="text-lg text-foreground mb-2">Certifications</p>
                <p className="text-base text-muted-foreground">• Front End Development — Great Learning (Sep 2024)</p>
                <p className="text-base text-muted-foreground">• Introduction to Python — Infosys Springboard (Dec 2023)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
