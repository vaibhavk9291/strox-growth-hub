"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * A reusable hook to apply a subtle reveal animation on scroll.
 * Respects prefers-reduced-motion via gsap.matchMedia().
 * 
 * @param enableStagger If true, will stagger the children of the ref.
 * @returns A ref to attach to the container element.
 */
export function useReveal<T extends HTMLElement>(enableStagger: boolean = false) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Find targets: if stagger is enabled, animate children; otherwise, animate the element itself
      const targets = enableStagger && el.children.length > 0 ? el.children : el;
      
      gsap.fromTo(
        targets,
        { 
          y: 24, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: enableStagger && window.innerWidth >= 768 ? 0.08 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          }
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, [enableStagger]);

  return ref;
}
