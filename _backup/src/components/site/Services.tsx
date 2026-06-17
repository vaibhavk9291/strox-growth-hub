import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Search, Palette, Smartphone, ShoppingCart, Sparkles } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const services = [
  { icon: Code2, title: "Web Design & Development", desc: "Pixel-perfect, lightning-fast websites built with modern stacks like React, Next.js & Webflow.", tags: ["React", "Next.js", "Webflow"], size: "lg" },
  { icon: Palette, title: "Branding & Identity", desc: "Logos, visual systems and guidelines that make brands unforgettable.", tags: ["Logo", "Guidelines"], size: "sm" },
  { icon: Search, title: "SEO & Optimization", desc: "Rank higher on Google with technical SEO and content strategy.", tags: ["Technical", "Content"], size: "sm" },
  { icon: ShoppingCart, title: "E-commerce", desc: "Shopify, Stripe & custom storefronts that turn visitors into buyers at scale.", tags: ["Shopify", "Stripe", "Custom"], size: "md" },
  { icon: Smartphone, title: "Mobile Experiences", desc: "Responsive interfaces and native-feeling PWAs for any device.", tags: ["PWA", "iOS"], size: "md" },
  { icon: Sparkles, title: "Digital Strategy", desc: "Roadmaps, analytics and growth experiments that move metrics.", tags: ["Analytics", "Growth"], size: "sm" },
] as const;

const sizeMap: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-1 md:row-span-2",
  sm: "md:col-span-1 md:row-span-1",
};

const Services = () => (
  <section id="services" className="py-32 relative">
    <div className="container">
      <div className="max-w-3xl mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">// Services</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight">
          Everything you need to <span className="text-gradient-animated">stand out online.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          A full-service studio bringing strategy, design and engineering under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <SpotlightCard className="h-full min-h-[220px] p-8 hover:border-primary/40 transition-colors duration-500 cursor-pointer flex flex-col justify-between">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-[0_8px_30px_hsl(var(--primary)/0.3)]">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
