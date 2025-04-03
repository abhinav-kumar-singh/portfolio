import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';
import * as commonStyle from '../common.module.css';
import { SKILLS } from '../../../../../../constants/all';

// const SKILLS = {
//   languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS/SCSS'],
//   frameworks: ['React', 'MUI'],
//   styling: [
//     'CSS Modules',
//     'Styled Components',
//     'Responsive Design',
//     'Dark Mode & Theming',
//   ],
//   stateManagement: ['Zustand', 'Redux', 'State Management Optimization'],
//   performanceOptimization: [
//     'Performance Optimization',
//     'Code Splitting',
//     'Lazy Loading',
//     'Virtualization',
//     'React Memoization',
//     'Client-Side Caching',
//   ],
//   tooling: [
//     'Rspack',
//     'Webpack',
//     'Rollup',
//     'ESLint & Prettier',
//     'Git',
//     'GitHub Actions (CI/CD)',
//   ],
//   testing: ['Jest', 'React Testing Library', 'Test-Driven Development'],
//   architecture: [
//     'Scalable Frontend Architecture',
//     'Micro-Frontend Architecture',
//     'Component-Driven Development',
//   ],
//   advancedUIUX: [
//     'Framer Motion',
//     'Accessibility',
//     'SEO',
//     'Web Performance',
//     'User Experience',
//     'Cross-Browser Support',
//     'Cross-Device Compatibility',
//   ],
//   modernWebAPIs: ['Service Workers', 'IndexedDB & LocalStorage'],
//   bestPractices: ['Code Documentation', 'Collaboration', 'Problem Solving'],
// };

const formatCategoryName = (name: string) => {
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
};

const Skills = () => {
  return (
    <motion.div
      className={commonStyle.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className={commonStyle.flex}>
          {Object.entries(SKILLS).map(([category, skills], index) => {
            return (
              <SkillCategory
                key={category}
                title={formatCategoryName(category)}
                skills={skills}
                delay={0.1 * index}
              />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
