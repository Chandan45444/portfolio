"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline } from "animejs";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && ctaRef.current) {
      const timeline = createTimeline();

      timeline
        .add(titleRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1200,
          ease: "out(3)",
        })
        .add(
          subtitleRef.current,
          {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            ease: "out(3)",
          },
          "-=800"
        )
        .add(
          ctaRef.current,
          {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            ease: "out(3)",
          },
          "-=600"
        );
    }

    const floatAnimation = animate(".float-element", {
      translateY: [-10, 10],
      duration: 3000,
      ease: "inOut(2)",
      direction: "alternate",
      loop: true,
    });

    return () => {
      floatAnimation.pause();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-element" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl float-element" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 opacity-0"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Your Name
          </span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 opacity-0"
        >
          Full-Stack Developer & Creative Problem Solver
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-block text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
