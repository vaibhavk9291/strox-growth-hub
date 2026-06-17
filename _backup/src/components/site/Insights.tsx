import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { tag: "Design", title: "Why bento grids are dominating 2025 web design", read: "5 min read", date: "Mar 12" },
  { tag: "Performance", title: "Shipping 100/100 Lighthouse scores: our playbook", read: "8 min read", date: "Feb 28" },
  { tag: "Branding", title: "Building brands that feel premium without screaming", read: "6 min read", date: "Feb 14" },
];

const Insights = () => (
  <section id="insights" className="py-32 relative">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">// Insights</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight">
            Notes from <span className="text-gradient-animated">the studio.</span>
          </h2>
        </div>
        <a href="#" className="inline-flex items-center gap-2 hover:text-primary transition-colors group">
          Read all articles
          <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.a
            href="#"
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group glass rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 flex flex-col gap-6 noise-overlay"
          >
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-primary-glow/30 relative">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 bg-gradient-glow" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider">{p.tag}</div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{p.date} · {p.read}</p>
              <h3 className="font-display font-semibold text-xl leading-snug group-hover:text-primary transition-colors">
                {p.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors mt-auto">
              Read article
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
