import React from 'react';
import { useScrollAnimation } from '../../../common-component/custom-hook/useScrollAnimation';

import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../../constants/all';
import ExperienceCard from '../../ui/ExperienceCard';
import * as styles from './experience.module.css';

const Experience = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="experience" className={styles.section}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
        className={styles.container}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
          }}
          className={`${styles.heading} ${styles.textGradient}`}
        >
          Work Experience
        </motion.div>

        <div className={styles.timeline}>
          {EXPERIENCES.experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.dot} />
              <ExperienceCard
                position={exp.position}
                company={exp.company}
                duration={exp.duration}
                responsibilities={exp.responsibilities}
                index={index}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
