import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container py-5">
        <nav className="glass rounded-full flex items-center justify-between pl-6 pr-2 py-2">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <img src="/logo.jpg" alt="Intellobyte" className="w-8 h-8 rounded-full object-cover" />
            <span>Intellobyte</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="https://wa.me/917666596339">
                Get a Quote <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <button className="md:hidden p-2 rounded-full bg-secondary" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
