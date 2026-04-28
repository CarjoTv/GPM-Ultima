import { Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../constants/shared';

export default function ContactCTA({ whatsappMessage = 'Hola,%20quisiera%20información%20sobre%20seguros' }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-primary rounded-2xl md:rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden border border-gold/20">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 md:w-64 h-48 md:h-64 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6">¿Listo para sentirte protegido?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Cotiza el seguro que necesitas en menos de 2 minutos y recibe asesoría inmediata de nuestros expertos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-gold text-primary px-8 md:px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all shadow-lg"
            >
              Solicitar Cotización
            </Link>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 md:px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Chatear por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
