"use client";

import { useEffect, useRef } from "react";
import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ProcessMorphScratch() {
  const { process } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  // The 4 paths with perfectly identical command structures
  const paths = [
    // 001 Discovery: Full Oval
    "M 400 50 L 550 50 C 632.84 50, 700 117.16, 700 200 C 700 282.84, 632.84 350, 550 350 L 250 350 C 167.16 350, 100 282.84, 100 200 C 100 117.16, 167.16 50, 250 50 L 400 50",
    // 002 Strategy: Slight Opening (Dip)
    "M 450 100 L 550 50 C 632.84 50, 700 117.16, 700 200 C 700 282.84, 632.84 350, 550 350 L 250 350 C 167.16 350, 100 282.84, 100 200 C 100 117.16, 167.16 50, 250 50 L 350 100",
    // 003 Design: Wide Opening
    "M 500 150 L 550 50 C 632.84 50, 700 117.16, 700 200 C 700 282.84, 632.84 350, 550 350 L 250 350 C 167.16 350, 100 282.84, 100 200 C 100 117.16, 167.16 50, 250 50 L 300 150",
    // 004 Launch: Full U-Shape
    "M 550 50 L 550 50 C 632.84 50, 700 117.16, 700 200 C 700 282.84, 632.84 350, 550 350 L 250 350 C 167.16 350, 100 282.84, 100 200 C 100 117.16, 167.16 50, 250 50 L 250 50"
  ];

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
      const section = sectionRef.current;
      const path = svgPathRef.current;
      const texts = textRefs.current.filter(Boolean);
      
      if (!section || !path || texts.length !== 4) return;

      // Initialize texts opacity
      gsap.set(texts, { opacity: 0, y: 20 });
      gsap.set(texts[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "+=3000", // Long scroll distance for 4 steps
          pin: true,
          scrub: 1,
        }
      });

      // Step 1 to 2
      tl.addLabel("step1")
        .to(texts[0], { opacity: 0, y: -20, duration: 1 }, "step1+=1") // Hold for a beat
        .to(path, { attr: { d: paths[1] }, duration: 2, ease: "power1.inOut" }, "step1+=1")
        .to(texts[1], { opacity: 1, y: 0, duration: 1 }, "step1+=2");

      // Step 2 to 3
      tl.addLabel("step2")
        .to(texts[1], { opacity: 0, y: -20, duration: 1 }, "step2+=1")
        .to(path, { attr: { d: paths[2] }, duration: 2, ease: "power1.inOut" }, "step2+=1")
        .to(texts[2], { opacity: 1, y: 0, duration: 1 }, "step2+=2");

      // Step 3 to 4
      tl.addLabel("step3")
        .to(texts[2], { opacity: 0, y: -20, duration: 1 }, "step3+=1")
        .to(path, { attr: { d: paths[3] }, duration: 2, ease: "power1.inOut" }, "step3+=1")
        .to(texts[3], { opacity: 1, y: 0, duration: 1 }, "step3+=2");
        
      // Final hold
      tl.to({}, { duration: 1 });
    });

    return () => mm.revert();
  }, []);

  return (
    <main className="w-full bg-bg text-text min-h-screen">
      <div className="h-[50vh] flex flex-col items-center justify-center border-b border-border gap-4">
        <h1 className="text-3xl font-display uppercase">Morph SVG Scratch</h1>
        <p className="text-muted">Scroll down to see the animation</p>
      </div>

      <section ref={sectionRef} className="w-full bg-transparent overflow-hidden" id="process">
        <div className="w-full h-screen flex flex-col justify-center items-center p-4 md:p-8 relative max-w-[1600px] mx-auto">
          
          <div className="absolute top-8 left-8">
            <Eyebrow>{process.eyebrow}</Eyebrow>
          </div>

          <div className="relative w-full max-w-[800px] aspect-[2/1] flex items-center justify-center">
            
            {/* The Morphing SVG */}
            <svg 
              viewBox="0 0 800 400" 
              className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(204,255,0,0.15)]"
              preserveAspectRatio="xMidYMid meet"
            >
              <path 
                ref={svgPathRef}
                d={paths[0]} 
                fill="none" 
                stroke="#F0E327" 
                strokeWidth="40" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* The Text Steps */}
            {process.steps.map((step, idx) => (
              <div 
                key={idx} 
                ref={el => { textRefs.current[idx] = el; }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-12"
              >
                <div className="flex items-center gap-3 font-display text-lg uppercase tracking-widest text-accent mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  {step.index}
                </div>
                <h3 className="font-display uppercase text-4xl md:text-5xl text-white mb-4 tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="font-body text-muted text-base leading-relaxed max-w-[320px]">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
          
        </div>
      </section>

      {/* Static Fallback / Mobile View (Hidden on large screens or if motion allowed) */}
      <section className="md:hidden w-full py-24 px-4 bg-transparent border-t border-border">
        <div className="flex flex-col gap-8">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <div className="grid grid-cols-1 gap-8">
            {process.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-surface border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 font-display text-xl uppercase tracking-widest text-text mb-6">
                  <span className="w-2.5 h-2.5 bg-accent" />
                  {step.index}
                </div>
                <h3 className="font-display uppercase text-2xl text-text mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-muted text-sm leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Static Debug View for Reviewing SVG Shapes */}
      <section className="w-full py-24 bg-surface border-t border-border">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl uppercase mb-12 text-center text-text">Static Morph States (For Review)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {paths.map((pathStr, i) => (
              <div key={i} className="flex flex-col items-center gap-6">
                <div className="text-accent font-bold tracking-widest uppercase text-sm">State 00{i + 1}</div>
                <div className="w-full bg-bg border border-border rounded-xl p-4 aspect-[2/1] flex items-center justify-center">
                  <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                    <path d={pathStr} fill="none" stroke="#F0E327" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[50vh] flex items-center justify-center border-t border-border mt-0">
        <p className="text-muted">End of process</p>
      </div>
    </main>
  );
}
