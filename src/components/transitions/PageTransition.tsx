"use client";

import { motion } from "framer-motion";


const pageTransition = {
  initial: {
    rotateY: -90,
    opacity: 1,
  },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    rotateY: 90,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      style={{ 
        width: '100%',
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  );
} 