"use client";

import { useState } from "react";
import { content } from "@/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-transparent py-32 md:py-48 px-4 md:px-8 border-t border-border">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Left Gutter */}
        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-4 flex justify-start">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
        </div>

        {/* Main Content Area */}
        <div className="col-span-1 md:col-span-9 lg:col-span-9 xl:col-span-8 flex flex-col items-start w-full">
          {/* Header */}
          <div className="flex flex-col items-start gap-6 mb-16">
            <h2 className="font-display uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)] text-text">
              {faq.heading}
            </h2>
            <p className="font-body text-muted text-sm uppercase tracking-widest max-w-lg leading-relaxed">
              {faq.intro}
            </p>
          </div>

          {/* Accordion */}
          <div className="w-full flex flex-col gap-4 mb-20 max-w-4xl">
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="w-full bg-surface border border-border rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left group"
                    suppressHydrationWarning
                  >
                    <h3 className="font-display uppercase text-lg md:text-2xl text-text pr-8 group-hover:text-accent transition-colors">
                      {item.q}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-colors ${isOpen ? 'border-accent bg-accent/10' : 'border-border group-hover:border-accent'}`}>
                      <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {isOpen ? <Minus className="w-4 h-4 text-accent" /> : <Plus className="w-4 h-4 text-accent" />}
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0">
                          <p className="font-body text-muted text-sm leading-relaxed max-w-3xl">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA Footer */}
          <div className="flex flex-col items-start gap-8">
            <p className="font-display uppercase text-2xl text-text">Still have a question?</p>
            <Button href={faq.cta.href}>{faq.cta.label}</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
