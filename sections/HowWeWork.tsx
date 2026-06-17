"use client";

import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/lib/gsap";


import { GlowCard } from "@/components/ui/spotlight-card";

export function HowWeWork() {
  const { process } = content;
  const stepsRef = useReveal<HTMLDivElement>(true);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border" id="process">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col items-start gap-8">
            <Eyebrow>{process.eyebrow}</Eyebrow>
            <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)] text-text">
              {process.heading}
            </h2>
          </div>
          <div className="pb-2">
            <Button href={process.cta.href}>{process.cta.label}</Button>
          </div>
        </div>

        {/* 
          // PHASE 4: GSAP ScrollTrigger
          // - Morphing yellow stadium SVG
          // - Pinned section
          // - Scrub through steps 001->004
        */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, i) => (
            <GlowCard key={i} className="flex flex-col items-center text-center bg-surface border-none rounded-xl p-8 lg:p-12">
              <div className="flex items-center gap-3 font-display text-xl uppercase tracking-widest text-text mb-6">
                <span className="w-2.5 h-2.5 bg-accent" />
                {step.index}
              </div>
              <h3 className="font-display uppercase text-2xl md:text-3xl text-text mb-4">
                {step.title}
              </h3>
              <p className="font-body text-muted text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </GlowCard>
          ))}
        </div>
        
      </div>
    </section>
  );
}
