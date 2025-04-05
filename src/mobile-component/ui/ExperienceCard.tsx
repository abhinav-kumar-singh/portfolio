import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import * as styles from './experience_card.module.css';
import { useScrollAnimation } from '../../common-component/custom-hook/useScrollAnimation';

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  company,
  duration,
  responsibilities,
  index,
}) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.2,
          },
        },
      }}
      className={styles.experienceCard}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <Briefcase size={20} className={styles.icon} />
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.position}>{position}</div>
          <div className={styles.company}>
            {company} | {duration}
          </div>
        </div>
      </div>
      <ul className={styles.responsibilitiesList}>
        {responsibilities.map((resp, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className={styles.responsibility}
          >
            {resp}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
