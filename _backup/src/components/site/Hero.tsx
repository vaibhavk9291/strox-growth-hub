import { motion, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star, Sparkles } from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";
import { useEffect } from "react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const sy = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const meshX = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const meshY = useTransform(sy, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden noise-overlay">
      <div className="absolute inset-0 grid-pattern opacity-40 reveal-mask" />
      <div className="absolute inset-0 bg-gradient-glow" />

      {/* Animated blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />

      <motion.div
        style={{ x: meshX, y: meshY }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%] opacity-70 pointer-events-none"
      >
        <img
          src={heroMesh}
          alt=""
          className="w-full h-full object-cover [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
          width={1920}
          height={1280}
        />
      </motion.div>

      <div className="container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted-foreground mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for new projects · 2026
          </motion.div>

          <motion.h1 variants={item} className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            We craft<br />
            <span className="text-gradient-animated">digital experiences</span><br />
            that convert.
          </motion.h1>

          <motion.p variants={item} className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Intellobyte is a premium web design & branding studio building polished, high-performing websites for ambitious brands worldwide.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href={`https://wa.me/917666596339?text=${encodeURIComponent("Hi Intellobyte! I'm interested in starting a project. Could we schedule a 30-minute call to discuss scope, timeline and budget? My name: ")}`}
              >
                Start a Project <ArrowUpRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#work">See Our Work</a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground"><span className="text-foreground font-semibold">5.0</span> · 50+ reviews</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">100+</span> websites delivered
            </div>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;
