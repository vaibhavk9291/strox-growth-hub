import { motion } from "framer-motion";
import { BarChart3, UserCheck, Clock, Target } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Launch in About a Week", desc: "Most core delivery goes live in roughly 7 days so you can start seeing momentum fast." },
  { icon: UserCheck, title: "Dentist-First Strategy", desc: "We are now focused primarily on dentists and solving dental digital scaling challenges." },
  { icon: BarChart3, title: "End-to-End Clinic Management", desc: "From appointment booking to patient reminders, follow-ups, and retention workflows." },
  { icon: Target, title: "1-Month Free Trial", desc: "Free setup, no credit card required, and no risk to test the complete system." },
];

const WhyStrox = () => (
  <section id="why" className="section-padding bg-secondary/20">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Us</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
          Why Brands Choose <span className="gradient-text">Intellobyte</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyStrox;
