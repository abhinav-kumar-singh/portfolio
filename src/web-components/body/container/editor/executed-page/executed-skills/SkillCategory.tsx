import React from 'react';
import { motion } from 'framer-motion';
import * as commonStyle from '../common.module.css';
import Tag from '../../../../../../common-component/tag';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory = (props: SkillCategoryProps) => {
  const { title, skills, delay } = props;
  return (
    <>
      {Array.isArray(skills) ? (
        <motion.div
          className={commonStyle.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <motion.h2
            className={commonStyle.categoryTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.2 }}
          >
            {title}
          </motion.h2>
          <div className={commonStyle.categoryContainer}>
            {skills.map((skill, index) => (
              <Tag
                key={skill}
                skill={skill}
                delay={delay + 0.1 + index * 0.05}
              />
            ))}
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default SkillCategory;
