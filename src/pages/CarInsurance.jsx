import { motion } from 'motion/react';
import { Car, ShieldAlert, Zap, Navigation, Clock, ShieldCheck, ArrowRight, CheckCircle, Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactInfo = {
  whatsapp: '+5216672524470'
};

export default function CarInsurance() {
  const handleWhatsAppClick = (plan) => {
    const message = `Hola! Me interesa cotizar el Seguro de Auto - Plan ${plan}. ¿Pueden darme información?`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const coverageFeatures = [
    {
      title: 'Terceros',
      desc: 'Cobertura esencial para cumplir con la ley y protegerte ante daños a otros.',
      icon: ShieldAlert,
      items: ['Responsabilidad Civil obligatoria', 'Asistencia en viaje inicial', 'Protección jurídica básica']
    },
    {
      title: 'Terceros Ampliado',
      desc: 'Protección adicional contra robo e incendio y lunas de tu vehículo.',
      icon: Zap,
      items: ['Incendio, robo y lunas', 'Vehículo de cortesía', 'Asistencia en viaje completa']
    },
    {
      title: 'Todo Riesgo',
      desc: 'La máxima protección para tu coche, incluso ante daños propios.',
      icon: ShieldCheck,
      items: ['Daños propios', 'Pérdida total', 'Gestión de multas', 'Mejor valoración del vehículo']
    }
  ];

  return (
    <div className="flex flex-col w-full bg-off-white">
      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>

      <section className="bg-primary py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gold p-3 md:p-4 rounded-2xl mb-6 md:mb-8 inline-flex shadow-xl shadow-gold/20">
                <Car className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-[1] font-headline tracking-tighter">
                Domina la carretera <br /><span className="text-gold">CON SEGURIDAD</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed font-medium">
                GPM: Cobertura total para vehículos de alta gama y conductores exigentes. Asistencia de élite nacional e internacional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="#contacto"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="bg-gold text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all shadow-2xl inline-flex items-center gap-3 group"
                >
                  Cotizar Online
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => handleWhatsAppClick('cualquiera')}
                  className="bg-green-500 text-white px-6 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-green-600 transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[300px] md:h-[450px]"
            >
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop"
                alt="Conducción segura"
                className="w-full h-full object-cover rounded-[3rem] shadow-4xl border-4 border-white/5"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-0 -translate-x-1/2 bg-white p-8 rounded-3xl shadow-3xl hidden md:flex items-center gap-6 border border-gold/20">
                <div className="bg-primary p-3 rounded-xl shadow-lg">
                  <Clock className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-black text-charcoal/50 uppercase tracking-[0.2em] mb-1">Respuesta Rápida</p>
                  <p className="text-xl font-black text-primary font-headline">Grúa en <span className="text-gold">15 min</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-primary mb-4 font-headline tracking-tighter">Niveles de Cobertura</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/70 font-medium max-w-2xl mx-auto">
            Desde la protección fundamental hasta la cobertura total ante cualquier imprevisto.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {coverageFeatures.map((coverage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-beige p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5"
            >
              <div className="bg-primary w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center mb-8 border border-gold/20">
                <coverage.icon className="h-6 w-6 md:h-8 md:w-8 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 font-headline">{coverage.title}</h3>
              <p className="text-charcoal/70 mb-8 text-sm font-medium">{coverage.desc}</p>
              <ul className="space-y-4 mb-8">
                {coverage.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-charcoal/70">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <Link
                  to="/contacto"
                  className="w-full block py-4 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-charcoal transition-all text-center"
                >
                  Cotizar {coverage.title}
                </Link>
                <button
                  onClick={() => handleWhatsAppClick(coverage.title)}
                  className="w-full py-4 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  Cotizar por WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 font-headline tracking-tighter">
                Estamos contigo en cada <span className="text-gold">kilómetro</span> del camino
              </h2>
              <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8">
                {[
                  { label: 'Talleres de red VIP', val: '+3,500' },
                  { label: 'Países Cubiertos', val: '62' },
                  { label: 'Flota de Grúas', val: 'Global' },
                  { label: 'Soporte Concierge', val: '24/7' }
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-gold/30 pl-4">
                    <p className="text-3xl md:text-4xl font-black text-gold mb-1 font-headline">{stat.val}</p>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleWhatsAppClick('asistencia')}
                  className="flex items-center gap-3 bg-gold text-primary hover:bg-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl shadow-gold/10"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chatear por WhatsApp
                </button>
              </div>
            </div>
            
            <motion.div
              initial={{ rotate: 5, scale: 1.05, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=1000&fit=crop"
                alt="Carretera"
                className="rounded-[3rem] shadow-3xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 md:py-32 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 font-headline">
            ¿Listo para asegurar tu coche?
          </h2>
          <p className="text-charcoal/70 mb-8">
            Elige cómo contactarnos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link to="/citas" className="bg-primary p-5 rounded-xl text-white hover:bg-charcoal transition-all group flex flex-col items-center">
              <Calendar className="h-8 w-8 mb-3 text-gold" />
              <h3 className="font-black">Agenda tu Cita Online</h3>
              <p className="text-white/70 text-xs mt-1">Reserva en Calendly</p>
            </Link>
            
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola,%20quisiera%20cotizar%20un%20seguro%20de%20auto`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-5 rounded-xl text-white hover:bg-green-600 transition-all group flex flex-col items-center"
            >
              <MessageCircle className="h-8 w-8 mb-3" />
              <h3 className="font-black">Por WhatsApp</h3>
              <p className="text-white/80 text-xs mt-1">Chatea con nosotros</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}