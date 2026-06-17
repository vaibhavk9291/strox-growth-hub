import { motion } from "framer-motion";
import { Globe, Smartphone, TrendingUp, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Dental Website in About a Week",
    desc: "Conversion-focused clinic websites delivered fast, with inquiry funnels and appointment CTAs built in.",
  },
  {
    icon: TrendingUp,
    title: "Dentist Lead Generation",
    desc: "Meta and Google campaigns designed to bring high-intent local patients into your calendar.",
  },
  {
    icon: Smartphone,
    title: "Social Presence for Clinics",
    desc: "Done-for-you social media content and management built specifically for dental trust and patient education.",
  },
  {
    icon: Layers,
    title: "Complete Management Tool",
    desc: "Our star product: end-to-end management from appointment booking to automated patient reminders and follow-ups.",
  },
];

const Services = () => (
  <section id="services" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
          Services Built for <span className="gradient-text">Dental Scaling</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 group hover:glow-border transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
