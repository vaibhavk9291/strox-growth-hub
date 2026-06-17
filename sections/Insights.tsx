"use client";

import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/lib/gsap";

import { GlowCard } from "@/components/ui/spotlight-card";

export function Insights() {
  const { insights } = content;
  const postsRef = useReveal<HTMLDivElement>(true);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border" id="insights">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Left Gutter */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-4 flex justify-start">
          <Eyebrow>{insights.eyebrow}</Eyebrow>
        </div>

        {/* Main Content Area */}
        <div className="col-span-1 md:col-span-9 lg:col-span-9 xl:col-span-8 flex flex-col w-full gap-16 md:gap-24">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)] text-text max-w-2xl">
              {insights.heading}
            </h2>
            <div className="pb-2">
              <Button href={insights.cta.href}>{insights.cta.label}</Button>
            </div>
          </div>

          {/* Posts Grid */}
          <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {insights.posts.map((post, i) => (
              <div key={i} className="w-full flex flex-col md:flex-row items-stretch border-t border-border/50">
                <GlowCard className="flex flex-col w-full bg-transparent group cursor-pointer transition-all duration-300 hover:-translate-y-2 p-4 md:p-6 rounded-2xl">
                  <div className="relative w-full aspect-[16/9] md:aspect-[3/2] bg-surface rounded-xl overflow-hidden border border-border mb-8">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted font-body text-sm tracking-widest uppercase">Placeholder</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-display uppercase text-2xl md:text-3xl text-text leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-muted text-sm md:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
