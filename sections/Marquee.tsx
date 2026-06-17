"use client";

import { content } from "@/content";

export function Marquee() {
  const { marquee } = content;
  
  // Create an array large enough to loop seamlessly
  // We double the extended list so the 50% translation aligns perfectly
  const baseWords = [...marquee, ...marquee, ...marquee, ...marquee];
  const trackWords = [...baseWords, ...baseWords];

  return (
    <section className="w-full bg-transparent py-24 md:py-32 border-t border-border overflow-hidden flex flex-col gap-8">
      
      {/* Row 1: moves left */}
      <div className="flex whitespace-nowrap">
        <div 
          className="flex items-center animate-marquee-left hover:[animation-play-state:paused] w-max"
        >
          {trackWords.map((word, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-8 px-4">
              <span className="font-display uppercase text-[clamp(4rem,8vw,7rem)] tracking-tighter text-text opacity-90">
                {word}
              </span>
              <span className="w-4 h-4 bg-accent flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: moves right */}
      <div className="flex whitespace-nowrap justify-end">
        <div 
          className="flex items-center animate-marquee-right hover:[animation-play-state:paused] w-max"
          style={{ transform: "translateX(-50%)" }} // fallback starting position
        >
          {[...trackWords].reverse().map((word, i) => (
            <div key={`r2-${i}`} className="flex items-center gap-8 px-4">
              <span className="font-display uppercase text-[clamp(4rem,8vw,7rem)] tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px var(--border-color)' }}>
                {word}
              </span>
              <span className="w-4 h-4 bg-accent flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
