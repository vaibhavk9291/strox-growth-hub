import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Mail, MapPin, Clock, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const company = String(fd.get("company") || "");
    const budget = String(fd.get("budget") || "");
    const message = String(fd.get("message") || "");

    if (!name || !email || !message) {
      toast.error("Please fill in name, email, and message.");
      setLoading(false);
      return;
    }

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nBudget: ${budget}\n\n${message}`
    );
    window.location.href = `mailto:hello@intellobyte.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">// Get in touch</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Let's create <span className="text-gradient-animated">something great.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Tell us about your project — we typically reply within 24 hours.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                  <a href="mailto:hello@intellobyte.com" className="font-medium hover:text-primary transition-colors">hello@intellobyte.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+917666596339" className="font-medium hover:text-primary transition-colors block">+91 76665 96339</a>
                  <a href="tel:+917028208635" className="font-medium hover:text-primary transition-colors block">+91 70282 08635</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Studio</p>
                  <p className="font-medium">Working globally · Remote-first</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Response time</p>
                  <p className="font-medium">Within 24 hours, Mon–Fri</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 glass rounded-3xl p-8 sm:p-10 space-y-5 noise-overlay"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" placeholder="Jane Doe" className="bg-background/50 h-12" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" placeholder="jane@company.com" className="bg-background/50 h-12" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Acme Inc." className="bg-background/50 h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="" disabled>Select a range</option>
                  <option value="<10k">Less than $10K</option>
                  <option value="10-25k">$10K – $25K</option>
                  <option value="25-50k">$25K – $50K</option>
                  <option value="50k+">$50K+</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Project details *</Label>
              <Textarea id="message" name="message" placeholder="Tell us about your goals, timeline, and what success looks like…" className="bg-background/50 min-h-[140px]" required />
            </div>
            <Button type="submit" variant="hero" size="xl" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Sending…" : "Send Message"} <ArrowUpRight className="ml-1 h-5 w-5" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
