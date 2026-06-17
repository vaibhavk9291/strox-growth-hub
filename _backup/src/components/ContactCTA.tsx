import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactCTA = () => {
  const [form, setForm] = useState({ name: "", business: "", service: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Intellobyte! I'm ${form.name} from ${form.business}. Interested in: ${form.service}. Contact: ${form.phone}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Ready to <span className="gradient-text">Scale Your Dental Practice?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Book your free demo of our complete management tool.
            One month free trial, free setup, and no credit card required.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <input
              type="text"
              placeholder="Business Name"
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">Service Interested In</option>
            <option>Dental Website (about 1 week delivery)</option>
            <option>Dentist Lead Generation</option>
            <option>Dental Social Media Management</option>
            <option>Complete Management Tool (Booking + Reminders)</option>
          </select>
          <input
            type="tel"
            placeholder="Phone / WhatsApp Number"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            <Send className="w-4 h-4" /> Start Free Demo
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactCTA;
