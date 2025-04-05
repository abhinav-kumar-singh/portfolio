import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import * as styles from './project_card.module.css';
import { useScrollAnimation } from '../../common-component/custom-hook/useScrollAnimation';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
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
      className={styles.projectCard}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.linksContainer}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkIcon}
          >
            <ExternalLink size={20} />
          </a>
          <a href="#" className={styles.linkIcon}>
            <Github size={20} />
          </a>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.techContainer}>
        {technologies.map((tech, i) => (
          <span key={i} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
