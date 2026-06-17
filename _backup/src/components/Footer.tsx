import { Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border px-5 py-12">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <span className="font-heading text-xl font-bold">
          <span className="gradient-text">Intellobyte</span>
        </span>
        <p className="mt-3 text-sm text-muted-foreground">
          We Don't Just Grow Brands. We Build Legacies.
        </p>
      </div>

      <div>
        <h4 className="font-heading font-bold mb-3 text-sm">Navigation</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Services", "Work", "Testimonials", "Contact"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-bold mb-3 text-sm">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Website Development</li>
          <li>Social Media Marketing</li>
          <li>Social Media Management</li>
          <li>Full Digital Presence</li>
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-bold mb-3 text-sm">Get In Touch</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <a href="mailto:hello@intellobyte.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" /> hello@intellobyte.com
          </a>
          <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" /> +91 7028208635, +91 7666596339
          </a>
        </div>
        <div className="flex gap-3 mt-4">
          {[
            { icon: Instagram, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Youtube, href: "#" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={Icon.displayName}
              href={href}
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © 2025 Intellobyte. All rights reserved.
    </div>
  </footer>
);

export default Footer;
