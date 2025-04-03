import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import * as commonStyle from '../common.module.css';
import * as styles from './project.module.css';
import Tag from '../../../../../common/tag';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  index: number;
  delay: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  index,
  delay,
}: ProjectProps) => {
  return (
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
      <p className={styles.project_desc}>{description}</p>
      <div className={commonStyle.categoryContainer}>
        {technologies.map((tech, i) => (
          <Tag key={tech} skill={tech} delay={delay + 0.1 + index * 0.05} />
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        View Project <ExternalLink size={16} />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
