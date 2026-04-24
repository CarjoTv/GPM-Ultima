import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full pb-24 bg-neutral">
      <section className="bg-primary py-16 md:py-24 mb-16 md:mb-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-tertiary)_0%,_transparent_70%)] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 font-headline tracking-tighter uppercase">ESTAMOS <span className="text-tertiary">CONTIGO</span></h1>
            <p className="text-xl text-white/70 leading-relaxed font-medium">
              GPM (Grupo Patrimonial Mexicano): Soporte especializado y asesoría patrimonial de élite disponible 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12 md:space-y-16"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-8 md:mb-12 font-headline uppercase tracking-tight">Canales de Atención</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="flex flex-col gap-6">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-tertiary shadow-2xl border border-white/5">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-primary text-lg mb-1 font-headline">Teléfono</h3>
                    <p className="text-secondary text-sm font-medium">Oficina: +52 55 1234 5678</p>
                    <p className="text-secondary text-sm font-medium">Urgencias: <span className="text-primary font-bold">24 HORAS</span></p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-tertiary shadow-2xl border border-white/5">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-primary text-lg mb-1 font-headline">Email</h3>
                    <p className="text-secondary text-sm font-medium">contacto@gpmexico.com</p>
                    <p className="text-secondary text-sm font-medium">soporte@gpmexico.com</p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-tertiary shadow-2xl border border-white/5">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-primary text-lg mb-1 font-headline">Dirección</h3>
                    <p className="text-secondary text-sm font-medium">Av. Paseo de la Reforma 222</p>
                    <p className="text-secondary text-sm font-medium">CDMX, México</p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-tertiary shadow-2xl border border-white/5">
                    <Clock className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-primary text-lg mb-1 font-headline">Atención</h3>
                    <p className="text-secondary text-sm font-medium">L-V: 08:30 - 20:00</p>
                    <p className="text-secondary text-sm font-medium">Sábados: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-12 rounded-[2.5rem] text-white relative overflow-hidden group border border-white/5 shadow-3xl">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                <MessageSquare className="w-48 h-48" />
              </div>
              <h3 className="text-2xl font-black mb-6 relative z-10 font-headline uppercase tracking-tighter">WhatsApp Directo</h3>
              <p className="text-white/60 mb-8 text-sm font-medium relative z-10 leading-relaxed">Atención inmediata y personalizada para resolver todas tus dudas sobre seguros.</p>
              <a
                href="https://wa.me/5216672524470?text=Hola,%20quisiera%20información%20sobre%20seguros"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary text-primary px-10 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white transition-all relative z-10 shadow-xl shadow-tertiary/20 inline-flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-4xl border-2 border-gold/20"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-8 border-4 border-tertiary/20">
                  <Send className="h-10 w-10 text-tertiary" />
                </div>
                <h3 className="text-4xl font-black text-primary mb-6 font-headline tracking-tighter uppercase">¡RECIBIDO!</h3>
                <p className="text-secondary font-medium mb-10 max-w-sm">Su solicitud ha sido enviada a nuestro equipo de analistas. Recibirá respuesta en menos de 4 horas hábiles.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-secondary transition-all"
                >
                  Nuevo Mensaje
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-black text-primary mb-10 font-headline uppercase tracking-tighter">Solicitud de Servicio</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary pl-1 opacity-80">Identidad</label>
                      <input
                        required
                        type="text"
                        placeholder="Nombre Completo"
                        className="w-full px-6 py-5 bg-neutral border border-primary/5 rounded-2xl focus:ring-2 focus:ring-tertiary focus:bg-white focus:shadow-xl outline-hidden transition-all font-medium placeholder:text-secondary/30"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary pl-1 opacity-80">Contacto</label>
                      <input
                        required
                        type="email"
                        placeholder="Email Corporativo"
                        className="w-full px-6 py-5 bg-neutral border border-primary/5 rounded-2xl focus:ring-2 focus:ring-tertiary focus:bg-white focus:shadow-xl outline-hidden transition-all font-medium placeholder:text-secondary/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary pl-1 opacity-80">Categoría</label>
                    <select
                      className="w-full px-6 py-5 bg-neutral border border-primary/5 rounded-2xl focus:ring-2 focus:ring-tertiary focus:bg-white focus:shadow-xl outline-hidden transition-all font-bold text-primary appearance-none"
                    >
                      <option>Seguro Médico Premium</option>
                      <option>Seguro de Auto Élite</option>
                      <option>Protección Patrimonial</option>
                      <option>Consulta Corporativa</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary pl-1 opacity-80">Requerimiento</label>
                    <textarea
                      required
                      placeholder="Describa el alcance de su consulta..."
                      rows={4}
                      className="w-full px-6 py-5 bg-neutral border border-primary/5 rounded-2xl focus:ring-2 focus:ring-tertiary focus:bg-white focus:shadow-xl outline-hidden transition-all resize-none font-medium placeholder:text-secondary/30"
                    ></textarea>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm hover:bg-secondary transition-all flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed shadow-2xl shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin text-tertiary" />
                        Validando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud
                        <ArrowRight className="h-6 w-6 text-tertiary" />
                      </>
                    )}
                  </button>
                  <p className="text-[9px] text-secondary font-bold text-center uppercase tracking-widest opacity-50">Privacidad de datos nivel bancario garantizada</p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}