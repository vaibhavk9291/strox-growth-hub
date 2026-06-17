"use client";

import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/gsap";
import { GlowCard } from "@/components/ui/spotlight-card";

export function Testimonials() {
  const { testimonials } = content;
  const cardsRef = useReveal<HTMLDivElement>(true);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        
        {/* Left Gutter */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-4 flex justify-start">
          <Eyebrow>{testimonials.eyebrow}</Eyebrow>
        </div>

        {/* Header Content */}
        <div className="col-span-1 md:col-span-9 lg:col-span-9 xl:col-span-8 flex flex-col items-start">
          <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)] text-text max-w-3xl">
            {testimonials.heading}
          </h2>
        </div>

      </div>

      <div className="max-w-[1600px] mx-auto overflow-hidden h-[600px] relative group mask-y">
        {testimonials.items.length <= 2 ? (
          // Fallback static grid for low item count
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.items.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        ) : (
          // 3-column auto-scroll
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start">
            {[0, 1, 2].map((colIndex) => {
              // Distribute items into columns
              const colItems = testimonials.items.filter((_, i) => i % 3 === colIndex);
              // Duplicate for seamless loop
              const loopItems = [...colItems, ...colItems, ...colItems];
              
              // Direction: Col 1 UP, Col 2 DOWN, Col 3 UP
              const isDown = colIndex === 1;
              const duration = 30 + (colIndex * 5); // Opposing speeds
              
              return (
                <div 
                  key={colIndex} 
                  className="flex flex-col gap-6"
                  style={{ 
                    animation: `scroll-${isDown ? 'down' : 'up'} ${duration}s linear infinite`,
                  }}
                >
                  {loopItems.map((item, i) => (
                    <TestimonialCard key={`${colIndex}-${i}`} item={item} />
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add CSS animations to document head or global CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
        .mask-y {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
        .group:hover .flex-col {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
}

function TestimonialCard({ item }: { item: any }) {
  return (
    <GlowCard className="bg-surface border-none rounded-xl p-8 lg:p-10 flex flex-col gap-8 h-full transition-all duration-300">
      {/* Quote Icon */}
      <div className="text-accent/40 w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Quote */}
      <blockquote className="font-display text-xl md:text-2xl text-text leading-tight flex-grow">
        "{item.quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-surface-2 border border-white/5 overflow-hidden relative flex-shrink-0">
          {item.avatar ? (
            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted font-display text-lg uppercase">
              {item.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <cite className="font-display uppercase tracking-wider text-sm not-italic">{item.name}</cite>
          <span className="font-body text-xs text-muted">
            {item.role}{item.company ? `, ${item.company}` : ''}
          </span>
        </div>
      </div>
    </GlowCard>
  );
}
