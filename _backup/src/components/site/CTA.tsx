import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => (
  <section className="py-32 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.5rem] overflow-hidden glass p-12 sm:p-20 text-center noise-overlay"
      >
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="absolute inset-0 grid-pattern opacity-30 reveal-mask" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-primary/30 blur-[100px] animate-blob" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px] animate-blob" style={{ animationDelay: "3s" }} />
        <div className="relative">
          <h2 className="font-display font-bold text-4xl sm:text-7xl leading-[0.95] max-w-4xl mx-auto">
            Ready to build something <span className="text-gradient-animated">unforgettable?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Let's talk about your project. Free 30-minute strategy call, no strings attached.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href={`https://wa.me/917666596339?text=${encodeURIComponent("Hi Intellobyte! I'm interested in starting a project. Could we schedule a 30-minute call to discuss scope, timeline and budget? My name: ")}`}
              >
                Start a Project <ArrowUpRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl">hello@intellobyte.com</Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
