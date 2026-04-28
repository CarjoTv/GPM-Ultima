import { motion } from 'motion/react';

export default function AnimatedSection({ 
  children, 
  className = '', 
  initial = { opacity: 0, y: 30 }, 
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  viewport = { once: true },
  ...props 
}) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
