"use client";

import { useState } from "react";
import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/gsap";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function Work() {
  const { work } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = work.projects[activeIndex];
  const listRef = useReveal<HTMLDivElement>(true);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border" id="work">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-4 flex justify-start">
          <Eyebrow>{work.eyebrow}</Eyebrow>
        </div>

        <div className="col-span-1 md:col-span-9 lg:col-span-9 xl:col-span-8">
          <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)] text-text max-w-2xl">
            {work.heading}
          </h2>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Featured Project */}
        <div className="col-span-1 lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
          <div className="flex items-center gap-4 font-display text-xl uppercase tracking-widest text-text mb-2">
            <span className="w-3 h-3 bg-accent" />
            <div className="relative w-[3ch] h-[1.2em] overflow-hidden inline-flex items-center">
              <AnimatePresence mode="popLayout">
                <motion.span 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center"
                >
                  {activeProject.index}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-muted">/ {String(work.projects.length).padStart(2, '0')}</span>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-surface rounded-xl border border-border overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-4">
                <h3 className="font-display uppercase text-3xl md:text-5xl text-text leading-none">
                  {activeProject.title}
                </h3>
                {activeProject.href && (
                  <a 
                    href={activeProject.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-4 py-2 text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-accent/15 transition-colors mb-1"
                  >
                    Visit Website ↗
                  </a>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 font-body text-xs uppercase tracking-widest text-muted">
                {activeProject.tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-body text-muted text-sm max-w-[300px] md:text-right">
              {activeProject.description}
            </p>
          </div>
        </div>

        <div ref={listRef} className="col-span-1 lg:col-span-4 xl:col-span-3 flex flex-col lg:pt-16">
          {work.projects.map((proj, i) => {
            const isActive = i === activeIndex;
            return (
              <div key={i} className={`border-b border-border transition-colors ${isActive ? 'text-accent' : 'text-muted hover:text-text'}`}>
                <button
                  onClick={() => setActiveIndex(i)}
                  suppressHydrationWarning
                  className="w-full text-left pt-6 pb-4 flex flex-col group"
                >
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="font-body text-xs tracking-widest">{proj.index}</span>
                      <span className="font-display uppercase text-2xl md:text-3xl tracking-wide">{proj.title}</span>
                    </div>
                    {isActive && <span className="w-3 h-3 bg-accent flex-shrink-0" />}
                  </div>
                </button>
                
                {isActive && proj.href && (
                  <div className="pb-6 pl-[3.25rem] pointer-events-auto">
                    <a 
                      href={proj.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-4 py-2 text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-accent/15 transition-colors"
                    >
                      Visit Website ↗
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
