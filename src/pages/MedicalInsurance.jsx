import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartPulse, Check, X, ChevronDown, Phone, Shield, UserPlus, Baby, Stethoscope, Globe, AlertCircle,
  CheckCircle2, HelpCircle, Send, ArrowRight, Menu, X as XIcon, Calendar, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  contactInfo, basicCoverages, additionalBenefits, waitingPeriods, 
  exclusions, specialCoverages, copayInfo, faqs 
} from '../constants/medicalInsurance';

export default function MedicalInsurance() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    ciudad: '',
    personas: '',
    telefono: '',
    email: '',
    preexistente: ''
  });
  const [showMenu, setShowMenu] = useState(false);

  const handleFaqClick = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola! Me interesa obtener una cotización para el Seguro Médico GNP Personaliza.%0A%0ADatos:%0A-Nombre: ${formData.nombre}%0A-Edad: ${formData.edad}%0A-Ciudad: ${formData.ciudad}%0A-Personas a asegurar: ${formData.personas}%0A-Teléfono: ${formData.telefono}%0A-Email: ${formData.email}%0A-Preexistente: ${formData.preexistente}`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);
  };

  return (
    <div className="flex flex-col w-full bg-off-white">
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Hero Section */}
      <section className="bg-primary pt-20 md:pt-24 pb-20 md:pb-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gold p-4 rounded-2xl mb-6 inline-flex shadow-xl shadow-gold/20">
                <HeartPulse className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight font-headline tracking-tighter">
                Tu salud y la de tu familia, <span className="text-gold">protegidas con GNP</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed font-medium max-w-md">
                Accede al mejor seguro de gastos médicos mayores de México, con la asesoría personalizada de GPM.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">Producto GNP</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">Modalidad Variable</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">Modalidad Fija</span>
              </div>
              <Link
                to="#contacto"
                onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-gold text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all shadow-2xl shadow-gold/30 inline-flex items-center gap-3 group"
              >
                Quiero mi cotización
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-white/50 text-xs mt-4">Producto comercializado por GPM, agente autorizado GNP Seguros</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[350px] md:h-[450px]"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop"
                alt="Seguro Médico GNP Personaliza"
                className="w-full h-full object-cover rounded-[3rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-primary font-bold text-sm">GNP Seguros</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-primary/95 backdrop-blur-sm sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center gap-6">
              {['¿Qué es?', 'Coberturas', 'Beneficios', 'Costos', 'FAQ', 'Contacto'].map((item, i) => {
                const ids = ['whatis', 'coverages', 'benefits', 'costs', 'faq', 'contacto'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(ids[i])}
                    className="text-white/70 hover:text-gold text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <button className="md:hidden text-white" onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <XIcon /> : <Menu />}
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden bg-primary border-t border-white/10 px-4 py-4">
            {['¿Qué es?', 'Coberturas', 'Beneficios', 'Costos', 'FAQ', 'Contacto'].map((item, i) => {
              const ids = ['whatis', 'coverages', 'benefits', 'costs', 'faq', 'contacto'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(ids[i])}
                  className="block w-full text-left text-white/70 hover:text-gold py-2 text-sm font-medium"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* ¿Qué es GNP Personaliza? */}
      <section id="whatis" className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">
              ¿Qué es el Seguro Médico GNP Personaliza?
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed font-medium">
              Es un seguro de gastos médicos mayores individual que cubre los gastos en que incurra el asegurado por la atención médica requerida como consecuencia de una enfermedad y/o accidente cubierto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-beige p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-primary/5">
              <h3 className="text-xl font-extrabold text-primary mb-4 flex items-center gap-2">
                <span className="bg-gold text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">V</span>
                Participación Variable
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed font-medium">
                El deducible y coaseguro varían según el nivel hospitalario donde se atienda el asegurado. A mayor nivel, mayor participación del asegurado.
              </p>
            </div>
            <div className="bg-beige p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-primary/5">
              <h3 className="text-xl font-extrabold text-primary mb-4 flex items-center gap-2">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">F</span>
                Participación Fija
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed font-medium">
                El deducible y coaseguro son fijos independientemente del hospital elegido.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem]">
            <h3 className="text-lg font-extrabold text-primary mb-4">¿A quién va dirigido?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Profesionistas 28-50 años', 'Jefes de familia', 'Jóvenes laboral', 'Empresarios'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-gold" />
                  <span className="text-charcoal/70 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coberturas Básicas */}
      <section id="coverages" className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">
              Coberturas Básicas Incluidas
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-medium">
              Las siguientes coberturas están incluidas en el costo de la cobertura básica, sin costo adicional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {basicCoverages.map((coverage, i) => (
              <div key={i} className="bg-beige p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5">
                <h3 className="text-lg font-extrabold text-primary mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-gold" />
                  {coverage.category}
                </h3>
                <ul className="space-y-2">
                  {coverage.items.map((item, idx) => (
                    <li key={idx} className="text-charcoal/70 text-sm flex items-start gap-2 font-medium">
                      <span className="text-gold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem]">
            <h3 className="text-lg font-extrabold text-white mb-4 flex items-center gap-2">
              <Baby className="h-5 w-5 text-gold" />
              Coberturas Especiales Incluidas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Maternidad', 'Recién Nacido', 'Cirugía Fetal', 'Enfermedades Congénitas', 'Cirugía Profiláctica', 'Cirugía Bariátrica', 'Preexistencias', 'Segunda Opinión'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gold/10 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-gold/20">
            <h3 className="text-lg font-extrabold text-primary mb-3 flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              Membresía Médica Móvil (Incluida sin costo adicional)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Orientación médica telefónica', 'Consulta por videollamada', 'Consulta a domicilio', 'Atención de urgencias con ambulancia', 'Asistencia psicológica (hasta 2 sesiones/mes)'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  <span className="text-charcoal/70 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Adicionales */}
      <section id="benefits" className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">
              Beneficios Adicionales
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-medium">
              El asegurado puede contratar los siguientes beneficios adicionales al costo de la cobertura básica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {additionalBenefits.map((benefit, i) => (
              <div key={i} className="bg-beige p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5">
                <h3 className="text-lg font-extrabold text-primary mb-2">{benefit.name}</h3>
                <p className="text-charcoal/70 text-sm font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gastos a Cargo del Asegurado */}
      <section id="costs" className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-headline tracking-tight">
              Gastos a Cargo del Asegurado
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {copayInfo.map((info, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gold/20">
                <h3 className="text-xl font-extrabold text-primary mb-4 font-headline">{info.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed font-medium">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Periodos de Espera */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">
              Periodos de Espera
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-medium">
              Algunas enfermedades requieren que el asegurado tenga cierto tiempo continuo asegurado antes de ser cubiertas.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="bg-primary">
                  <th className="text-white text-left p-4 rounded-l-xl font-extrabold">Enfermedad / Condición</th>
                  <th className="text-white text-right p-4 rounded-r-xl font-extrabold">Periodo de Espera</th>
                </tr>
              </thead>
              <tbody>
                {waitingPeriods.map((wp, i) => (
                  <tr key={i} className="border-b border-primary/10">
                    <td className="p-4 text-charcoal/70 font-medium">{wp.condition}</td>
                    <td className="p-4 text-primary text-right font-bold">{wp.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Exclusiones Principales */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">
              Exclusiones Principales
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto font-medium">
              Las siguientes situaciones NO están cubiertas por la póliza básica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exclusions.map((exclusion, i) => (
              <div key={i} className="bg-beige p-4 rounded-xl border border-red-200 flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-charcoal/70 text-sm font-medium">{exclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceso Hospitalario */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">
              Acceso Hospitalario
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-beige p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-primary/5">
              <h3 className="text-xl font-extrabold text-primary mb-4">Modalidad Amplio</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-charcoal/70 font-medium">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  Mayor número de hospitales disponibles a nivel nacional
                </li>
                <li className="flex items-start gap-2 text-charcoal/70 font-medium">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  Acceso libre sin proceso de primer contacto
                </li>
              </ul>
            </div>
            <div className="bg-beige p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-primary/5">
              <h3 className="text-xl font-extrabold text-primary mb-4">Modalidad Esencial</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-charcoal/70 font-medium">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  Hospitales seleccionados con alta calidad y costo eficiente
                </li>
                <li className="flex items-start gap-2 text-charcoal/70 font-medium">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  Requiere contacto previo con Médica Móvil para orientación
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-charcoal/70 text-sm mt-8 font-medium">
            Consulta el directorio completo en gnp.com.mx o llamando a la Línea GNP: {contactInfo.phone}
          </p>
        </div>
      </section>

      {/* Cobertura en el Extranjero */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-headline tracking-tight flex items-center justify-center gap-3">
              <Globe className="h-8 w-8" />
              Cobertura en el Extranjero
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-medium">
              La cobertura básica aplica únicamente en territorio nacional. Para viajar protegido al extranjero, contrata beneficios adicionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gold/20">
              <h3 className="text-lg font-extrabold text-primary mb-3">Emergencia Médica en el Extranjero</h3>
              <p className="text-charcoal/70 text-sm font-medium">Gastos por urgencia médica fuera de México: hospitalización, ambulancia, laboratorio y enfermería.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gold/20">
              <h3 className="text-lg font-extrabold text-primary mb-3">Enfermedades Catastróficas en el Extranjero</h3>
              <p className="text-charcoal/70 text-sm font-medium">Cáncer, enfermedades neurológicas, cerebrovasculares, coronarias y trasplantes atendidos en el extranjero.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gold/20">
              <h3 className="text-lg font-extrabold text-primary mb-3">Atención en el Extranjero</h3>
              <p className="text-charcoal/70 text-sm font-medium">Amplía la cobertura básica completa a cualquier país, incluyendo enfermedades y accidentes programados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coberturas Especiales */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight">
              Coberturas Especiales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {specialCoverages.map((coverage, i) => (
              <div key={i} className="bg-beige p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-primary/5">
                <h3 className="text-lg font-extrabold text-primary mb-3">{coverage.title}</h3>
                <p className="text-charcoal/70 text-sm font-medium">{coverage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline tracking-tight flex items-center justify-center gap-3">
              <HelpCircle className="h-8 w-8" />
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-beige rounded-2xl overflow-hidden border border-primary/5">
                <button
                  onClick={() => handleFaqClick(i)}
                  className="w-full p-6 text-left flex items-center justify-between bg-primary hover:bg-lighter-navy transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-gold transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-6 text-charcoal/70 leading-relaxed font-medium bg-beige">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto / Cotización */}
      <section id="contacto" className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 font-headline tracking-tight">
                Obtén tu Cotización Personalizada
              </h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed font-medium">
                Completa el formulario y te contactaremos para darte la mejor asesoría y cotizar el plan que mejor se adapte a tus necesidades.
              </p>
              
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <span className="font-bold">WhatsApp: {contactInfo.whatsapp}</span>
                </a>
                <div className="flex items-center gap-4 text-white/70 p-4">
                  <Phone className="h-6 w-6" />
                  <span className="font-medium">Línea GNP: {contactInfo.phone}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-beige p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary text-sm font-bold mb-2">Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-bold mb-2">Edad</label>
                  <input
                    type="number"
                    name="edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
                    placeholder="Tu edad"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-bold mb-2">Ciudad / Estado</label>
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
                    placeholder="Ciudad de residencia"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-bold mb-2">Personas a asegurar</label>
                  <input
                    type="number"
                    name="personas"
                    value={formData.personas}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
                    placeholder="Número de personas"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-bold mb-2">Teléfono celular</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-bold mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-primary text-sm font-bold mb-2">¿Tienes alguna enfermedad preexistente?</label>
                  <select
                    name="preexistente"
                    value={formData.preexistente}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 rounded-xl border border-primary/20 focus:border-primary focus:outline-none bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="No">No</option>
                    <option value="Sí">Sí</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-primary px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all mt-6 flex items-center justify-center gap-3 shadow-2xl shadow-gold/30"
              >
                <Send className="h-5 w-5" />
                Solicitar Cotización por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-primary/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-charcoal/50 text-xs text-center font-medium">
            <AlertCircle className="inline h-4 w-4 mr-1" />
            La información presentada es orientativa. Las condiciones exactas se establecen en la póliza которая contrato.
            Producto comercializado por Grupo Patrimonial Mexicano (GPM), agente autorizado GNP Seguros.
          </p>
        </div>
      </div>

      {/* Opciones de Contacto / Citas */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-6 text-center">¿Cómo prefieres contactarnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link to="/citas" className="bg-white p-5 rounded-xl text-center hover:bg-off-white transition-all group flex flex-col items-center">
              <Calendar className="h-8 w-8 mb-3 text-primary" />
              <h3 className="font-black text-primary">Agenda tu Cita Online</h3>
              <p className="text-charcoal/70 text-xs mt-1">Reserva en Calendly</p>
            </Link>
            
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hola,%20me%20interesa%20el%20seguro%20m%C3%A9dico`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-5 rounded-xl text-white text-center hover:bg-green-600 transition-all group flex flex-col items-center"
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