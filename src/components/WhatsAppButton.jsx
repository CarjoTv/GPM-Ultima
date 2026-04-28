import { Phone } from 'lucide-react';
import { contactInfo } from '../constants/shared';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
