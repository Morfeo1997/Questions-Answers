export const transitionVariants = {
  'Desaparecer/Fundido': {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  },
  'Deslizar': {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 }
  },
  'Girar': {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 }
  },
  'Rebotar': {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.5 } },
    exit: { y: 100, opacity: 0 }
  }
};

export const getTransitionVariant = (transitionType) => {
  return transitionVariants[transitionType] || transitionVariants['Desaparecer/Fundido'];
};
