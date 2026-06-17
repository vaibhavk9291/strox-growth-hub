import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hi Intellobyte! I found your website and would like to discuss digital growth services."
);

const FloatingContact: React.FC = () => {
  return (
    <>
      {/* WhatsApp: bottom-left */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative w-14 h-14">
          <a
            href={`https://wa.me/917666596339?text=${whatsappMessage}`}
            aria-label="Chat on WhatsApp"
            className="absolute inset-0 rounded-full glass flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
          >
            {/* Icon with glass styling */}
            <MessageCircle className="w-6 h-6 text-primary drop-shadow-lg opacity-90" />
          </a>
          {/* Small persistent indicator dot */}
          <span className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_rgba(201,169,97,0.18)]" aria-hidden="true" />
        </div>
      </div>

      {/* Call: bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative w-14 h-14">
          <a
            href={`tel:+917666596339`}
            aria-label="Call us"
            className="absolute inset-0 rounded-full glass flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Phone className="w-6 h-6 text-accent drop-shadow-lg opacity-90" />
          </a>
          <span className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(76,29,149,0.12)]" aria-hidden="true" />
        </div>
      </div>
    </>
  );
};

export default FloatingContact;
