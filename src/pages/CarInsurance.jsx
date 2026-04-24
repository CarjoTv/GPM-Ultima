import { motion } from 'motion/react';
import { Car, ShieldAlert, Zap, Navigation, Clock, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CarInsurance() {
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
    <div className="flex flex-col w-full bg-neutral">
      <section className="bg-primary py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/luxury_drive/1920/1080"
            alt="Conducción segura"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-tertiary p-3 md:p-4 rounded-2xl mb-6 md:mb-8 inline-flex shadow-xl shadow-tertiary/20">
                <Car className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 leading-[1] font-headline">
                Domina la carretera <br /><span className="text-tertiary">CON SEGURIDAD</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed font-medium">
                GPM: Cobertura total para vehículos de alta gama y conductores exigentes. Asistencia de élite nacional e internacional.
              </p>
              <Link
                to="/contacto"
                className="bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-tertiary hover:text-primary transition-all shadow-2xl inline-flex items-center gap-3 group"
              >
                Cotizar Online
                <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[300px] md:h-[450px]"
            >
              <img
                src="https://picsum.photos/seed/luxury_car_ins/800/600"
                alt="Automóvil de lujo"
                className="w-full h-full object-cover rounded-[3rem] shadow-4xl border-4 border-white/5"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1/2 left-0 -translate-x-1/2 bg-primary p-8 rounded-3xl shadow-3xl hidden md:flex items-center gap-6 border border-gold/20">
                <div className="bg-tertiary p-3 rounded-xl shadow-lg">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black text-white/50 uppercase tracking-[0.2em] mb-1">Respuesta Rápida</p>
                  <p className="text-xl font-extrabold text-white font-headline">Grúa en <span className="text-tertiary">15 min</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 font-headline tracking-tighter">Niveles de Blindaje</h2>
          <div className="h-1.5 w-24 bg-tertiary mx-auto rounded-full mb-8"></div>
          <p className="text-secondary font-medium text-lg max-w-2xl mx-auto">
            Desde la protección fundamental hasta la cobertura total ante cualquier imprevisto.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {coverageFeatures.map((coverage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-gold/10 hover:border-gold/30 hover:shadow-3xl transition-all duration-500 group"
            >
              <div className="bg-primary w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center mb-8 border border-gold/20 group-hover:scale-110 transition-transform">
                <coverage.icon className="h-6 w-6 md:h-8 md:w-8 text-tertiary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 md:mb-6 font-headline uppercase tracking-tighter">{coverage.title}</h3>
              <p className="text-secondary mb-8 md:mb-10 text-sm leading-relaxed font-semibold">{coverage.desc}</p>
              <ul className="space-y-6 mb-10">
                {coverage.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm font-medium text-secondary text-left">
                    <CheckCircle className="h-5 w-5 text-tertiary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contacto"
                className="w-full inline-block py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-secondary transition-all text-center shadow-xl shadow-primary/10"
              >
                Elegir {coverage.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-tertiary/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-8 md:mb-12 leading-[1.1] font-headline tracking-tighter">
                Estamos contigo en cada <span className="text-tertiary">kilómetro</span> del camino
              </h2>
              <div className="grid grid-cols-2 gap-6 md:gap-12">
                {[
                  { label: 'Talleres de red VIP', val: '+3,500' },
                  { label: 'Países Cubiertos', val: '62' },
                  { label: 'Flota de Grúas', val: 'Global' },
                  { label: 'Soporte Concierge', val: '24/7' }
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-tertiary/30 pl-6">
                    <p className="text-4xl font-black text-tertiary mb-2 font-headline">{stat.val}</p>
                    <p className="text-xs text-white/50 font-black uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <button className="flex items-center gap-3 bg-tertiary text-primary hover:bg-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all group shadow-2xl shadow-tertiary/10">
                  Localizar Taller VIP
                  <Navigation className="h-5 w-5 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform" />
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
                src="https://picsum.photos/seed/luxury_drive_stats/800/1000"
                alt="Carro Premium Stats"
                className="rounded-[4rem] shadow-4xl grayscale hover:grayscale-0 transition-all duration-[2s]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}