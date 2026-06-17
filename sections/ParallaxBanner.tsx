export function ParallaxBanner() {
  return (
    <section className="w-full bg-transparent py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Phase 4: GSAP ScrollTrigger parallax effect will attach here */}
        <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-surface-2 duotone-filter rounded-xl border border-border overflow-hidden">
          {/* Phase 3: Real duotone wide image goes here */}
        </div>
      </div>
    </section>
  );
}
