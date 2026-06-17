const brands = [
  "FreshBite", "UrbanNest", "LearnStack", "Café Mélange",
  "StyleVault", "FitForge", "NovaTech", "GreenLeaf",
  "BlueWave", "Pinnacle", "CraftBrew", "PixelPerfect",
];

const ClientLogos = () => (
  <section className="py-12 border-y border-border overflow-hidden">
    <div className="text-center mb-8">
      <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
        Trusted By Growing Brands
      </span>
    </div>
    <div className="relative">
      <div className="flex marquee whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className="mx-8 font-heading text-xl font-bold text-muted-foreground/40 shrink-0"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
