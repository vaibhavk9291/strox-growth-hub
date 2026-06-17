import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ramaastra from "@/assets/projects/ramaastra.jpg";
import dypdsif from "@/assets/projects/dypdsif.jpg";
import chhaya from "@/assets/projects/chhaya.jpg";
import dentalcare from "@/assets/projects/dentalcare.jpg";

const projects = [
  {
    img: dypdsif,
    title: "DYP Dnyansagar Incubation Foundation",
    tag: "Education · Incubator Platform",
    year: "2025",
    href: "https://www.dypdsif.org",
  },
  {
    img: ramaastra,
    title: "RamaAstra Aerospace & Defence",
    tag: "Corporate · Aerospace",
    year: "2025",
    href: "https://www.ramaastra.com",
  },
  {
    img: chhaya,
    title: "Chhaya Dental Care",
    tag: "Healthcare · Clinic Website",
    year: "2025",
    href: "https://www.chhayaclinicanddentalcare.com/",
  },
  {
    img: dentalcare,
    title: "Dental Care Clinic",
    tag: "Healthcare · Booking Site",
    year: "2025",
    href: "https://5zvcgbdw247eu.ok.kimi.link/",
  },
];

const Work = () => (
  <section id="work" className="py-32 relative">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">// Selected work</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight">
            Projects we're <span className="text-gradient">proud of.</span>
          </h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
          Start your project
          <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            key={p.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl overflow-hidden glass"
          >
            <div className="aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-transparent to-primary/0 group-hover:from-primary/20 group-hover:to-accent/10 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 uppercase tracking-[0.2em]">{p.tag} · {p.year}</p>
                <h3 className="font-display font-semibold text-base sm:text-lg leading-tight group-hover:translate-x-1 transition-transform duration-500 truncate">{p.title}</h3>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45 transition-all duration-500">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
