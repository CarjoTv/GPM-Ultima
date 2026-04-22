import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, HeartPulse, Car, Headphones, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Seguro Médico',
      description: 'Cobertura integral para ti y tu familia con acceso a los mejores especialistas.',
      icon: HeartPulse,
      path: '/seguro-medico',
      color: 'bg-primary text-tertiary'
    },
    {
      title: 'Seguro de Carro',
      description: 'Protección total en la carretera con asistencia en viaje nacional e internacional.',
      icon: Car,
      path: '/seguro-carro',
      color: 'bg-primary text-tertiary'
    },
    {
      title: 'Seguro de Vida',
      description: 'Asegura el futuro de los que más quieres con planes flexibles y competitivos.',
      icon: ShieldCheck,
      path: '#',
      color: 'bg-primary text-tertiary'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-neutral">
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/gpm_hero/1920/1080"
            alt="Oficina moderna GPM"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-neutral via-neutral/95 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-4 rounded-lg bg-tertiary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-8 border border-tertiary/30">
              GPM - Excelencia Patrimonial
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-primary leading-[0.85] mb-8 font-headline tracking-tighter">
              SU FUTURO <br /><span className="text-tertiary">NUESTRA PRIORIDAD</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-12 leading-relaxed font-medium max-w-xl">
              GPM (Grupo Patrimonial Mexicano): Más de 25 años brindando solidez, confianza y protección integral a las familias y empresas más importantes de México.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/contacto"
                className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-secondary transition-all flex items-center gap-3 group shadow-2xl shadow-primary/20"
              >
                Solicitar Cotización
                <ArrowRight className="h-5 w-5 text-tertiary group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-white text-primary border border-primary/10 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-neutral transition-all shadow-lg">
                Nuestros Planes
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            {[
              { label: 'Clientes satisfechos', value: '+15,000' },
              { label: 'Efectividad en Siniestros', value: '100%' },
              { label: 'Asistencia VIP', value: '24/7' }
            ].map((stat, i) => (
              <div key={i} className="bg-primary p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/5 flex flex-col items-center md:items-start min-w-[180px] group hover:border-tertiary/30 transition-all">
                <p className="text-2xl md:text-3xl font-black text-tertiary mb-1 font-headline tracking-tighter">{stat.value}</p>
                <p className="text-[9px] md:text-xs text-white/40 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 font-headline tracking-tight">Servicios Especializados</h2>
            <div className="h-1.5 w-24 bg-tertiary mx-auto rounded-full mb-8"></div>
            <p className="text-secondary max-w-2xl mx-auto font-medium text-lg">
              Soluciones integrales diseñadas con los más altos estándares de calidad y protección.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-neutral p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-primary/5"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-4 font-headline">{item.title}</h3>
              <p className="text-secondary mb-8 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
              <Link
                to={item.path}
                className="text-primary text-sm font-extrabold flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-widest"
              >
                Más información <ChevronRight className="h-4 w-4 text-tertiary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-tertiary rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/insurance_trusted/1000/1000"
                alt="Seguridad y Confianza"
                className="rounded-[3rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-tertiary text-primary p-12 rounded-[2.5rem] shadow-2xl hidden lg:block">
                <p className="text-6xl font-black font-headline">25+</p>
                <p className="font-bold uppercase tracking-widest text-xs mt-2">Años de excelencia</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-12 leading-[1.1] font-headline">
                ¿Por qué somos el aliado que <span className="text-tertiary">necesitas</span>?
              </h2>
              <div className="space-y-10">
                {[
                  { title: 'Asesoría de Élite', desc: 'Expertos certificados dedicados a optimizar tu cobertura.' },
                  { title: 'Liquidación Inmediata', desc: 'Protocolos de pago acelerados para su total tranquilidad.' },
                  { title: 'Solidez Financiera', desc: 'Respaldados por las principales reaseguradoras globales.' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="mt-1 shrink-0 bg-tertiary/10 p-3 rounded-xl border border-tertiary/20">
                      <CheckCircle2 className="h-7 w-7 text-tertiary" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-xl mb-2 font-headline">{feature.title}</h4>
                      <p className="text-white/60 text-sm font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 text-tertiary font-bold hover:text-white transition-colors uppercase tracking-widest text-sm"
                >
                  Hablar con un consultor <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para sentirte protegido?</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Cotiza el seguro que necesitas en menos de 2 minutos y recibe asesoría inmediata de nuestros expertos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Solicitar Cotización
              </Link>
              <button className="bg-blue-700/50 text-white border border-blue-400 px-10 py-4 rounded-full font-bold hover:bg-blue-700/70 transition-all flex items-center justify-center gap-2">
                <Headphones className="h-5 w-5" />
                Hablar con un Agente
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}