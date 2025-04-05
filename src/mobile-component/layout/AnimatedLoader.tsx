import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './animated_loader.module.css';

const AnimatedLoader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <motion.div
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Portfolio
      </motion.div>
      <motion.div
        className={styles.bar}
        initial={{ width: 0 }}
        animate={{ width: isLoading ? [0, 100, 250] : 200 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

export default AnimatedLoader;
