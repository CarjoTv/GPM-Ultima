import { motion } from 'motion/react';
import { HeartPulse, Check, ArrowRight, UserPlus, ShieldPlus, Activity, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MedicalInsurance() {
  const benefits = [
    'Elección libre de médico y hospital.',
    'Asistencia sanitaria en el extranjero.',
    'Programas de medicina preventiva.',
    'Segunda opinión médica internacional.',
    'Tratamientos de alta tecnología.',
    'Acceso inmediato a especialistas.'
  ];

  const plans = [
    {
      name: 'Plan Básico',
      price: '29€',
      features: ['Atención primaria', 'Especialistas', 'Pruebas diagnósticas', 'Urgencias 24h'],
      popular: false
    },
    {
      name: 'Plan Familiar',
      price: '59€',
      features: ['Todo el Plan Básico', 'Hospitalización', 'Cirugía', 'Cobertura internacional', 'Asistencia dental'],
      popular: true
    },
    {
      name: 'Plan Premium',
      price: '99€',
      features: ['Todo el Plan Familiar', 'Farmacia incluida', 'Segunda opinión internacional', 'Indemnización por hospitalización'],
      popular: false
    }
  ];

  return (
    <div className="flex flex-col w-full bg-neutral">
      <section className="bg-primary pt-20 md:pt-24 pb-20 md:pb-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-tertiary p-4 rounded-2xl mb-8 inline-flex shadow-xl shadow-tertiary/20">
                <HeartPulse className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight font-headline">
                Tu Salud <br /><span className="text-tertiary text-6xl md:text-8xl">ES SAGRADA</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed font-medium">
                GPM Medical: Acceso ilimitado a especialistas de primer nivel, tecnología médica de vanguardia y atención humana exceptional. 
              </p>
              <Link
                to="/contacto"
                className="bg-tertiary text-primary px-10 py-5 rounded-2xl font-bold hover:bg-white hover:translate-y-[-2px] transition-all shadow-xl shadow-tertiary/10 inline-flex items-center gap-3 group"
              >
                Configurar mi Plan
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[450px] md:h-[550px]"
            >
              <img
                src="https://picsum.photos/seed/doctor_premium/800/800"
                alt="Servicio Médico Premium"
                className="w-full h-full object-cover rounded-[3rem] shadow-4xl grayscale hover:grayscale-0 transition-all duration-1000 border-4 border-white/5"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl flex items-center gap-6 border border-primary/5">
                <div className="bg-primary p-3 rounded-xl">
                  <Award className="h-8 w-8 text-tertiary" />
                </div>
                <div>
                  <p className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-1">Certificación</p>
                  <p className="text-xl font-extrabold text-primary font-headline">Calidad Global</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 font-headline tracking-tighter">Beneficios Exclusivos</h2>
            <p className="text-secondary font-medium text-lg border-l-4 border-tertiary pl-6 py-2">
              Privilegios diseñados para quienes no comprometen la calidad de su atención sanitaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: UserPlus, title: 'Inclusión Familiar', desc: 'Protección extendida para todo su núcleo con prioridad absoluta.' },
              { icon: ShieldPlus, title: 'Gastos Médicos Mayores', desc: 'Capitales asegurados de nivel internacional para cualquier eventualidad.' },
              { icon: Activity, title: 'Bienestar Digital', desc: 'Monitoreo de salud preventivo y telemedicina 24/7 de alta definición.' }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-primary/5 bg-neutral hover:shadow-2xl hover:border-tertiary/20 transition-all group">
                <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-8 border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-tertiary" />
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-4 font-headline">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 py-16 px-10 bg-neutral rounded-[3rem] border border-primary/5 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="bg-primary rounded-lg p-1.5 border border-white/10 group-hover:bg-tertiary transition-colors">
                  <Check className="h-4 w-4 text-white group-hover:text-primary" />
                </div>
                <span className="text-primary font-bold text-sm tracking-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 font-headline tracking-tight">Inversión en Bienestar</h2>
            <div className="h-1.5 w-24 bg-tertiary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className={`bg-white rounded-[3rem] p-12 shadow-sm border transition-all duration-500 ${
                  plan.popular ? 'border-tertiary shadow-3xl scale-105 relative z-20' : 'border-primary/5 hover:border-primary/20'
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-tertiary px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-xl">
                    Recomendado
                  </span>
                )}
                <h3 className="text-2xl font-extrabold text-primary mb-4 font-headline uppercase tracking-tighter">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-10 border-b border-primary/5 pb-8">
                  <span className="text-5xl font-black text-primary font-headline">{plan.price}</span>
                  <span className="text-secondary font-bold text-sm uppercase tracking-widest pl-2">USD/mes</span>
                </div>
                <ul className="space-y-6 mb-12">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-sm font-medium text-secondary">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-tertiary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacto"
                  className={`block text-center py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-secondary shadow-2xl shadow-primary/20'
                      : 'bg-neutral text-primary border border-primary/10 hover:bg-primary hover:text-white'
                  }`}
                >
                  Contratar {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}