import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ faq, index, openFaq, handleFaqClick }) {
  return (
    <div className="bg-beige rounded-2xl overflow-hidden border border-primary/5">
      <button
        onClick={() => handleFaqClick(index)}
        className="w-full p-6 text-left flex items-center justify-between bg-primary hover:bg-lighter-navy transition-colors"
      >
        <span className="text-white font-medium pr-4">{faq.question}</span>
        <ChevronDown className={`h-5 w-5 text-gold shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {openFaq === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="p-6 text-charcoal/70 leading-relaxed font-medium bg-beige border-t border-primary/5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
