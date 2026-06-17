import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 30, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    setIsDesktop(mq.matches);
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role='button'], input, textarea, [data-cursor='hover']"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        style={{ translateX: sx, translateY: sy, opacity: visible ? 1 : 0 }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hovering ? 2.5 : 1, opacity: hovering ? 0.5 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-3 h-3 rounded-full bg-white"
        />
      </motion.div>
      <motion.div
        style={{ translateX: sx, translateY: sy, opacity: visible ? 1 : 0 }}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 1.4 : 1, borderColor: hovering ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.4)" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-10 h-10 rounded-full border"
        />
      </motion.div>
      <style>{`@media (min-width: 1024px) and (pointer: fine) { * { cursor: none !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
