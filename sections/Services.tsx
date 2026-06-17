"use client";

import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/gsap";
import { GlowCard } from "@/components/ui/spotlight-card";
import Image from "next/image";

export function Services() {
  const { services } = content;
  const cardsRef = useReveal<HTMLDivElement>(true);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border" id="services">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        {/* Phase 4: GSAP ScrollTrigger - pin section, stack cards */}
        <div ref={cardsRef} className="w-full flex flex-col gap-16 md:gap-24">
          {services.cards.map((card, idx) => (
            <GlowCard 
              key={idx} 
              className="w-full bg-surface border-none rounded-xl p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-24"
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2 aspect-square bg-surface-2 rounded-xl overflow-hidden border border-border relative">
                {card.image && (
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                )}
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
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
