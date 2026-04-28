import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function CoverageCard({ coverage, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-beige p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5"
    >
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
    </motion.div>
  );
}
