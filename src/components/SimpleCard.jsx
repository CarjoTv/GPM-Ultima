import { motion } from 'motion/react';

export default function SimpleCard({ title, desc, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-beige p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-primary/5"
    >
      <h3 className="text-lg font-extrabold text-primary mb-3">{title}</h3>
      <p className="text-charcoal/70 text-sm font-medium">{desc}</p>
    </motion.div>
  );
}
