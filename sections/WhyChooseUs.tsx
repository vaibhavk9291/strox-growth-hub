"use client";

import { useEffect, useRef } from "react";
import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { gsap, ScrollTrigger } from "@/lib/gsap";


import { GlowCard } from "@/components/ui/spotlight-card";

export function WhyChooseUs() {
  const { why } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const bgGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
      const section = sectionRef.current;
      if (!section) return;

      const revealWrappers = gsap.utils.toArray(".why-reveal-wrapper");
      const parallaxWrappers = gsap.utils.toArray(".why-parallax-wrapper");
      const bgCells = gsap.utils.toArray(".bg-grid-cell");

      // Background lines soft draw in
      gsap.fromTo(bgCells, 
        { opacity: 0 },
        { opacity: 1, duration: 1.5, stagger: 0.1, ease: "power2.inOut", scrollTrigger: { trigger: section, start: "top 70%" } }
      );

      // Cards reveal
      gsap.fromTo(revealWrappers,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        }
      );

      // Cards continuous gentle parallax
      parallaxWrappers.forEach((wrapper: any, i: number) => {
        // Drift direction alternates or varies slightly
        const drift = i % 2 === 0 ? -15 : 15;
        gsap.to(wrapper, {
          y: drift,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    });

    // Mobile specific: just reveal, no parallax or complex stagger
    mm.add("(prefers-reduced-motion: no-preference) and (max-width: 767px)", () => {
      const section = sectionRef.current;
      if (!section) return;

      const revealWrappers = gsap.utils.toArray(".why-reveal-wrapper");
      gsap.fromTo(revealWrappers,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24 relative z-10">
        
        {/* Left Gutter: Eyebrow */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-4 flex justify-start">
          <Eyebrow>{why.eyebrow}</Eyebrow>
        </div>
        
        {/* Header Content Area */}
        <div className="col-span-1 md:col-span-9 lg:col-span-9 xl:col-span-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)] text-text max-w-2xl">
            {why.heading}
          </h2>
          
          <p className="font-body text-sm text-muted uppercase tracking-widest max-w-[250px] lg:text-right pb-2">
            {why.intro}
          </p>
        </div>
        
      </div>

      <div className="max-w-[1600px] mx-auto relative pb-8 md:pb-16 lg:pb-24">
        
        {/* The Background Structural Grid */}
        <div ref={bgGridRef} className="hidden md:grid absolute inset-0 z-0 grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-none">
          {why.cards.map((_, i) => (
            <div 
              key={`bg-${i}`} 
              className="bg-grid-cell w-full h-full border border-dashed border-border/40 rounded-xl" 
            />
          ))}
        </div>
        
        {/* The Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          {why.cards.map((card, i) => (
            <div key={i} className="why-reveal-wrapper h-full w-full">
              <div className="why-parallax-wrapper h-full w-full">
                <GlowCard 
                  className={`why-card bg-surface border-none rounded-xl p-8 lg:p-10 transition-colors duration-300 flex flex-col h-full
                    ${i % 2 !== 0 ? 'md:translate-y-12 lg:translate-y-16' : ''}
                  `}
                >
                  {/* Diamond SVG Icon */}
                  <div className="w-8 h-8 mb-8 relative flex items-center justify-center text-accent">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-45">
                      <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="1" />
                      <rect x="8" y="8" width="8" height="8" fill="currentColor" />
                    </svg>
                  </div>

                  <h3 className="font-display uppercase text-xl md:text-2xl text-text mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="font-body text-muted text-sm leading-relaxed mt-auto">
                    {card.description}
                  </p>
                </GlowCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
