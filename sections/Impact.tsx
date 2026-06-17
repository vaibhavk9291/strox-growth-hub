"use client";

import { useEffect, useRef } from "react";
import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";

export function Impact() {
  const { impact } = content;
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (statsRef.current) {
        const statElements = statsRef.current.querySelectorAll(".impact-stat-value");
        
        statElements.forEach((el) => {
          const rawValue = el.getAttribute("data-value") || "";
          const numMatch = rawValue.match(/(\d+)/);
          if (!numMatch) return;
          
          const targetNum = parseInt(numMatch[1], 10);
          const suffix = rawValue.replace(numMatch[1], ""); // extract the "+" or whatever
          
          const obj = { val: 0 };
          
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: targetNum,
                duration: 1.5,
                ease: "power3.out",
                onUpdate: () => {
                  el.textContent = Math.floor(obj.val) + suffix;
                }
              });
            }
          });
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left Side: Text and Stats */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-16">
          <div className="flex flex-col items-start gap-8">
            <Eyebrow>{impact.eyebrow}</Eyebrow>
            <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)] text-text max-w-2xl">
              {impact.statement}
            </h2>
            <Button href={impact.cta.href}>{impact.cta.label}</Button>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {impact.stats.map((stat, i) => (
              <div 
                key={i} 
                className={`flex flex-col gap-2 ${i % 2 !== 0 ? 'sm:mt-12' : ''}`}
              >
                <div 
                  className="impact-stat-value font-display text-5xl md:text-7xl text-accent mb-2 tracking-tighter"
                  data-value={stat.value}
                >
                  {/* Fallback for SSR and reduced motion is the full string */}
                  {stat.value}
                </div>
                <h4 className="font-body text-text uppercase tracking-widest text-sm mb-1">{stat.label}</h4>
                <p className="font-body text-muted text-sm max-w-xs leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="col-span-1 lg:col-span-5 flex justify-start lg:justify-end">
          <div className="relative w-full lg:max-w-[500px] aspect-[3/4] bg-surface rounded-xl border border-border overflow-hidden">
            <Image 
              src={impact.image} 
              alt="Impact" 
              fill 
              className="object-cover object-center"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
