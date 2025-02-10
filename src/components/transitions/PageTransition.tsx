"use client";

import { motion } from "framer-motion";
import styled from 'styled-components';
import { colors } from '@/styles/colors';

const TransitionWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: right;
`;

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
      ease: "easeInOut",
    },
  },
  exit: {
    rotateY: 90,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
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