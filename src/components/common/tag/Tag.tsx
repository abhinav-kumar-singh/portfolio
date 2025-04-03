import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './tag.module.css';

interface SkillTagProps {
  skill: string;
  delay: number;
}

const Tag: React.FC<SkillTagProps> = ({ skill, delay }) => {
  return (
    <motion.span
      className={styles.tag}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        scale: 1.05,
        backgroundColor: '#6b46c1',
        color: '#ffffff',
        transition: { duration: 0.2 },
      }}
    >
      {skill}
    </motion.span>
  );
};

export default Tag;
