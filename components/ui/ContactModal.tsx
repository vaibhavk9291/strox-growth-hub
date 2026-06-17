"use client";

import { X } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md w-full animate-in fade-in zoom-in-95 duration-200">
        <GlowCard className="bg-surface border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="mb-8">
            <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight mb-2">
              Let's Talk
            </h3>
            <p className="font-body text-sm text-muted">
              Leave your details below and we'll get back to you shortly.
            </p>
          </div>
          
          <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-body text-xs uppercase tracking-widest text-muted">Name *</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-surface-2 border border-white/10 rounded-lg px-4 py-3 font-body text-white placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-body text-xs uppercase tracking-widest text-muted">Email *</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-surface-2 border border-white/10 rounded-lg px-4 py-3 font-body text-white placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-body text-xs uppercase tracking-widest text-muted">Message (Optional)</label>
              <textarea 
                id="message" 
                rows={3}
                className="w-full bg-surface-2 border border-white/10 rounded-lg px-4 py-3 font-body text-white placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <button 
              type="submit"
              className="mt-4 w-full bg-accent text-[#1A1A0F] font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Submit
            </button>
          </form>
        </GlowCard>
      </div>
    </div>
  );
}
