import { motion } from 'motion/react';

export default function BenefitCard({ benefit, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-beige p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5"
    >
      <h3 className="text-lg font-extrabold text-primary mb-2">{benefit.name}</h3>
      <p className="text-charcoal/70 text-sm font-medium">{benefit.desc}</p>
    </motion.div>
  );
}
