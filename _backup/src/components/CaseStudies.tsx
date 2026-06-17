import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "FreshBite Foods",
    industry: "D2C",
    service: "Meta Ads + Website",
    metrics: ["3.2× ROAS", "₹18L Revenue", "60 Days"],
    color: "from-primary/20 to-accent/10",
  },
  {
    client: "UrbanNest Realty",
    industry: "Real Estate",
    service: "Social Media + Lead Gen",
    metrics: ["240+ Leads", "₹2.1Cr Pipeline", "90 Days"],
    color: "from-accent/20 to-primary/10",
  },
  {
    client: "LearnStack Academy",
    industry: "EdTech",
    service: "Full Digital Presence",
    metrics: ["180% Growth", "12K Students", "6 Months"],
    color: "from-primary/20 to-primary/5",
  },
  {
    client: "Café Mélange",
    industry: "Restaurant",
    service: "Social Media Management",
    metrics: ["45K Followers", "3× Footfall", "4 Months"],
    color: "from-accent/15 to-accent/5",
  },
  {
    client: "StyleVault",
    industry: "Fashion D2C",
    service: "Website + Ads",
    metrics: ["5.1× ROAS", "₹32L Revenue", "3 Months"],
    color: "from-primary/15 to-accent/10",
  },
  {
    client: "FitForge Gym",
    industry: "Fitness",
    service: "Social Media Marketing",
    metrics: ["800+ Leads", "62% Conv.", "2 Months"],
    color: "from-accent/20 to-primary/5",
  },
];

const CaseStudies = () => (
  <section id="work" className="section-padding bg-secondary/20">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Work</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
          Results We're <span className="gradient-text">Proud Of</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cases.map((c, i) => (
          <motion.div
            key={c.client}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card overflow-hidden group hover:glow-border transition-all duration-300"
          >
            <div className={`h-32 bg-gradient-to-br ${c.color} flex items-end p-5`}>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-background/60 backdrop-blur text-foreground">
                {c.industry}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold">{c.client}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{c.service}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1.5 rounded-md bg-primary/10 text-primary text-sm font-bold"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
