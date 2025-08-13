'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const containerVariants = (delayAnimation: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delayAnimation,
      staggerChildren: 0.07,
    },
  },
});

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

interface WaveTextProps {
  text: string;
  className?: string;
  delayAnimation?: number;
}

const WaveText = ({ text, className = '', delayAnimation = 0 }: WaveTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -5% 0px' });

  return (
    <motion.h2
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={containerVariants(delayAnimation)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default WaveText;
