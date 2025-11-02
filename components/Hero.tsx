"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline } from "animejs";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />,
});

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
      
      <Scene3D />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-element" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl float-element" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 opacity-0"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Chandan Kumar C
          </span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 opacity-0"
        >
          Java Full-Stack Developer & DevOps Enthusiast
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.65)] transition-all duration-300 hover:-translate-y-1 tracking-wide"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative inline-flex items-center">
              View My Work
              <svg className="w-4 h-4 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-transparent backdrop-blur-sm border-2 border-blue-500/30 text-foreground rounded-xl font-semibold relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1 tracking-wide"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative inline-flex items-center">
              Get In Touch
              <svg className="w-4 h-4 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m0 0l6-6m-6 6l6 6" />
              </svg>
            </span>
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
