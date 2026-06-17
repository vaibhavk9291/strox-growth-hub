import AboutUs from "@/components/site/AboutUs";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Stats from "@/components/site/Stats";
import Services from "@/components/site/Services";
import Work from "@/components/site/Work";


import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import ScrollProgress from "@/components/site/ScrollProgress";
import CustomCursor from "@/components/site/CustomCursor";
import SmoothScroll from "@/components/site/SmoothScroll";
import PageLoader from "@/components/site/PageLoader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageLoader />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Testimonials />
        <Work />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
