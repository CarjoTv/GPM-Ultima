export const contactInfo = {
  whatsapp: '+5216672524470',
  phone: '55 5227 9000',
  email: 'contacto@gpm.com.mx'
};

export const basicCoverages = [
  { category: 'Honorarios', items: ['Consultas médicas, tratamientos médicos y/o quirúrgicos', 'Servicios de enfermeras', 'Tratamientos de rehabilitación física', 'Programas de neurorrehabilitación (hasta 900 sesiones)'] },
  { category: 'Gastos Hospitalarios', items: ['Hospitales, clínicas o sanatorios en convenio con GNP', 'Estancia en terapia intensiva, intermedia y unidad coronaria', 'Sala de operaciones, recuperación y curaciones', 'Equipo de anestesia, gases y medicamentos', 'Cama extra para un acompañante', 'Medicina hiperbárica'] },
  { category: 'Estudios de Laboratorio y Gabinete', items: ['Biometría hemática, rayos X, electrocardiogramas', 'Tomografía, resonancia magnética', 'Pruebas moleculares oncológicas (MammaPrint, Oncotype DX, FoundationOne, Tempus)'] },
  { category: 'Medicamentos', items: ['Medicamentos y/o material de curación', 'Relacionados con la enfermedad o accidente cubierto', 'Autorizados por autoridades sanitarias'] },
  { category: 'Tratamientos Médicos', items: ['Transfusión de sangre, plasma, sueros', 'Trasplantes de células madre', 'Radioterapia y quimioterapia', 'Fisioterapia y rehabilitación cardiaca', 'Tratamientos reconstructivos', 'Acupuntura, homeopáticos y quiroprácticos', 'Tratamientos dentales por accidente', 'Lentes intraoculares para cataratas'] },
  { category: 'Ambulancia', items: ['Terrestre: traslados al hospital y regreso', 'Aérea: en caso de urgencia sin recursos locales'] }
];

export const additionalBenefits = [
  { name: 'Emergencia Médica en el Extranjero', desc: 'Gastos por urgencia médica fuera de México' },
  { name: 'Enfermedades Catastróficas en el Extranjero', desc: 'Cáncer, neurológicas, cerebrovasculares, coronarias y trasplantes' },
  { name: 'Cero Deducible por Accidente', desc: 'Exenta el pago del deducible si la primera atención ocurre dentro de los 10 días del accidente' },
  { name: 'Maternidad Plus Personaliza', desc: 'Amplía el monto de ayuda por parto o cesárea' },
  { name: 'Cláusula Familiar', desc: 'Exenta del pago de prima por 5 años si el titular fallece o queda inválido antes de los 65 años' },
  { name: 'Respaldo por Fallecimiento', desc: 'GNP paga una suma asegurada a los beneficiarios' },
  { name: 'Respaldo Hospitalario', desc: 'Indemnización diaria por hospitalización, hasta 360 días' },
  { name: 'Ampliación Hospitalaria Nacional', desc: 'Elimina la participación adicional por atenderse en otro estado' },
  { name: 'Atención en el Extranjero', desc: 'Amplía la cobertura básica completa a cualquier país' },
  { name: 'Alta Tecnología y Medicina de Vanguardia', desc: 'Exenta la participación adicional por tecnología robótica' },
  { name: 'GNP Cuida tu Salud', desc: 'Estudios de laboratorio anuales sin costo, asesoría nutricional y pediátrica' }
];

export const waitingPeriods = [
  { condition: 'SIDA / VIH', period: '48 meses continuos' },
  { condition: 'Rodilla, hombro, columna vertebral', period: '24 meses continuos' },
  { condition: 'Ácido-pépticos, nariz, senos paranasales', period: '24 meses continuos' },
  { condition: 'Amígdalas, adenoides, hernias', period: '24 meses continuos' },
  { condition: 'Tumoraciones mamarias, várices', period: '24 meses continuos' },
  { condition: 'Cataratas, litiasis renal', period: '24 meses continuos' },
  { condition: 'Vesícula y vías biliares', period: '24 meses continuos' },
  { condition: 'Cáncer ginecológico, prostático, mamario', period: '24 meses continuos' },
  { condition: 'Resto de cánceres', period: '12 meses continuos' },
  { condition: 'Trasplante de riñón, hígado, corazón, células madre', period: '6 meses continuos' },
  { condition: 'Cirugía bariátrica', period: '24 meses continuos' },
  { condition: 'Maternidad (parto/cesárea)', period: '10 meses continuos' }
];

export const exclusions = [
  'Enfermedades preexistentes (salvo cobertura específica)',
  'Tratamientos estéticos o cosmetológicos y de calvicie',
  'Check ups y curas de reposo',
  'Tratamientos de infertilidad y reproducción asistida',
  'Aborto e interrupción del embarazo en primeras 12 semanas',
  'Gastos fuera de México (sin beneficios adicionales)',
  'Tratamientos experimentales o de investigación',
  'Anteojos, lentes de contacto y zapatos ortopédicos',
  'Suplementos vitamínicos y alimenticios',
  'Tratamientos psicológicos, psiquiátricos, neurosis, psicosis, demencia',
  'Lesiones por consumo de alcohol, drogas o sustancias',
  'Lesiones por deportes profesionales o práctica remunerada',
  'Box, box thai, lucha libre, motonáutica, automovilismo de competencia',
  'Actos delictivos intencionales',
  'Gastos personales de higiene o comodidad'
];

export const specialCoverages = [
  { title: 'Maternidad', desc: 'GNP paga el monto establecido por parto o cesárea, sin deducible ni coaseguro. Requiere 10 meses continuos asegurada.' },
  { title: 'Recién Nacido', desc: 'El bebé queda cubierto automáticamente desde su nacimiento hasta la siguiente renovación, sin cobro de prima adicional.' },
  { title: 'Cirugía Fetal', desc: 'Cubre procedimientos quirúrgicos realizados al feto dentro del útero. Requiere 10 meses continuos.' },
  { title: 'Enfermedades Congénitas y/o Genéticas', desc: 'Cubre diagnosticadas después de los 5 años de edad. Requiere mínimo 6 meses de cobertura.' }
];

export const copayInfo = [
  { title: 'Deducible', desc: 'La cantidad fija que el asegurado paga primero antes de que GNP comience a cubrir. Se aplica por cada enfermedad o accidente.' },
  { title: 'Coaseguro', desc: 'El porcentaje de los gastos que comparte el asegurado con GNP, una vez descontado el deducible. Hay un tope máximo.' },
  { title: 'Tope de Coaseguro', desc: 'El monto máximo que el asegurado pagará por concepto de coaseguro en una misma enfermedad. Una vez alcanzado, GNP cubre el 100%.' },
  { title: 'Participación Variable', desc: 'El deducible y coaseguro varían según el nivel hospitalario (A, B, C o D). A mayor nivel, mayor participación del asegurado.' }
];

export const faqs = [
  {
    question: '¿Qué es el deducible?',
    answer: 'Es la cantidad fija que tú pagas primero antes de que GNP/startara a cubrir los gastos. Se aplica por cada enfermedad o accidente cubierto. Una vez que raggi ese monto, GNP toma el resto.'
  },
  {
    question: '¿Qué es el coaseguro?',
    answer: 'Es el porcentaje de los gastos que compartes con GNP después de cubrir tu deducible. Por ejemplo, si tu coaseguro es del 10%, GNP paga el 90% y tú el 10% restante, hasta llegar a un tope máximo.'
  },
  {
    question: '¿Qué es el tope de coaseguro?',
    answer: 'Es el monto máximo que pagarás por concepto de coaseguro en una enfermedad o accidente. Una vez que lo raggi, GNP cubre el 100% de los gastos procedentes restantes.'
  },
  {
    question: '¿Qué es la Participación Variable?',
    answer: 'Es una modalidad donde el monto de tu deducible y coaseguro varía dependiendo del nivel del hospital donde te atiendas. Si eliges un hospital de nivel superior, tu participación será mayor; si eliges uno de nivel menor, tu participación será menor.'
  },
  {
    question: '¿Puedo incluir a mi familia en la misma póliza?',
    answer: 'Sí. Puedes incluir a tu cónyuge o concubino(a) e hijos menores de 25 años como dependientes económicos dentro de la misma póliza.'
  },
  {
    question: '¿Qué pasa si tengo una enfermedad antes de contratar el seguro?',
    answer: 'El seguro cuenta con una Cobertura de Preexistencias. Si declaras tu enfermedad al momento de contratar y no generas gastos ni recibes tratamiento durante cierto periodo continuo (6 meses, 2 años o 5 años según el tipo de enfermedad), GNP puede cubrirla posteriormente.'
  },
  {
    question: '¿Hay enfermedades con periodo de espera?',
    answer: 'Sí. Algunas enfermedades requieren que tengas cierto tiempo continuo asegurado antes de ser cubiertas. Por ejemplo, hernias, cataratas, problemas de rodilla u hombro requieren 24 meses. Si vienes de otra aseguradora, ese tiempo puede reconocerse para reducir o eliminar el periodo de espera.'
  },
  {
    question: '¿Qué hospitales puedo usar?',
    answer: 'Puedes elegir entre dos modalidades: Amplio (mayor número de hospitales disponibles) o Esencial (hospitales seleccionados con un proceso de primer contacto). Consulta el directorio completo en gnp.com.mx o llamando al 55 5227 9000.'
  },
  {
    question: '¿Qué es la Membresía Médica Móvil?',
    answer: 'Es un servicio incluido sin costo adicional en tu póliza. Te da acceso a orientación médica telefónica, consulta por videollamada, consulta médica a domicilio, atención de urgencias con ambulancia equipada y asistencia psicológica por videollamada (hasta 2 sesiones al mes).'
  },
  {
    question: '¿Puedo usar mi seguro si viajo al extranjero?',
    answer: 'La cobertura básica aplica en México. Sin embargo, puedes contratar beneficios adicionales como Emergencia Médica en el Extranjero, Enfermedades Catastróficas en el Extranjero o Atención en el Extranjero para estar protegido fuera de México.'
  },
  {
    question: '¿Qué cubre la Cláusula Familiar?',
    answer: 'Si el asegurado titular fallece o queda inválido total y permanente antes de los 65 años por una causa cubierta, GNP exenta a toda la familia del pago de la prima de renovación durante los siguientes 5 años, manteniendo las mismas condiciones de cobertura.'
  },
  {
    question: '¿Puedo asegurar a mi bebé recién nacido?',
    answer: 'Sí. Si la madre tiene al menos 10 meses continuos asegurada con GNP al momento del nacimiento, el bebé queda cubierto automáticamente desde su nacimiento hasta la siguiente renovación, incluyendo enfermedades congénitas, prematurez y complicaciones, sin cobro de prima adicional en ese período.'
  },
  {
    question: '¿Qué es GNP Cuida tu Salud?',
    answer: 'Es un beneficio adicional con costo que te da acceso a estudios de laboratorio anuales sin costo, plan de autogestión personalizado, asesoría nutricional y pediátrica, consultas con especialistas a precio preferencial ($550 pesos por consulta) y vacunas con descuento, todo a través de la app de GNP.'
  },
  {
    question: '¿Cómo hago válida mi póliza en caso de emergencia?',
    answer: 'En caso de urgencia médica, comunícate a la Línea GNP al 55 5227 9000 o a Médica Móvil al 55 5482 3710. También puedes hacerlo desde la App Soy Cliente GNP. En emergencias puedes acudir directamente al hospital sin necesidad de autorización previa.'
  }
];