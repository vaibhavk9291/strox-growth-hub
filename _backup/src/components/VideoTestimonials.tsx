import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    business: "FreshBite Foods, Mumbai",
    quote: "They turned our ₹2L ad spend into ₹18L revenue in just 60 days.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Priya Sharma",
    business: "UrbanNest Realty, Delhi",
    quote: "240+ qualified leads in our first quarter working together.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Arjun Kapoor",
    business: "LearnStack Academy, Pune",
    quote: "From 2K to 12K students — Intellobyte changed everything for us.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Sneha Reddy",
    business: "Café Mélange, Bangalore",
    quote: "Our Instagram went from dead to 45K followers. People come in saying they saw us online.",
    videoId: "dQw4w9WgXcQ",
  },
];

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section id="testimonials" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Don't Take Our Word For It
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveVideo(t.videoId)}
                className="glass-card overflow-hidden text-left group hover:glow-border transition-all duration-300"
              >
                <div className="relative aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground italic mb-3">"{t.quote}"</p>
                  <div className="font-heading text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.business}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-5"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-5 right-5 text-foreground hover:text-primary transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=1`}
                className="w-full h-full rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoTestimonials;
