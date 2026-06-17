import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 130, suffix: "+", label: "Projects shipped" },
  { value: 240, suffix: "%", label: "Avg. revenue lift" },
  { value: 1, suffix: "yr+", label: "Experience" },
  { value: 15, suffix: "+", label: "Businesses served" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => (
  <section className="py-20 relative">
    <div className="container">
      <div className="relative glass rounded-3xl p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center sm:text-left group"
          >
            <div className="font-display font-bold text-4xl sm:text-5xl text-gradient-animated mb-2 tabular-nums">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            <div className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
