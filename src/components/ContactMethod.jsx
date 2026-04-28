import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../constants/shared';

export function WhatsAppContact() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors"
    >
      <Phone className="h-6 w-6" />
      <span className="font-bold">WhatsApp: {contactInfo.whatsapp}</span>
    </a>
  );
}

export function PhoneContact({ phone }) {
  return (
    <div className="flex items-center gap-4 text-white/70 p-4">
      <Phone className="h-6 w-6" />
      <span className="font-medium">Línea GNP: {phone}</span>
    </div>
  );
}
