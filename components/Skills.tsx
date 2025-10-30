"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 93 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 82 },
      { name: "Testing", level: 85 },
    ],
  },
];

export default function Skills() {
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

            animate(".skill-category", {
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 800,
              delay: stagger(150, { start: 300 }),
              ease: "out(3)",
            });

            setTimeout(() => {
              const skillBars = document.querySelectorAll(".skill-bar-fill");
              skillBars.forEach((bar) => {
                const level = bar.getAttribute("data-level");
                if (level && bar instanceof HTMLElement) {
                  animate(bar, {
                    width: level + "%",
                    duration: 1500,
                    ease: "out(3)",
                  });
                }
              });
            }, 500);

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
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 opacity-0"
        >
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="skill-category bg-card border border-border rounded-lg p-6 opacity-0"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
