import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, MessageCircle, Clock, ArrowRight, Phone as PhoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactInfo = {
  whatsapp: '+5216672524470',
  phone: '55 5227 9000'
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full pb-24 bg-off-white">
      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>

      <section className="bg-primary py-16 md:py-24 mb-16 md:mb-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 font-headline tracking-tighter uppercase">
              ESTAMOS <span className="text-gold">CONTIGO</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium max-w-xl mx-auto">
              Contáctanos para resolver todas tus dudas sobre seguros.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex flex-col gap-4">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center text-gold shadow-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-primary text-lg mb-1 font-headline">Teléfono</h3>
                  <p className="text-charcoal/70 text-sm font-medium">Oficina: {contactInfo.phone}</p>
                  <p className="text-charcoal/70 text-sm font-medium">Urgencias: <span className="text-primary font-bold">24 HORAS</span></p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center text-gold shadow-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-primary text-lg mb-1 font-headline">Email</h3>
                  <p className="text-charcoal/70 text-sm font-medium">contacto@gpm.com.mx</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center text-gold shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-primary text-lg mb-1 font-headline">Dirección</h3>
                  <p className="text-charcoal/70 text-sm font-medium">Sinaloa, México</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center text-gold shadow-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-primary text-lg mb-1 font-headline">Atención</h3>
                  <p className="text-charcoal/70 text-sm font-medium">L-V: 08:30 - 20:00</p>
                  <p className="text-charcoal/70 text-sm font-medium">Sábados: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-black text-primary mb-6 text-center">¿Cómo prefieres contactarnos?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/citas" className="bg-primary p-5 rounded-xl text-white text-center hover:bg-charcoal transition-all group flex flex-col items-center">
                <Calendar className="h-8 w-8 mb-3 text-gold" />
                <h3 className="font-black">Agenda tu Cita</h3>
                <p className="text-white/70 text-xs mt-1">Reserva online</p>
              </Link>
              
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hola,%20quisiera%20información%20sobre%20seguros`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-5 rounded-xl text-white text-center hover:bg-green-600 transition-all group flex flex-col items-center"
              >
                <MessageCircle className="h-8 w-8 mb-3" />
                <h3 className="font-black">Por WhatsApp</h3>
                <p className="text-white/80 text-xs mt-1">Chatea con nosotros</p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}