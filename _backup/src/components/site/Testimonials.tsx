import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videoTestimonials = [
  {
    name: "Om Bansod",
    info: "Founder, Yodha Electronics, Delhi",
    youtube: "https://youtube.com/shorts/TgLFFcrBoNU",
    quote: "We saw a 3x increase in leads after the campaign.",
  },
  {
    name: "Nakul Reddy",
    info: "Founder, RamXR",
    youtube: "https://youtube.com/shorts/ABCIhXdDL6s",
    quote: "Our product launch was a hit thanks to their creative team.",
  },
  {
    name: "Tanmay & Sankalp",
    info: "Founders, Local Pet Grooming Business",
    youtube: "https://youtube.com/shorts/3q-bCrGhEio",
    quote: "Our bookings doubled and our brand is now recognized locally.",
  },
  {
    name: "Aditya Bisht",
    info: "Founder and Organizer, API Community",
    youtube: "https://youtube.com/shorts/0vbRj3fi--M",
    quote: "Intellobyte helped us scale our developer events to 10x the reach.",
  },
];

const VideoTestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center relative px-0 sm:px-0">
      {/* Carousel with arrows outside the video frame */}
      <div className="relative w-full flex items-center justify-center px-3 sm:px-0">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!emblaApi}
          className="flex items-center justify-center absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/95 border border-border rounded-full shadow-lg p-2 transition-all duration-200 focus:ring-2 focus:ring-primary disabled:opacity-50"
          aria-label="Previous video"
          style={{ zIndex: 20 }}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <div className="w-full">
          <div ref={emblaRef} className="overflow-hidden w-full">
            <div className="flex">
              {videoTestimonials.map((video, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-full flex flex-col items-center"
                >
                  <div className="w-full max-w-[260px] aspect-[9/16] rounded-xl shadow-xl bg-black overflow-hidden flex items-center justify-center mx-auto">
                    <iframe
                      src={video.youtube.replace('/shorts/', '/embed/')}
                      title={`Testimonial from ${video.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full min-h-[180px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 text-center px-2 max-w-xs">
                    <div className="font-semibold text-base text-foreground">{video.name}</div>
                    <div className="text-xs text-muted-foreground mb-1">{video.info}</div>
                    <div className="italic text-primary/90 text-sm">"{video.quote}"</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <button
          type="button"
          onClick={scrollNext}
          disabled={!emblaApi}
          className="flex items-center justify-center absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/95 border border-border rounded-full shadow-lg p-2 transition-all duration-200 focus:ring-2 focus:ring-primary disabled:opacity-50"
          aria-label="Next video"
          style={{ zIndex: 20 }}
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
      {/* Dots for mobile, hidden on desktop */}
      <div className="flex justify-center gap-2 mt-6 lg:hidden">
        {videoTestimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to video ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 w-6 rounded-full transition-all duration-200 ${selected === i ? "bg-primary" : "bg-muted-foreground/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="container mb-16">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">// Video Testimonials</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight">
          Real stories from <span className="text-gradient">our clients</span>
        </h2>
      </div>
    </div>
    <VideoTestimonialsCarousel />
  </section>
);

export default Testimonials;