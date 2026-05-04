import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ faq, question, answer, index, openFaq, handleFaqClick }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const q = question || faq?.question;
  const a = answer || faq?.answer;
  const isControlled = index !== undefined && openFaq !== undefined;
  
  const handleClick = () => {
    if (isControlled) {
      handleFaqClick(index);
    } else {
      setIsOpen(!isOpen);
    }
  };
  
  const isActive = isControlled ? openFaq === index : isOpen;
  
  return (
    <div className="bg-beige rounded-2xl overflow-hidden border border-primary/5">
      <button
        onClick={handleClick}
        className="w-full p-6 text-left flex items-center justify-between bg-primary hover:bg-lighter-navy transition-colors"
      >
        <span className="text-white font-medium pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 text-gold shrink-0 transition-transform ${isActive ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="p-6 text-charcoal/70 leading-relaxed font-medium bg-beige border-t border-primary/5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
