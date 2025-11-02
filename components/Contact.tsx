"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Chandan45444",
    color: "hover:text-purple-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/chandan-kumarc",
    color: "hover:text-blue-500",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:cchandankumar2003@gmail.com",
    color: "hover:text-red-500",
  },
];

export default function Contact() {
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

              animate(".social-link", {
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 600,
                delay: stagger(100, { start: 500 }),
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
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 opacity-0"
        >
          Get In Touch
        </h2>
        
        <div ref={contentRef} className="grid md:grid-cols-2 gap-12 opacity-0">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's work together
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate Information Science Engineering student leveraging a
                strong foundation in Java and SQL. I enjoy working on full-stack projects and exploring new technologies — currently open to internships and early-career
                roles.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-primary" />
                <a href="mailto:cchandankumar2003@gmail.com" className="hover:text-foreground transition-colors">
                  cchandankumar2003@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary" />
                <a href="tel:+918660619759" className="hover:text-foreground transition-colors">
                  +91 8660619759
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Connect With Me
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link flex flex-col items-center justify-center p-6 bg-muted/50 rounded-lg transition-all duration-300 opacity-0 ${link.color} hover:scale-105 hover:bg-muted`}
                >
                  <link.icon size={32} className="mb-3" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
            
           
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Chandan Kumar C. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
