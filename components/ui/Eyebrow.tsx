import { Link as LinkIcon } from "lucide-react";

export function Eyebrow({ children, variant = 'white' }: { children: React.ReactNode, variant?: 'white' | 'accent' }) {
  const colorClass = variant === 'accent' ? 'text-accent border-accent/20' : 'text-text border-border';
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${colorClass} font-body font-medium uppercase tracking-[0.1em] text-[12px]`}>
      <LinkIcon className="w-3 h-3" />
      {children}
    </div>
  );
}
