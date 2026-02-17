import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919133033225"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-primary-foreground shadow-lg transition-transform hover:scale-110 diya-glow"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsApp;
