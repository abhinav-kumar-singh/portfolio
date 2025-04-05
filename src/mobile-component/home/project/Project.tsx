import { useScrollAnimation } from '../../../common-component/custom-hook/useScrollAnimation';

import { motion } from 'framer-motion';
import React from 'react';
import { PROJECTS } from '../../../constants/all';
import ProjectCard from '../../ui/ProjectCard';
import * as styles from './project.module.css';

const Projects = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="projects" className={styles.projectsSection}>
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
          className={styles.heading}
        >
          Featured Projects
        </motion.div>

        <div className={styles.grid}>
          {PROJECTS.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
