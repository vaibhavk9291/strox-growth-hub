import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a typical project take?", a: "Most websites launch in 4–8 weeks depending on scope. Branding projects average 3–4 weeks. We'll give you a precise timeline after the discovery call." },
  { q: "What's your pricing model?", a: "We offer fixed-price project packages and monthly retainers. Most websites range from $8K–$50K depending on complexity. Book a call for a tailored quote." },
  { q: "Do you offer ongoing support after launch?", a: "Absolutely. We offer maintenance retainers covering updates, performance monitoring, A/B testing, and continuous design improvements." },
  { q: "Which tools and tech stacks do you use?", a: "React, Next.js, Webflow, Shopify, Framer, Tailwind, and headless CMS like Sanity or Contentful. We pick the right stack for your goals." },
  { q: "Can you work with our existing brand?", a: "Yes — we adapt to your guidelines or refresh them. Many clients come to us for both branding and web in one engagement." },
  { q: "Do you work with international clients?", a: "We've shipped projects in 32+ countries and run async-friendly workflows across time zones." },
];

const FAQ = () => (
  <section id="faq" className="py-32 relative">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">// FAQ</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Questions, <span className="text-gradient-animated">answered.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Everything you need to know before we start working together.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl border-0 px-6 data-[state=open]:border-primary/40 data-[state=open]:border transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FAQ;
