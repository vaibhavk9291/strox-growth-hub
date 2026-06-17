'use client';

import { useEffect, useRef, useState } from 'react';

export function Cursor({ enabled }: { enabled: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!enabled) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    
    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    setIsVisible(true);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      
      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    const rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!isVisible || !enabled) return null;

  return (
    <>
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[9999] -ml-4 -mt-4 hidden lg:block"
      />
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[10000] -ml-1 -mt-1 hidden lg:block"
      />
    </>
  );
}
