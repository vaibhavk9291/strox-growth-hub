"use client";

import { content } from "@/content";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const { hero } = content;
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const mm = gsap.matchMedia();

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
      const headline = sectionRef.current.querySelector(".hero-headline");
      const topRow = sectionRef.current.querySelector(".hero-top-row");
      const scrim = sectionRef.current.querySelector(".hero-scrim");
      // Set the final composed state immediately
      gsap.set(bgImage, { opacity: 0.3 });
      gsap.set(scrim, { opacity: 1 });
      gsap.set([headline, topRow], { y: 0, opacity: 1 });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
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
      <div className="sticky top-0 min-h-[100svh] h-screen w-full flex flex-col overflow-hidden">
        
        {/* Full-bleed Background Image with <picture> for responsive loading */}
        {hero.image && (
          <div className="absolute inset-0 z-0 pointer-events-none bg-bg">
            
            {/* Responsive Image — <picture> ensures only one file is downloaded */}
            <picture className="hero-bg-image absolute inset-0 w-full h-full will-change-transform">
              {/* Mobile: portrait crop (loaded only on screens ≤767px) */}
              {hero.imageMobile && (
                <source
                  media="(max-width: 767px)"
                  srcSet={hero.imageMobile}
                  type="image/png"
                />
              )}
              {/* Desktop: landscape crop (default) */}
              <img
                src={hero.image}
                alt="Intellobyte Founders"
                className="w-full h-full object-cover object-[center_20%] md:object-[center_bottom] grayscale"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            
            {/* Soft gradient scrim for text legibility, hidden on load */}
            <div className="hero-scrim absolute inset-0 pointer-events-none">
              {/* Mobile: stronger overall overlay since text sits on top of image */}
              <div className="absolute inset-0 bg-bg/60 md:bg-transparent" />
              {/* Desktop: directional gradients */}
              <div className="hidden md:block absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-bg via-bg/80 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 h-[50%] bg-gradient-to-t from-bg via-bg/60 to-transparent" />
              <div className="absolute top-0 inset-x-0 h-[30%] bg-gradient-to-b from-bg/80 to-transparent" />
            </div>
          </div>
        )}
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col text-left h-full pt-20 md:pt-[100px] pb-6 md:pb-16">
          
          {/* Top Meta Row */}
          <div className="hero-top-row w-full flex flex-col md:flex-row justify-between items-start md:items-start mb-8 md:mb-16 gap-6 md:gap-0 will-change-transform">
            
            {/* Top Left: Pill & Reviews */}
            <div className="flex flex-col items-start gap-4 md:gap-8 w-full md:w-auto">
              <div className="flex items-center gap-2 border border-accent/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-accent text-[9px] md:text-[10px] font-bold uppercase tracking-widest bg-black/20 backdrop-blur-sm">
                <div className="w-3 h-1.5 md:w-4 md:h-2 rounded-full border-2 border-accent"></div>
                {hero.eyebrow.toUpperCase()}
              </div>
              
              {/* Rating row — wraps cleanly at 375px */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 font-body uppercase tracking-widest text-text w-full">
                <div className="flex -space-x-2 md:-space-x-3 shrink-0">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-surface border-2 border-ink-deep grayscale shadow-lg overflow-hidden relative">
                    <Image src={hero.rating.avatars[0] || "/placeholder.svg"} fill sizes="48px" className="object-cover" alt="Reviewer" />
                  </div>
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-surface-2 border-2 border-ink-deep grayscale shadow-lg overflow-hidden relative">
                    <Image src={hero.rating.avatars[1] || "/placeholder.svg"} fill sizes="48px" className="object-cover" alt="Reviewer" />
                  </div>
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-surface border-2 border-ink-deep grayscale shadow-lg overflow-hidden relative">
                    <Image src={hero.rating.avatars[2] || "/placeholder.svg"} fill sizes="48px" className="object-cover" alt="Reviewer" />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-1">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="flex gap-[2px] text-white text-[9px] md:text-[10px]">
                      {[...Array(hero.rating.stars)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <span className="text-white font-bold text-xs md:text-sm">{hero.rating.score}/5</span>
                  </div>
                  <span className="text-muted text-[8px] md:text-[10px] font-medium tracking-widest">
                    {hero.rating.reviews.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Top Right: Paragraph (hidden on mobile to save space) */}
            <div className="hidden md:flex flex-col items-end gap-8 text-right w-auto">
              <p className="max-w-[320px] text-[11px] font-bold uppercase tracking-wider leading-[1.6] text-white/60">
                {hero.sub.toUpperCase()}
              </p>
            </div>
          </div>

          {/* Massive Headline pushed to bottom */}
          <h1 className="hero-headline font-display uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.2rem,8vw,8rem)] flex flex-col items-start mt-auto pb-4 md:pb-8 w-full max-w-[1200px] will-change-transform">
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>
              {hero.headline1}
            </span>
            <span className="text-accent mt-[-0.05em]">
              {hero.headline2}
            </span>
            <span className="text-accent mt-[-0.05em]">
              {hero.headline3}
            </span>
          </h1>

          {/* Mobile sub-line (shown only on mobile, below headline) */}
          <p className="md:hidden text-[10px] font-bold uppercase tracking-wider leading-[1.6] text-white/60 pb-4">
            {hero.sub.toUpperCase()}
          </p>

          {/* Scroll to continue indicator */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pb-2">
            <span className="font-body text-[9px] uppercase tracking-[0.3em] text-white">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 5v14"/>
              <path d="m19 12-7 7-7-7"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}

