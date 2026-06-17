import { MessageCircle } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hi Intellobyte! I found your website and would like to discuss digital growth services: https://intellobyte.com"
);

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6 text-accent-foreground" />
  </a>
);

export default WhatsAppButton;
