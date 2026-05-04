import { motion } from 'motion/react';
import { Car, ShieldAlert, Zap, Navigation, Clock, ShieldCheck, ArrowRight, CheckCircle, Phone, MessageCircle, Calendar, FileText, Search, BarChart3, CheckSquare, Building2, ChevronRight, HelpCircle, Star, Globe, Wrench, CarTaxiFront, Shield, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import AnimatedSection from '../components/AnimatedSection';
import ContactCTA from '../components/ContactCTA';
import FAQItem from '../components/FAQItem';
import { contactInfo } from '../constants/shared';

const insuranceCompanies = [
  { name: 'Qualitas', desc: 'Una de las aseguradoras de auto más grandes de México. Amplia red de talleres y experiencia en el mercado.' },
  { name: 'HDI', desc: 'Aseguradora alemana con presencia global. Destaca por su calidad en servicio y atención a siniestros.' },
  { name: 'Chubb', desc: 'Especialista en seguros con coberturas premium. Ideal para vehículos de alto valor y clientes exigentes.' },
  { name: 'AXA', desc: 'Aseguradora líder a nivel mundial. Ofrece planes flexibles y una amplia red de servicios.' },
  { name: 'Banorte', desc: 'Opción sólida del sistema financiero mexicano. Planes accesibles con buen servicio al cliente.' },
  { name: 'Afirme', desc: 'Aseguradora mexicana con fuerte presencia nacional. Coberturas competitivas y buena atención.' },
  { name: 'Zurich', desc: 'Empresa suiza con presencia global. Destaca por su solidez financiera y servicio premium.' },
  { name: 'Moomento', desc: 'Aseguradora moderna con procesos digitales ágiles. Ideal para cotizar y contratar en línea.' },
  { name: 'GNP', desc: 'La aseguradora más antigua de México. Gran experiencia y solidez en el mercado mexicano.' }
];

const howItWorks = [
  {
    step: '1',
    title: 'Nos dices qué necesitas',
    desc: 'Compártenos los datos de tu vehículo: marca, modelo, año, uso y código postal. También indícanos qué coberturas te interesan.',
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

const coverageTypes = [
  {
    title: 'Cobertura Amplia',
    desc: 'El plan más completo. Protege tu vehículo ante daños materiales, robo total, robo parcial, responsabilidad civil, gastos médicos a ocupantes y asistencia vial.',
    icon: ShieldCheck,
    items: ['Daños materiales', 'Robo total y parcial', 'Responsabilidad Civil', 'Gastos médicos a ocupantes', 'Asistencia vial 24/7'],
    color: 'from-green-600 to-emerald-700'
  },
  {
    title: 'Cobertura Limitada',
    desc: 'Protege ante robo total y daños que causes a terceros (RC). No cubre daños al vehículo propio por choque.',
    icon: ShieldAlert,
    items: ['Robo total', 'Responsabilidad Civil', 'Gastos médicos a ocupantes', 'Asistencia vial 24/7'],
    color: 'from-blue-600 to-blue-700'
  },
  {
    title: 'Solo Responsabilidad Civil',
    desc: 'Cubre únicamente los daños causados a terceros. Es la cobertura mínima recomendada y la más económica.',
    icon: Shield,
    items: ['Responsabilidad Civil', 'Asistencia vial 24/7'],
    color: 'from-gray-600 to-gray-700'
  }
];

const basicCoverages = [
  { title: 'Daños Materiales', desc: 'Protege tu propio vehículo ante daños físicos por choque, volcadura, incendio, fenómenos naturales o vandalismo.', icon: Wrench },
  { title: 'Robo Total', desc: 'Cubre la pérdida total del vehículo por robo cuando no es recuperado en el plazo establecido. Requiere denuncia.', icon: ShieldAlert },
  { title: 'Responsabilidad Civil', desc: 'Cubre los daños que causes involuntariamente a terceros: daños a otros vehículos, propiedades o personas.', icon: Shield },
  { title: 'Gastos Médicos', desc: 'Cubre los gastos médicos de quienes viajan dentro del vehículo al momento del accidente.', icon: Heart },
  { title: 'Asistencia Vial 24/7', desc: 'Servicio de emergencia las 24 horas. Incluye grúa, paso de corriente, cambio de llanta y más.', icon: Clock }
];

const additionalCoverages = [
  { icon: Building2, title: 'Auto en Agencia', desc: 'Garantiza reparaciones en taller autorizado por la agencia. Ideal para vehículos nuevos.' },
  { icon: CarTaxiFront, title: 'Auto Sustituto', desc: 'Vehículo de reemplazo mientras tu auto está en el taller por un siniestro cubierto.' },
  { icon: ShieldCheck, title: 'Eliminación de Deducible', desc: 'Elimina el deducible en caso de robo total, daños materiales o RC.' },
  { icon: FileText, title: 'Extensión de RC', desc: 'Amplía tu RC e incluye gastos legales y gastos médicos a terceros.' },
  { icon: Heart, title: 'Muerte Accidental', desc: 'Otorga una suma asegurada en caso de fallecimiento del conductor por accidente.' },
  { icon: Star, title: 'Adaptaciones y Equipo', desc: 'Cubre mejoras, conversiones y equipo especial instalado en el vehículo.' },
  { icon: Globe, title: 'Cobertura en el Extranjero', desc: 'Extiende la protección de tu vehículo cuando viajas fuera del país.' }
];

const vehicleValueOptions = [
  {
    title: 'Valor Comercial',
    desc: 'Precio de mercado del vehículo al momento del siniestro. Se deprecia con el tiempo.',
    ideal: 'Vehículos con varios años de uso. Prima más económica.',
    features: ['Valor varía según mercado', 'Se deprecia cada año', 'Prima más económica']
  },
  {
    title: 'Valor Convenido',
    desc: 'Valor fijo acordado desde el inicio de la póliza. No varía durante la vigencia.',
    ideal: 'Vehículos nuevos, de lujo o con equipamiento especial.',
    features: ['Valor fijo garantizado', 'Mayor certeza económica', 'Ideal para autos de lujo']
  }
];

const glossaryTerms = [
  { term: 'Cobertura Amplia', def: 'El plan más completo. Protege ante daños materiales, robo total/parcial, RC, gastos médicos y asistencia vial.' },
  { term: 'Cobertura Limitada', def: 'Protege ante robo total y daños a terceros. No cubre daños al vehículo propio por choque.' },
  { term: 'Solo Responsabilidad Civil', def: 'Cubre únicamente daños causados a terceros. Cobertura mínima y más económica.' },
  { term: 'Daños Materiales', def: 'Protege tu vehículo ante choque, volcadura, incendio, fenómenos naturales o vandalismo.' },
  { term: 'Robo Total', def: 'Aplica cuando el vehículo es robado en su totalidad y no es recuperado en el plazo establecido.' },
  { term: 'Robo Parcial', def: 'Cubre el robo de partes o accesorios del vehículo sin que el auto completo sea sustraído.' },
  { term: 'Responsabilidad Civil', def: 'Cubre daños materiales y físicos causados involuntariamente a terceras personas o sus bienes.' },
  { term: 'Deducible', def: 'Monto que paga el asegurado antes de que la aseguradora cubra el resto. Se expresa como porcentaje.' },
  { term: 'Pérdida Total', def: 'Cuando el costo de reparación supera el porcentaje del valor asegurado (generalmente 75-80%).' }
];

const faqItems = [
  {
    q: '¿Qué es el Auto en Agencia?',
    a: 'Es una cobertura adicional que garantiza que si tu vehículo sufre un siniestro, las reparaciones se realicen en un taller autorizado por la agencia oficial de tu marca. Ideal para autos nuevos o que aún tienen garantía de agencia.'
  },
  {
    q: '¿Qué es el Cero Deducible por Accidente?',
    a: 'Es una cobertura adicional que elimina el deducible que normalmente tendrías que pagar de tu bolsillo en caso de choque o colisión. La aseguradora cubre el 100% de los gastos procedentes.'
  },
  {
    q: '¿Qué cubre la Extensión de RC con Gastos Legales?',
    a: 'Amplía tu Responsabilidad Civil e incluye además los gastos legales (honorarios de abogado, fianzas, trámites) y gastos médicos a terceros en caso de accidente. Especialmente recomendable para quienes manejan frecuentemente.'
  },
  {
    q: '¿Qué es el Valor Comercial y el Valor Convenido?',
    a: 'El Valor Comercial es el precio de mercado de tu vehículo al momento del siniestro; este valor disminuye cada año por la depreciación natural. El Valor Convenido es un monto fijo acordado al inicio de la póliza que la aseguradora te paga en caso de pérdida total sin aplicar depreciación.'
  },
  {
    q: '¿Qué es el deducible en un seguro de auto?',
    a: 'Es el monto que tú pagas de tu bolsillo antes de que la aseguradora cubra el resto. Por ejemplo, si tu deducible es del 5% y tu auto vale $400,000, pagarías $20,000 y la aseguradora el resto.'
  },
  {
    q: '¿Puedo asegurar flotilla o vehículos de mi empresa?',
    a: 'Sí. En GPM manejamos seguros para flotillas empresariales (dos o más vehículos) con condiciones preferenciales de contratación, administración centralizada de pólizas y facturación simplificada.'
  }
];

export default function CarInsurance() {
  const handleWhatsAppClick = (plan) => {
    const message = `Hola! Me interesa cotizar el Seguro de Auto - Plan ${plan}. ¿Pueden darme información?`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const stats = [
    { label: 'Talleres de red VIP', val: '+3,500' },
    { label: 'Países Cubiertos', val: '62' },
    { label: 'Flota de Grúas', val: 'Global' },
    { label: 'Soporte Concierge', val: '24/7' }
  ];

  return (
    <div className="flex flex-col w-full bg-off-white">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gold p-3 md:p-4 rounded-2xl shadow-xl shadow-gold/20">
                  <Car className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <span className="bg-gold/20 text-gold text-xs font-bold px-4 py-2 rounded-full">GPM 2026</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-[0.9] font-headline tracking-tighter">
                Seguro de<br /><span className="text-gold">Auto</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed font-medium">
                Accede a las <span className="text-gold font-black">mejores aseguradoras</span> de México en un solo lugar
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Autos Particulares', 'Flotillas', 'Motos', 'Transporte'].map((type, i) => (
                  <span key={i} className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-lg border border-white/20">
                    {type}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {['Qualitas', 'HDI', 'Chubb', 'AXA', 'GNP'].map((name, i) => (
                  <span key={i} className="bg-gold/20 text-gold text-sm font-bold px-4 py-2 rounded-lg">
                    {name}
                  </span>
                ))}
                <span className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-lg">
                  +4 más
                </span>
              </div>

              <p className="text-white/60 text-sm mb-8 max-w-lg">
                <span className="font-bold text-white">GPM</span> - Comparamos, cotizamos y gestionamos tu seguro. Tú eliges, nosotros nos encargamos.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="#contacto"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="bg-gold text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all shadow-2xl inline-flex items-center gap-3 group"
                >
                  Cotizar Ahora
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
              className="relative h-[400px] md:h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-[3rem] blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop"
                alt="Conducción segura"
                className="w-full h-full object-cover rounded-[3rem] shadow-4xl border-4 border-white/5 relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-6 md:p-8 rounded-3xl shadow-2xl flex items-center gap-6 border border-gold/20 z-20">
                <div className="bg-primary p-4 rounded-2xl shadow-lg">
                  <Building2 className="h-8 w-8 md:h-10 md:w-10 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-black text-charcoal/50 uppercase tracking-[0.2em] mb-1">Aseguradoras Disponibles</p>
                  <p className="text-2xl md:text-3xl font-black text-primary font-headline">9 <span className="text-base md:text-lg font-medium text-charcoal/60">en el mercado</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Companies Section */}
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

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-primary mb-4 font-headline tracking-tighter">¿Cómo Funciona?</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/70 font-medium max-w-2xl mx-auto">
            En 4 simples pasos obtienes el seguro de auto perfecto para ti
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary/5"
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

      {/* Coverage Types Section */}
      <section className="py-20 md:py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-primary mb-4 font-headline tracking-tighter">Tipos de Cobertura</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/70 font-medium max-w-2xl mx-auto">
            Elige el nivel de protección que mejor se adapte a tus necesidades
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {coverageTypes.map((coverage, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className={`bg-gradient-to-br ${coverage.color} p-8 md:p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all text-white`}
            >
              <div className="bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6">
                <coverage.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">{coverage.title}</h3>
              <p className="text-white/80 mb-6 text-sm">{coverage.desc}</p>
              <ul className="space-y-3 mb-8">
                {coverage.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-white shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <Link
                  to="/contacto"
                  className="w-full block py-3 bg-white text-primary rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gold/20 hover:text-white transition-all text-center"
                >
                  Cotizar {coverage.title}
                </Link>
                <button
                  onClick={() => handleWhatsAppClick(coverage.title)}
                  className="w-full py-3 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Basic Coverages */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 font-headline">Coberturas Básicas</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/70 font-medium max-w-2xl mx-auto">
            Todas las coberturas fundamentales que protegen tu vehículo y a terceros
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {basicCoverages.map((coverage, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.05}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/5 text-center"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <coverage.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-black text-primary text-sm mb-2">{coverage.title}</h3>
              <p className="text-xs text-charcoal/70">{coverage.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Additional Coverages */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 font-headline">Coberturas Adicionales</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/70 font-medium max-w-2xl mx-auto">
            Amplía tu protección con estas coberturas opcionales disponibles en el mercado
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalCoverages.map((coverage, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.05}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-primary/5"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <coverage.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-black text-primary text-sm mb-1">{coverage.title}</h3>
                  <p className="text-xs text-charcoal/70">{coverage.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Vehicle Value Options */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 font-headline">Modalidades de Valor</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/70 font-medium max-w-2xl mx-auto">
            Elige cómo se valorará tu vehículo en caso de siniestro
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {vehicleValueOptions.map((option, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary/5"
            >
              <h3 className="text-xl font-black text-primary mb-3">{option.title}</h3>
              <p className="text-sm text-charcoal/70 mb-4">{option.desc}</p>
              <div className="bg-gold/10 p-3 rounded-lg mb-4">
                <p className="text-xs font-bold text-primary">Ideal para: {option.ideal}</p>
              </div>
              <ul className="space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-charcoal/70">
                    <ChevronRight className="h-4 w-4 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Glossary Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 font-headline">Glosario de Términos</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-charcoal/70 font-medium max-w-2xl mx-auto">
            Conoce los conceptos clave para entender tu seguro de auto
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {glossaryTerms.map((term, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.05}
              className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5"
            >
              <h3 className="font-black text-primary mb-2 text-sm">{term.term}</h3>
              <p className="text-xs text-charcoal/70">{term.def}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4 font-headline tracking-tighter">Preguntas Frecuentes</h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-charcoal/70 font-medium">
              Resolvemos tus dudas sobre seguros de auto
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA whatsappMessage="Hola,%20quisiera%20cotizar%20un%20seguro%20de%20auto" />
    </div>
  );
}