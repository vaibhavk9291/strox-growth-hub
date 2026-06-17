"use client";

import { useEffect, useRef } from "react";
import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ServicesStackScratch() {
  const { services } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const section = sectionRef.current;
      const cards = cardsRef.current.filter(Boolean);
      
      if (!section || cards.length === 0) return;

      // Pin the entire section
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * cards.length}`,
        pin: true,
        scrub: true,
        id: "services-pin"
      });

      cards.forEach((card, i) => {
        if (!card) return;

        // Set initial positions
        if (i > 0) {
          gsap.set(card, { y: window.innerHeight });
        }

        if (i === 0) return; // First card is already visible

        // Animate current card sliding up
        gsap.to(card, {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: `top top-=${window.innerHeight * (i - 1)}`,
            end: `top top-=${window.innerHeight * i}`,
            scrub: true,
          }
        });

        // Scale and push back all previous cards
        // Wait, it's easier to just scale down the card immediately before it, 
        // or loop through all previous cards and push them further back.
        for (let j = 0; j < i; j++) {
          const prevCard = cards[j];
          if (!prevCard) continue;
          
          gsap.to(prevCard, {
            scale: 1 - 0.05 * (i - j), // 0.95, 0.90, etc.
            y: -20 * (i - j), // Push up slightly so edges peek
            opacity: 1 - 0.2 * (i - j), // Dim slightly
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: `top top-=${window.innerHeight * (i - 1)}`,
              end: `top top-=${window.innerHeight * i}`,
              scrub: true,
            }
          });
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <main className="w-full bg-bg text-text min-h-screen">
      <div className="h-[50vh] flex items-center justify-center border-b border-border">
        <p className="text-muted">Scroll down to see the animation</p>
      </div>

      <section ref={sectionRef} className="w-full bg-transparent overflow-hidden" id="services">
        <div className="w-full h-screen flex flex-col justify-center items-center p-4 md:p-8 relative max-w-[1600px] mx-auto">
          
          <div className="absolute top-8 left-8">
            <Eyebrow>Services</Eyebrow>
          </div>

          {/* Cards Wrapper */}
          <div ref={wrapperRef} className="relative w-full max-w-6xl h-[600px] mt-16">
            {services.cards.map((card, idx) => (
              <div 
                key={idx} 
                ref={el => { cardsRef.current[idx] = el; }}
                className="absolute top-0 left-0 w-full h-full bg-surface border border-border rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 shadow-2xl origin-top"
                style={{ zIndex: idx }}
              >
                {/* Image Column */}
                <div className="w-full lg:w-1/2 h-full bg-surface-2 rounded-2xl overflow-hidden border border-border">
                  {/* Phase 3/4: Real image placement here */}
                </div>

                {/* Text Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="font-display uppercase tracking-[0em] leading-[0.95] text-[clamp(2rem,4vw,3.5rem)] text-text mb-6">
                    {card.title}
                  </h3>
                  <p className="font-body text-muted text-base md:text-lg mb-12 max-w-xl leading-relaxed">
                    {card.description}
                  </p>
                  
                  <ul className="flex flex-col gap-5">
                    {card.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-4 font-body text-sm md:text-base text-text uppercase tracking-widest">
                        <span className="w-2.5 h-2.5 bg-accent flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      <div className="h-[100vh] flex items-center justify-center border-t border-border mt-[100vh]">
        <p className="text-muted">End of stack</p>
      </div>
    </main>
  );
}
