import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const isGhost = variant === "ghost";
  
  return (
    <Link 
      href={href} 
      className={`group inline-flex items-center gap-2 transition-colors font-body font-medium uppercase tracking-widest text-sm ${
        isGhost 
          ? "text-text hover:text-accent py-3" 
          : "px-6 py-3 rounded-full border border-border bg-accent-dim text-accent hover:bg-accent hover:text-black"
      }`}
    >
      {children}
      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isGhost ? "group-hover:translate-x-1" : ""}`} />
    </Link>
  );
}
