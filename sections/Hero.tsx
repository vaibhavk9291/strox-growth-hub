"use client";

import { content } from "@/content";
import { useReveal, gsap } from "@/lib/gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const { hero } = content;
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!sectionRef.current) return;
      
      const bgImage = sectionRef.current.querySelector(".hero-bg-image");
      const scrim = sectionRef.current.querySelector(".hero-scrim");
      const headline = sectionRef.current.querySelector(".hero-headline");
      const topRow = sectionRef.current.querySelector(".hero-top-row");

      // Initial state: Image is bright and clear, UI & scrim are hidden
      gsap.set([headline, topRow], { y: 20, opacity: 0 });
      gsap.set(scrim, { opacity: 0 });
      gsap.set(bgImage, { scale: 1, opacity: 1 });

      // Scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom", // scrubs over the extra 50vh scroll
          scrub: 1, // smooth scrubbing
        }
      });

      // 1. Image subtly scales, dims, and drifts; scrim fades in
      tl.to(bgImage, {
        scale: 1.04,
        opacity: 0.4,
        yPercent: 5,
        ease: "none"
      }, 0);
      tl.to(scrim, { opacity: 1, ease: "none" }, 0);

      // 2. Staggered UI Reveal (tied to scroll)
      // Sequence: headline -> topRow
      tl.to(headline, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0.1)
        .to(topRow, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0.25);
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      if (!sectionRef.current) return;
      const bgImage = sectionRef.current.querySelector(".hero-bg-image");
      // Just set the final composed state immediately
      gsap.set(bgImage, { opacity: 0.3 });
    });

    const handleResize = () => {
      gsap.ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mm.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="relative w-full h-[150vh] bg-bg" id="home">
      {/* Sticky container holds the layout while we scroll the wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start pt-24 md:pt-[100px] pb-16 overflow-hidden">
        
        {/* Full-bleed Background Image */}
        {hero.image && (
          <div className="absolute inset-0 z-0 pointer-events-none bg-bg">
            
            {/* Clean Base Image Layer */}
            <Image 
              src={hero.image}
              alt="Intellobyte Founders"
              fill
              className="hero-bg-image object-cover object-[75%_bottom] md:object-[center_bottom] grayscale will-change-transform"
              priority
            />
            
            {/* Soft left/bottom gradient scrim for text legibility, hidden on load */}
            <div className="hero-scrim absolute inset-0 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-[100%] md:w-[70%] bg-gradient-to-r from-bg via-bg/80 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 h-[50%] bg-gradient-to-t from-bg via-bg/60 to-transparent" />
              <div className="absolute top-0 inset-x-0 h-[30%] bg-gradient-to-b from-bg/80 to-transparent" />
            </div>
          </div>
        )}
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col text-left mt-0 md:mt-2 h-full">
          
          {/* Top Meta Row */}
          <div className="hero-top-row w-full flex flex-col md:flex-row justify-between items-start md:items-start mb-16 gap-12 md:gap-0 will-change-transform">
            
            {/* Top Left: Pill & Reviews */}
            <div className="flex flex-col items-start gap-6 md:gap-8 w-full md:w-auto">
              <div className="flex items-center gap-2 border border-accent/30 rounded-full px-4 py-2 text-accent text-[10px] font-bold uppercase tracking-widest bg-black/20 backdrop-blur-sm">
                <div className="w-4 h-2 rounded-full border-2 border-accent"></div>
                {hero.eyebrow.toUpperCase()}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 font-body uppercase tracking-widest text-text w-full">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-surface border-2 border-ink-deep grayscale shadow-lg overflow-hidden relative">
                    <Image src={hero.rating.avatars[0] || "/placeholder.svg"} fill className="object-cover" alt="Reviewer" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-surface-2 border-2 border-ink-deep grayscale shadow-lg overflow-hidden relative">
                    <Image src={hero.rating.avatars[1] || "/placeholder.svg"} fill className="object-cover" alt="Reviewer" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-surface border-2 border-ink-deep grayscale shadow-lg overflow-hidden relative">
                    <Image src={hero.rating.avatars[2] || "/placeholder.svg"} fill className="object-cover" alt="Reviewer" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-[2px] text-white text-[10px]">
                      {[...Array(hero.rating.stars)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <span className="text-white font-bold text-sm">{hero.rating.score}/5</span>
                  </div>
                  <span className="text-muted text-[10px] font-medium tracking-widest">
                    {hero.rating.reviews.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Top Right: Paragraph */}
            <div className="flex flex-col items-start md:items-end gap-8 md:text-right md:flex w-full md:w-auto">
              <p className="max-w-[320px] text-[11px] font-bold uppercase tracking-wider leading-[1.6] text-white/60">
                {hero.sub.toUpperCase()}
              </p>
            </div>
          </div>

          {/* Massive Headline pushed to bottom */}
          <h1 className="hero-headline font-display uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,8vw,8rem)] flex flex-col items-start mt-auto pb-8 w-full max-w-[1200px] will-change-transform">
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
              {hero.headline1}
            </span>
            <span className="text-accent mt-[-0.05em]">
              {hero.headline2}
            </span>
            <span className="text-accent mt-[-0.05em]">
              {hero.headline3}
            </span>
          </h1>

        </div>
      </div>
    </section>
  );
}
