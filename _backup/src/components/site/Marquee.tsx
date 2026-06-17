const logos = [
  "TechCorp", "Lumina", "Northwind", "Helio", "Vertex", "Quantum", "Atlas Co.", "Nova Labs", "Orbit", "Zenith",
];

const Marquee = () => (
  <section className="py-14 border-y border-border/50 overflow-hidden relative">
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
      Trusted by forward-thinking brands worldwide
    </p>
    <div className="flex animate-marquee whitespace-nowrap">
      {[...logos, ...logos].map((logo, i) => (
        <span key={i} className="mx-12 text-2xl font-display font-semibold text-muted-foreground/50 hover:text-foreground transition-colors">
          {logo}
        </span>
      ))}
    </div>
  </section>
);

export default Marquee;
