import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94779958097"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1F6BFF] flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{ boxShadow: '0 0 20px rgba(31,107,255,0.5)' }}
    >
      <MessageCircle size={26} className="text-white" />
      <span className="absolute inset-0 rounded-full bg-[#1F6BFF] animate-ping opacity-20" />
    </a>
  );
}
