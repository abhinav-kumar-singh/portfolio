import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './skilltag.module.css';

interface SkillTagProps {
  skill: string;
  index: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, index }) => {
  return (
    <motion.div
      className={styles.skillTag}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 100,
      }}
    >
      {skill}
    </motion.div>
  );
};

export default SkillTag;
