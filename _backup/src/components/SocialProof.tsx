import { motion } from "framer-motion";

const stats = [
  { value: "47+", label: "Brands Grown" },
  { value: "12M+", label: "Reach Generated" },
  { value: "₹4Cr+", label: "Revenue Driven" },
  { value: "3+", label: "Years Strong" },
];

const SocialProof = () => (
  <section className="border-y border-border bg-secondary/30">
    <div className="max-w-7xl mx-auto px-5 py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-heading text-3xl md:text-4xl font-extrabold gradient-text">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
