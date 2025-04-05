import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './animated_text.module.css';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delayOffset?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  once = true,
  delayOffset = 0,
}) => {
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04 + delayOffset,
      },
    }),
  };

  return (
    <motion.div
      className={`${styles.animatedText} ${className}`}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className={styles.character}
          variants={letterVariants}
          custom={index}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
