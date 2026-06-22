import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { ClientLogos } from "@/sections/ClientLogos";
import { About } from "@/sections/About";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Work } from "@/sections/Work";
import { Impact } from "@/sections/Impact";
import { Services } from "@/sections/Services";
import { HowWeWork } from "@/sections/HowWeWork";
import { Team } from "@/sections/Team";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { Insights } from "@/sections/Insights";
import { Marquee } from "@/sections/Marquee";
import { Footer } from "@/sections/Footer";
import { content } from "@/content";

export default function Home() {

  return (
    <main className="w-full relative">
      <Nav />
      <Hero />
      <ClientLogos />
      <About />
      <WhyChooseUs />
      <Work />
      <Impact />
      <Services />
      <HowWeWork />
      <Team />
      <Testimonials />
      <FAQ />
      <Insights />
      <Marquee />
      <Footer />
    </main>
  );
}
