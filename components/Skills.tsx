"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Java", level: 80 },
      { name: "SQL", level: 80 },
      { name: "HTML/CSS", level: 70 },
      
     
    ],
  },
  {
    category: "Frameworks & Databases",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Django", level: 60 },
      { name: "MongoDB", level: 60 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "VS Code", level: 70 },
       { name: "MS Office", level: 70 },
      { name: "Git & GitHub", level: 60 },
     
     
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
                  const n = Number(level);
                  if (!Number.isNaN(n)) {
                    // animate scaleX from 0 to level/100 so the bar fills exactly to the percentage
                    animate(bar, {
                      scaleX: n / 100,
                      duration: 1500,
                      easing: "out(3)",
                    });
                  }
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
                                className="skill-bar-fill h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
                                data-level={skill.level}
                                style={{ transform: "scaleX(0)", width: "100%" }}
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
