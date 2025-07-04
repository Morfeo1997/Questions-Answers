import React from 'react';
import { motion } from 'framer-motion';
import { getTransitionVariant } from './animations.js';

function AnimatedContainer({ children, transitionType, className = '' }) {
  const variant = getTransitionVariant(transitionType);

  return (
    <motion.div
      initial={variant.initial}
      animate={variant.animate}
      exit={variant.exit}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedContainer;
