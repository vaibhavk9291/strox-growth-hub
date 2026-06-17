"use client";

import Link from "next/link";
import { Link as LinkIcon, ArrowUpRight, ArrowRight } from "lucide-react";
import { content } from "@/content";
import { useReveal } from "@/lib/gsap";

export function Footer() {
  const { footer, nav } = content;
  const colsRef = useReveal<HTMLDivElement>(true);

  return (
    <footer className="w-full bg-transparent pt-24 pb-8 px-4 md:px-8 border-t border-border" id="footer">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col items-start gap-8 max-w-md">
            <div className="flex items-center gap-2">
              <LinkIcon className="w-6 h-6 text-accent" />
              <span className="font-display font-semibold text-2xl uppercase tracking-tight text-text">
                {nav.logo}
              </span>
            </div>
            
            <p className="font-display text-xl uppercase tracking-[-0.01em] text-text">
              {footer.statement}
            </p>

            <div className="mt-4 flex flex-col gap-4 w-full">
              <div>
                <h4 className="font-body font-medium uppercase tracking-widest text-sm text-text">{footer.newsletter.heading}</h4>
                <p className="font-body text-sm text-muted mt-1">{footer.newsletter.sub}</p>
              </div>
              <form className="flex flex-col sm:flex-row w-full mt-2 gap-2 sm:gap-0" suppressHydrationWarning>
                <input 
                  type="email" 
                  suppressHydrationWarning
                  placeholder={footer.newsletter.placeholder} 
                  className="flex-1 w-full bg-surface border border-border rounded-xl sm:rounded-r-none sm:rounded-l-full px-6 py-3 font-body text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors min-w-[44px]"
                />
                <button type="submit" suppressHydrationWarning className="flex items-center justify-center gap-2 w-full sm:w-auto bg-accent-dim border border-border sm:border-l-0 rounded-xl sm:rounded-l-none sm:rounded-r-full px-6 py-3 text-accent hover:bg-accent hover:text-black transition-colors font-body font-medium uppercase tracking-widest text-sm flex-shrink-0 min-h-[44px]">
                  {footer.newsletter.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
            
            <div className="mt-2 font-body text-sm text-muted flex flex-col gap-1">
              <p>{footer.contact.email} · {footer.contact.phone}</p>
              <p>{footer.contact.location}</p>
            </div>
          </div>

          {/* Right Column - Nav Grid */}
          <div ref={colsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:justify-items-end">
            {footer.columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-6 w-full lg:w-auto">
                <h4 className="font-body font-medium uppercase tracking-widest text-sm text-text">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="group flex items-center gap-1 font-body text-sm text-muted hover:text-accent transition-colors">
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Socials Column */}
            <div className="flex flex-col gap-6 w-full lg:w-auto">
              <h4 className="font-body font-medium uppercase tracking-widest text-sm text-text">
                Social
              </h4>
              <ul className="flex flex-col gap-4">
                {footer.social.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-body text-sm text-muted hover:text-accent transition-colors">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border font-body text-xs text-muted uppercase tracking-widest">
          <p>{footer.legal.copyright}</p>
          <ul className="flex items-center gap-6">
            {footer.legal.links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
