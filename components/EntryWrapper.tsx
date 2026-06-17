'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'
import { content } from "@/content"

interface EntryWrapperProps {
  children: React.ReactNode;
}

export function EntryWrapper({ children }: EntryWrapperProps) {
  const [startVisible, setStartVisible] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  
  const handleEnter = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      setHasEntered(true)
    }, 1000) // 1 second fade out duration
  }
  
  // Fade in the start button after animation loads and scroll to top
  useEffect(() => {
    // Immediately force scroll to top (the Hero section) so when they hit enter, they are at the top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Prevent scrolling while in the entry animation
    if (!hasEntered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const timer = setTimeout(() => {
      setStartVisible(true)
    }, 2000)
    
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "";
    }
  }, [hasEntered])
  
  if (hasEntered) {
    return <>{children}</>
  }

  return (
    <>
      <div 
        className={`fixed inset-0 w-full h-full overflow-hidden bg-[#0F0F0A] z-[9999] transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Spiral Animation */}
        <div className="absolute inset-0">
          <SpiralAnimation />
        </div>
        
        {/* Simple Elegant Text Button with Pulsing Effect */}
        <div 
          className={`
            absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-10
            transition-all duration-1500 ease-out flex flex-col items-center gap-8
            ${startVisible && !isFadingOut ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          {/* Intellobyte Round Yellow Logo */}
          <div className="flex items-center justify-center gap-1.5 animate-pulse drop-shadow-[0_0_15px_rgba(230,255,0,0.5)]">
             <div className="w-10 h-5 border-[3px] border-accent rounded-full" />
             <div className="w-2 h-2 bg-accent" />
             <span className="font-display font-bold text-3xl uppercase tracking-wide text-accent ml-2">{content.nav.logo}</span>
          </div>

          <button 
            onClick={handleEnter}
            className="
              text-white text-2xl tracking-[0.2em] uppercase font-extralight
              transition-all duration-700
              hover:tracking-[0.3em] hover:text-accent animate-pulse
            "
          >
            Enter
          </button>
        </div>
      </div>
      
      {/* Pre-render children behind so it's ready, but hidden from screen readers/interaction if needed. Or just render normally behind the fixed full screen div */}
      <div className={isFadingOut ? "" : "invisible"}>
        {children}
      </div>
    </>
  )
}
