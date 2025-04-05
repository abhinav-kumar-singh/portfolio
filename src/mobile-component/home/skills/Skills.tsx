import React from 'react';

import { DEVELOPER, SKILLS } from '../../../constants/all';
import { motion } from 'framer-motion';
import SkillTag from '../../ui/SkillTag';
import * as styles from './skills.module.css';
import { useScrollAnimation } from '../../../common-component/custom-hook/useScrollAnimation';

const Skills = () => {
  const { ref, controls } = useScrollAnimation();

  // Flatten skills array for display
  const allSkills = Object.values(SKILLS).flat();

  return (
    <section id="about" className={styles.aboutSection}>
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
        >
          <div className={styles.heading}>About Me</div>

          <div className={styles.glassBox}>
            <div className={styles.subheading}>Interests & Passions</div>
            <ul className={styles.list}>
              {DEVELOPER.interests.map((interest, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={styles.listItem}
                >
                  <span className={styles.bullet}>•</span>
                  <span className={styles.textMuted}>{interest}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
          }}
        >
          <div className={styles.divider}>
            <h3 className={styles.heading}>Technical Skills</h3>
            <div className={styles.line}></div>
          </div>

          <div className={styles.skillSection}>
            {Object.entries(SKILLS).map(([category, skills], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + catIndex * 0.1 }}
                className={styles.skillGroup}
              >
                {Array.isArray(skills) ? (
                  <>
                    <div className={styles.category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                    <div className={styles.skillWrap}>
                      {skills.map((skill, index) => (
                        <SkillTag key={skill} skill={skill} index={index} />
                      ))}
                    </div>
                  </>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
