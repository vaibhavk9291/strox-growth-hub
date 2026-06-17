import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            Dentist-Focused Digital Growth Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-balance text-foreground"
        >
          Dental Growth Systems
          <span className="gradient-text"> Delivered in About a Week.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We now focus primarily on helping dentists scale digitally.
          Our star product is an end-to-end practice management tool: appointment booking,
          automated reminders, patient follow-ups, and more.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto"
        >
          1-month free trial. Free setup. No credit card required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#work")}
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            See Our Work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto border border-border text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary transition-colors"
          >
            Book a Free Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
