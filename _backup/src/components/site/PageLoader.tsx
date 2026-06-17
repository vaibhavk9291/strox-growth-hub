import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
      setPct(Math.floor(p));
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <img src="/logo.jpg" alt="Intellobyte" className="w-12 h-12 rounded-full object-cover animate-pulse-glow" />
            <span className="font-display font-bold text-2xl">
              Intellobyte
            </span>
          </motion.div>

          <div className="w-64 h-px bg-border overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
          <div className="mt-4 font-display tabular-nums text-sm text-muted-foreground">
            {pct.toString().padStart(3, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
