"use client";

import { content } from "@/content";
import { Aperture, Plus, Asterisk, ToggleLeft, Circle } from "lucide-react";
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";

export function ClientLogos() {
  const { clients } = content;
  
  const iconMap: Record<string, React.ReactNode> = {
    "Ramaastra": <Aperture className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
    "Kalyani Maxion": <Plus className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />,
    "Elviko AI": <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
    "Heimstadt": <ToggleLeft className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
    "Prolead": <Circle className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />,
    "Imaging Dental Solutions": <Plus className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />,
    "Hello Sakhee": <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
    "Siddheshwar Transport": <Aperture className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
    "DYP Incubation": <ToggleLeft className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
  };

  const logosContent = (
    <div className="flex items-center">
      {clients.map((client) => (
        <div key={client.name} className="flex items-center justify-center gap-4 md:gap-5 px-16 md:px-24 py-12 md:py-16 border-r border-border min-w-[360px] md:min-w-[480px] group transition-colors hover:bg-white/5">
          <div className="opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0">
            {iconMap[client.name] || <Circle className="w-8 h-8 md:w-10 md:h-10 text-white" />}
          </div>
          <span className="font-body font-bold text-2xl md:text-3xl lg:text-4xl text-white opacity-90 group-hover:opacity-100 transition-opacity tracking-tight">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-surface border-y border-border overflow-hidden">
      {/* Desktop/Tablet Marquee */}
      <div className="hidden md:block">
        <ScrollVelocity 
          texts={[logosContent]} 
          velocity={30} 
          numCopies={4}
        />
      </div>
      
      {/* Mobile Grid Fallback */}
      <div className="md:hidden py-12 px-4 max-w-sm mx-auto">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center justify-center gap-3 w-[40%] group">
              <div className="opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 text-white">
                {iconMap[client.name] || <Circle className="w-8 h-8" />}
              </div>
              <span className="font-body font-bold text-base text-center text-white opacity-90 group-hover:opacity-100 transition-opacity tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
