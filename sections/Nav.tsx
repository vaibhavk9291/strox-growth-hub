"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { content } from "@/content";
import { ContactModal } from "@/components/ui/ContactModal";

export function Nav() {
  const { nav } = content;
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy based on sections
      const sections = nav.links.map(l => l.href.substring(1)).filter(Boolean);
      let current = "#home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = `#${section}`;
        }
      }
      setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nav.links]);

  // Body scroll lock and focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
          toggleBtnRef.current?.focus();
        }
      };
      
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  // The requested design has a fully consistent bar that spans the top, but hides at the very start
  return (
    <>
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || isMobileMenuOpen ? 'bg-bg/95 backdrop-blur-lg shadow-xl border-b border-white/5 py-4 translate-y-0 opacity-100' : 'bg-transparent py-6 -translate-y-full opacity-0 pointer-events-none'}`}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-1.5 pointer-events-auto z-[60]">
          {/* Yellow Pill Shape */}
          <div className="w-8 h-4 border-[2.5px] border-accent rounded-full" />
          {/* Yellow Square Dot */}
          <div className="w-1.5 h-1.5 bg-accent" />
          {/* Text */}
          <Link href="/" onClick={() => { setActiveLink("#home"); setIsMobileMenuOpen(false); }} className="font-display font-bold text-2xl uppercase tracking-wide text-accent ml-1 mt-[-2px]">
            {nav.logo}
          </Link>
        </div>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14 pointer-events-auto">
          {nav.links.map((link, i) => {
            const isActive = activeLink === link.href;
            return (
              <Link 
                key={i} 
                href={link.href} 
                onClick={() => setActiveLink(link.href)}
                className="group flex items-center gap-2 text-[13px] font-body text-white uppercase tracking-[0.15em] hover:text-white transition-colors"
              >
                {/* Active indicator box */}
                <span className={`w-2 h-2 transition-colors ${isActive ? 'bg-accent' : 'bg-transparent border-[1.5px] border-accent group-hover:bg-accent/40'}`} />
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden md:flex items-center pointer-events-auto">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="flex items-center gap-2 border border-accent/30 bg-[#1A1A0F]/50 backdrop-blur-sm rounded-none px-6 py-3 text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-accent/10 transition-colors"
          >
            {nav.cta.label}
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          ref={toggleBtnRef}
          className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] pointer-events-auto z-[60] text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE OVERLAY MENU */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 bg-bg z-40 flex flex-col pt-32 px-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden overflow-y-auto`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col gap-8 items-start w-full">
          {nav.links.map((link, i) => {
            const isActive = activeLink === link.href;
            return (
              <Link 
                key={i} 
                href={link.href} 
                onClick={() => { setActiveLink(link.href); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-4 text-3xl font-display text-white uppercase tracking-wider hover:text-accent transition-colors w-full min-h-[44px]"
              >
                <span className={`w-3 h-3 transition-colors ${isActive ? 'bg-accent' : 'bg-transparent border-2 border-accent'}`} />
                {link.label}
              </Link>
            )
          })}
        </nav>
        
        <div className="mt-auto pt-12 w-full">
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsContactModalOpen(true);
            }}
            className="flex items-center justify-center w-full gap-2 border border-accent/30 bg-[#1A1A0F] px-6 py-4 text-accent text-sm font-bold uppercase tracking-widest hover:bg-accent/10 transition-colors min-h-[44px]"
          >
            {nav.cta.label}
          </button>
        </div>
      </div>
    </header>
    {/* MODAL rendered outside the header so it avoids transform stacking context */}
    <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
