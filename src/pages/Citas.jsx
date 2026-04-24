import { motion } from 'motion/react';
import { InlineWidget } from 'react-calendly';
import { Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactInfo = {
  whatsapp: '+5216672524470'
};

export default function Citas() {
  return (
    <div className="flex flex-col w-full pb-24 bg-off-white">
      <section className="bg-primary py-16 md:py-24 mb-16 md:mb-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-headline tracking-tighter uppercase">
              AGENDA <span className="text-gold">TU CITA</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium max-w-xl mx-auto">
              Reserva una consulta personalizada con nuestros asesores especializados.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="bg-primary p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-white border border-white/5 shadow-3xl">
              <Calendar className="w-12 h-12 text-gold mb-6" />
              <h3 className="text-2xl font-black mb-4 font-headline uppercase tracking-tighter">¿Cómo funciona?</h3>
              <ul className="space-y-4 text-white/70 font-medium">
                <li className="flex items-start gap-3">
                  <span className="bg-gold text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0">1</span>
                  Selecciona el tipo de consulta que necesitas
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-gold text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0">2</span>
                  Elige fecha y hora disponible
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-gold text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0">3</span>
                  Confirma tus datos de contacto
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-gold text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0">4</span>
                  Recibe confirmación instantánea
                </li>
              </ul>
            </div>

            <div className="bg-beige p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-primary/5">
              <h3 className="text-xl font-black text-primary mb-6 font-headline uppercase tracking-tighter">
                O Agenda por WhatsApp
              </h3>
              <p className="text-charcoal/70 mb-6 text-sm font-medium">
                ¿Prefieres una atención más inmediata? Chatea con nosotros directamente.
              </p>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hola,%20quisiera%20agendar%20una%20cita%20de%20asesor%C3%ADa`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar por WhatsApp
              </a>
              <p className="text-charcoal/50 text-xs text-center mt-4">
                Respuesta inmediata en horario laboral
              </p>
            </div>

            <div className="bg-gold/10 p-8 rounded-[2rem] border border-gold/20">
              <p className="text-charcoal/70 font-medium text-sm">
                ¿Prefieres contactar diretamente? 
                <Link to="/contacto" className="text-primary font-bold hover:underline ml-1">
                  Escríbenos aquí
                </Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-[2.5rem] shadow-4xl border border-primary/5 overflow-hidden">
              <InlineWidget 
                url="https://calendly.com/anthonyolguinb" 
                styles={{ height: '700px' }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  textColor: '1a3566',
                  primaryColor: 'c8820a'
                }}
              />
            </div>
            <p className="text-center text-charcoal/50 text-xs mt-4 font-medium">
              Powered by Calendly
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}