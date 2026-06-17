"use client";

import { useEffect, useRef } from "react";
import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function About() {
  const { about } = content;
  const textRef = useRef<HTMLHeadingElement>(null);
  
  // Split text into words for animation
  const words = about.statement.split(" ");

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const wordElements = el.querySelectorAll(".about-word");
      
      // Initialize text to muted
      gsap.set(wordElements, { color: "var(--text-muted)" });
      
      gsap.to(wordElements, {
        color: "var(--text)",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1, // smooth scrub
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 border-t border-border" id="about">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 px-4 md:px-8">
        
        {/* Left Side: Eyebrow */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-4 flex justify-start">
          <Eyebrow>{about.eyebrow}</Eyebrow>
        </div>

        {/* Right Side: Large Statement + CTA */}
        <div className="col-span-1 md:col-span-9 lg:col-span-9 xl:col-span-8 flex flex-col items-start gap-12">
          
          {/* Phase 4: Word-by-word text fill on scroll */}
          <h2 ref={textRef} className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)] max-w-4xl text-text">
            {words.map((word, i) => (
              <span key={i} className="about-word inline-block mr-[0.25em] transition-colors duration-300">
                {word}
              </span>
            ))}
          </h2>
          
          <Button href={about.cta.href}>{about.cta.label}</Button>
        </div>
      </div>
    </section>
  );
}
