import { motion } from 'motion/react';
import { InlineWidget } from 'react-calendly';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Citas() {
  return (
    <div className="flex flex-col w-full pb-24 bg-neutral">
      <section className="bg-primary py-16 md:py-24 mb-16 md:mb-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-tertiary)_0%,_transparent_70%)] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 font-headline tracking-tighter uppercase">AGENDA <span className="text-tertiary">TU CITA</span></h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium">
              Reserva una consulta personalizada con nuestros asesores especializados en seguros y protección patrimonial.
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
            <div className="bg-primary p-10 rounded-[2.5rem] text-white border border-white/5 shadow-3xl">
              <Calendar className="w-12 h-12 text-tertiary mb-6" />
              <h3 className="text-2xl font-black mb-4 font-headline uppercase tracking-tighter">¿Cómo funciona?</h3>
              <ul className="space-y-4 text-white/70 font-medium">
                <li className="flex items-start gap-3">
                  <span className="bg-tertiary text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0">1</span>
                  Selecciona el tipo de consulta que necesitas
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tertiary text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0">2</span>
                  Elige fecha y hora disponible
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tertiary text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0">3</span>
                  Confirma tus datos de contacto
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tertiary text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0">4</span>
                  Recibe confirmación instantánea
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-primary/5 shadow-4xl">
              <h3 className="text-xl font-black text-primary mb-4 font-headline uppercase tracking-tighter">Tipos de Consulta</h3>
              <ul className="space-y-3 text-secondary font-medium">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-tertiary" />
                  Seguro Médico Premium (30 min)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-tertiary" />
                  Seguro de Auto Élite (30 min)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-tertiary" />
                  Protección Patrimonial (45 min)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-tertiary" />
                  Consulta Corporativa (60 min)
                </li>
              </ul>
            </div>

            <div className="bg-tertiary/10 p-8 rounded-[2rem] border border-tertiary/20">
              <p className="text-secondary font-medium text-sm">
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
                  textColor: '1a2744',
                  primaryColor: 'c9a962'
                }}
              />
            </div>
            <p className="text-center text-secondary text-xs mt-4 font-medium">
              Powered by Calendly
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}