import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, HeartPulse, Car, Headphones, ChevronRight, CheckCircle2, MessageCircle, Calendar, Building2, Search, BarChart3, CheckSquare, FileText, ShieldAlert, Shield, Wrench, Heart, Globe, Star, MapPin, Gauge, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import ContactCTA from '../components/ContactCTA';
import AnimatedSection from '../components/AnimatedSection';
import FAQItem from '../components/FAQItem';
import { contactInfo } from '../constants/shared';
import { basicCoverages as medicalBasicCoverages } from '../constants/medicalInsurance';

const services = [
  {
    title: 'Seguro Médico',
    description: 'Cobertura integral para ti y tu familia con acceso a los mejores especialistas.',
    icon: HeartPulse,
    path: '/seguro-medico',
    color: 'bg-primary text-gold'
  },
  {
    title: 'Seguro de Auto',
    description: 'Comparamos 9 aseguradoras para encontrar tu plan ideal. Autos, flotillas, motos y transporte.',
    icon: Car,
    path: '/seguro-auto',
    color: 'bg-primary text-gold'
  },
  {
    title: 'Seguro de Vida',
    description: 'Asegura el futuro de los que más quieres con planes flexibles y competitivos.',
    icon: ShieldCheck,
    path: '#',
    color: 'bg-primary text-gold'
  }
];

const features = [
  { title: 'Asesoría de Élite', desc: 'Expertos certificados dedicados a optimizar tu cobertura.' },
  { title: 'Liquidación Inmediata', desc: 'Protocolos de pago acelerados para su total tranquilidad.' },
  { title: 'Solidez Financiera', desc: 'Respaldados por las principales reaseguradoras globales.' }
];

const stats = [
  { label: 'Clientes satisfechos', value: '+15,000' },
  { label: 'Efectividad en Siniestros', value: '100%' },
  { label: 'Asistencia VIP', value: '24/7' }
];

const howItWorks = [
  {
    step: '1',
    title: 'Nos dices qué necesitas',
    desc: 'Compártenos los datos: para auto (marca, modelo, año, uso, código postal) o para seguro médico (edad, ciudad, personas a asegurar).',
    icon: FileText
  },
  {
    step: '2',
    title: 'Comparamos por ti',
    desc: 'Consultamos las mejores aseguradoras del mercado y filtramos las opciones que se ajustan exactamente a lo que necesitas.',
    icon: Search
  },
  {
    step: '3',
    title: 'Te presentamos las opciones',
    desc: 'Te mostramos un comparativo claro con las aseguradoras disponibles, sus coberturas y sus precios.',
    icon: BarChart3
  },
  {
    step: '4',
    title: 'Tú eliges, nosotros gestionamos',
    desc: 'Una vez que eliges la aseguradora y el plan, GPM se encarga de toda la gestión de contratación.',
    icon: CheckSquare
  }
];

const insuranceCompanies = [
  { name: 'Qualitas', desc: 'Líder en seguros de auto en México. Amplia red de talleres y experiencia en el mercado.', color: 'bg-blue-600' },
  { name: 'HDI', desc: 'Aseguradora alemana con presencia global. Destaca por su calidad en servicio y atención a siniestros.', color: 'bg-yellow-600' },
  { name: 'Chubb', desc: 'Especialista en seguros con coberturas premium. Ideal para vehículos de alto valor y clientes exigentes.', color: 'bg-red-700' },
  { name: 'AXA', desc: 'Aseguradora líder a nivel mundial. Ofrece planes flexibles y una amplia red de servicios.', color: 'bg-purple-600' },
  { name: 'Banorte', desc: 'Opción sólida del sistema financiero mexicano. Planes accesibles con buen servicio al cliente.', color: 'bg-red-600' },
  { name: 'Afirme', desc: 'Aseguradora mexicana con fuerte presencia nacional. Coberturas competitivas y buena atención.', color: 'bg-blue-700' },
  { name: 'Zurich', desc: 'Empresa suiza con presencia global. Destaca por su solidez financiera y servicio premium.', color: 'bg-green-700' },
  { name: 'Moomento', desc: 'Aseguradora moderna con procesos digitales ágiles. Ideal para cotizar y contratar en línea.', color: 'bg-pink-600' },
  { name: 'GNP', desc: 'La aseguradora más antigua de México. Gran experiencia y solidez en el mercado mexicano.', color: 'bg-amber-700' }
];

const servicesTypes = [
  { name: 'Autos Particulares', icon: Car },
  { name: 'Flotillas', icon: Building2 },
  { name: 'Motos', icon: Gauge },
  { name: 'Transporte de Carga', icon: Globe },
  { name: 'Seguro Médico', icon: HeartPulse },
  { name: 'Seguro de Vida', icon: ShieldCheck },
];

const coverageHighlights = [
  { icon: ShieldCheck, title: 'Cobertura Amplia', desc: 'Daños materiales, robo, RC, gastos médicos' },
  { icon: ShieldAlert, title: 'Cobertura Limitada', desc: 'Robo total y responsabilidad civil' },
  { icon: Shield, title: 'Solo RC', desc: 'Cobertura mínima y más económica' }
];

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Hola,%20quisiera%20información%20sobre%20seguros`, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-off-white">
      <WhatsAppButton />

      {/* Hero Section - General for all services */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center overflow-hidden py-16 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Oficina moderna GPM"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-16 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl md:max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3 md:px-4 rounded-lg bg-gold/20 text-gold text-[9px] md:text-xs font-bold uppercase tracking-wider border border-gold/30">
                GPM - Especialistas en Seguros 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] mb-6 md:mb-8 font-headline tracking-tighter">
              PROTEGE LO QUE<br /><span className="text-gold">MÁS IMPORTA</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed font-medium max-w-md md:max-w-xl">
              Accede a las <span className="text-gold font-black">mejores aseguradoras</span> de México. Comparamos para encontrar tu plan ideal en auto y gastos médicos.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {servicesTypes.map((type, i) => (
                <span key={i} className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                  <type.icon className="h-4 w-4" />
                  {type.name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {insuranceCompanies.map((company, i) => (
                <span key={i} className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">
                  {company.name}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
              <Link
                to="/seguro-auto"
                className="bg-gold text-primary px-6 md:px-10 py-3 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-gold/30"
              >
                Cotizar Seguro de Auto
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seguro-medico"
                className="bg-white text-primary px-6 md:px-10 py-3 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-gold hover:text-primary transition-all flex items-center justify-center gap-3 group shadow-2xl"
              >
                Seguro Médico
                <HeartPulse className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-6 md:px-10 py-3 md:py-5 rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-2xl border border-gold/30 flex flex-col items-center md:items-start min-w-[120px] md:min-w-[150px] group hover:border-gold/60 transition-all">
                <p className="text-xl md:text-2xl font-black text-gold mb-1 font-headline tracking-tighter">{stat.value}</p>
                <p className="text-[8px] md:text-xs text-white/60 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works section - Enhanced and Generalized */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary mb-4 font-headline tracking-tight">¿Cómo Funciona GPM?</h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-medium text-lg">
              En 4 simples pasos obtienes el seguro perfecto para ti, ya sea auto o gastos médicos
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {howItWorks.map((step, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="relative bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-primary/5"
            >
              <div className="absolute -top-4 -left-4 bg-gold text-primary w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                {step.step}
              </div>
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <step.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-black text-primary mb-3">{step.title}</h3>
              <p className="text-sm text-charcoal/70">{step.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Coverage Types Section - New from document */}
      <section className="py-20 md:py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 font-headline tracking-tight">Tipos de Cobertura</h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-medium text-lg">
              Elige el nivel de protección que mejor se adapte a tus necesidades
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {coverageHighlights.map((coverage, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-primary/5 text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <coverage.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-black text-primary text-lg mb-3">{coverage.title}</h3>
              <p className="text-sm text-charcoal/70">{coverage.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Insurance Companies Grid - Enhanced with descriptions */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 font-headline">Aseguradoras Disponibles</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/70 font-medium max-w-2xl mx-auto">
            Comparamos las mejores aseguradoras del mercado mexicano para encontrarte la mejor opción
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {insuranceCompanies.map((company, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.05}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="h-5 w-5 text-gold" />
                <h3 className="font-black text-primary">{company.name}</h3>
              </div>
              <p className="text-sm text-charcoal/70">{company.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Medical Insurance Basic Coverages Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">
              Coberturas Básicas - Seguro Médico
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-medium">
              Las siguientes coberturas están incluidas en el costo de la cobertura básica de GNP Personaliza.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {medicalBasicCoverages.slice(0, 6).map((coverage, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="bg-beige p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-primary/5"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <HeartPulse className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-black text-primary text-sm mb-2">{coverage.title}</h3>
                  <p className="text-xs text-charcoal/70">{coverage.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/seguro-medico"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gold hover:text-primary transition-all"
          >
            Ver todas las coberturas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 font-headline tracking-tight">Servicios Especializados</h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-medium text-lg">
              Soluciones integrales diseñadas con los más altos estándares de calidad y protección.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((item, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              className="bg-off-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-primary/5"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <item.icon className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-primary mb-3 md:mb-4 font-headline">{item.title}</h3>
              <p className="text-charcoal/70 mb-6 md:mb-8 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
              <Link
                to={item.path}
                className="text-primary text-sm font-black flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-widest"
              >
                Más información <ChevronRight className="h-4 w-4 text-gold" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1450101499163-c88446351960?w=1000&h=1000&fit=crop"
                alt="Seguridad y Confianza"
                className="rounded-[2rem] md:rounded-[3rem] shadow-3xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-primary p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl hidden lg:block">
                <p className="text-5xl md:text-6xl font-black font-headline">25+</p>
                <p className="font-bold uppercase tracking-widest text-xs mt-2">Años de excelencia</p>
              </div>
            </motion.div>

            <AnimatedSection initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 md:mb-12 font-headline tracking-tighter">
                ¿Por qué somos el aliado que <span className="text-gold">necesitas</span>?
              </h2>
              <div className="space-y-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4 md:gap-6">
                    <div className="mt-1 shrink-0 bg-gold/10 p-3 rounded-xl border border-gold/20">
                      <CheckCircle2 className="h-6 md:h-7 w-6 md:w-7 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-black text-white text-lg md:text-xl mb-2 font-headline">{feature.title}</h4>
                      <p className="text-white/60 text-sm font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-3 text-gold font-bold hover:text-white transition-colors uppercase tracking-widest text-sm"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chatear por WhatsApp <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4 font-headline tracking-tighter flex items-center justify-center gap-3">
              <HelpCircle className="h-8 w-8" />
              Preguntas Frecuentes
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-charcoal/70 font-medium">
              Resolvemos tus dudas sobre seguros
            </p>
          </div>
          <div className="space-y-4">
            <FAQItem
              question="¿Qué tipos de seguros ofrece GPM?"
              answer="En GPM ofrecemos seguros de auto, seguros médicos (GNP Personaliza), y seguros de vida. Comparamos las mejores aseguradoras del mercado para encontrar el plan ideal para ti."
            />
            <FAQItem
              question="¿Cuántas aseguradoras comparan para seguros de auto?"
              answer="Comparamos 9 de las mejores aseguradoras de México: Qualitas, HDI, Chubb, AXA, Banorte, Afirme, Zurich, Moomento y GNP. Te mostramos un comparativo claro con coberturas y precios."
            />
            <FAQItem
              question="¿Qué es el Seguro Médico GNP Personaliza?"
              answer="Es un seguro de gastos médicos mayores que cubre gastos por enfermedad y accidentes. Ofrece modalidades de participación variable y fija, con coberturas básicas, beneficios adicionales y cobertura en el extranjero."
            />
            <FAQItem
              question="¿Cómo funciona el proceso de cotización?"
              answer="Es muy sencillo: 1) Nos dices qué necesitas, 2) Comparamos las mejores opciones, 3) Te presentamos las opciones claras, 4) Tú eliges y nosotros gestionamos todo el proceso de contratación."
            />
            <FAQItem
              question="¿Puedo cotizar por WhatsApp?"
              answer="Sí, puedes contactarnos directamente por WhatsApp al botón flotante o al número de contacto. También puedes llenar el formulario en la página correspondiente y te enviaremos la cotización por el mismo medio."
            />
          </div>
        </div>
      </section>

      <ContactCTA />

      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Link to="/citas" className="bg-primary p-6 md:p-8 rounded-[2rem] text-white hover:bg-charcoal transition-all group flex flex-col items-center text-center">
              <div className="bg-gold w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-black mb-2 font-headline">Agenda tu Cita Online</h3>
              <p className="text-white/80 text-sm mb-3">Reserve en menos de 1 minuto</p>
              <span className="text-gold text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver horarios disponibles <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola,%20quisiera%20información%20sobre%20seguros`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-6 md:p-8 rounded-[2rem] text-white hover:bg-green-600 transition-all group flex flex-col items-center text-center"
            >
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-black mb-2">Contacto por WhatsApp</h3>
              <p className="text-white/80 text-sm mb-3">Respuesta inmediata</p>
              <span className="text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Enviar mensaje <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}