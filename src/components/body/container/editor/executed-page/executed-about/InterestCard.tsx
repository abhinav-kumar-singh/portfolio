import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './about.module.css';

interface InterestCardProps {
  text: string;
  index: number;
}

const InterestCard: React.FC<InterestCardProps> = ({ text, index }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3 + index * 0.1,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      }}
    >
      <p>{text}</p>
    </motion.div>
  );
};

export default InterestCard;
