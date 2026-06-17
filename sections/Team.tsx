"use client";

import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/lib/gsap";
import Image from "next/image";

export function Team() {
  const { team } = content;
  const listRef = useReveal<HTMLDivElement>(true);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border" id="team">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        
        {/* Left Gutter: Eyebrow */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-4 flex justify-start">
          <Eyebrow>{team.eyebrow}</Eyebrow>
        </div>
        
        {/* Team Grid */}
        <div ref={listRef} className="col-span-1 md:col-span-9 lg:col-span-9 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-0">
          {team.members.map((member, i) => (
            <div 
              key={i} 
              className={`group flex flex-col w-full max-w-[400px] mx-auto ${i % 2 !== 0 ? 'md:mt-32 md:-mb-32' : 'md:mb-32'}`}
            >
              {/* Portrait Image */}
              <div className="relative w-full aspect-[4/5] bg-surface-2 rounded-xl border border-border overflow-hidden mb-8">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              
              {/* Member Details */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="font-display uppercase text-2xl md:text-3xl text-text mb-2 transition-colors duration-300 group-hover:text-accent">
                  {member.name}
                </h3>
                <p className="font-body text-sm uppercase tracking-widest text-muted mb-4 md:mb-4">
                  {member.role}
                </p>
              </div>
              
              {/* Social Links (Slide up on hover) */}
              <div className="md:overflow-hidden w-full">
                <ul className="flex flex-col gap-4 border-t border-border/50 pt-6 md:translate-y-[120%] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                  {member.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-body text-sm text-text hover:text-accent transition-colors">
                        <span className="uppercase tracking-widest">{link.label}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 hover:opacity-100 -translate-y-1 translate-x-1 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
