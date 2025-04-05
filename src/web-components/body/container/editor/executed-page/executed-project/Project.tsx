import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import * as commonStyle from '../common.module.css';
import * as styles from './project.module.css';
import { PROJECTS } from '../../../../../../constants/all';

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description:
//       'A VS Code-themed portfolio website showcasing my projects and skills.',
//     technologies: ['React', 'TypeScript', 'CSS Modules', 'Zustand', 'Rspack'],
//     link: '...',
//   },
//   {
//     title: 'Taskdrift - Task Manager App',
//     description:
//       'A modern task management web application designed for teams and individuals to streamline task organization, tracking, and collaboration. Features include multiple language support, dark mode, and a responsive UI.',
//     technologies: [
//       'React',
//       'TypeScript',
//       'Zustand',
//       'MUI',
//       'Day.js',
//       'Webpack',
//     ],
//     link: 'https://taskdrift.in',
//   },
// ];

const Project = () => {
  return (
    <div className={`${commonStyle.section} ${styles.project_container}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={commonStyle.categoryHeading}>Featured Projects</div>
        <p className={commonStyle.categorySubHeading}>
          A selection of my recent work and passion projects
        </p>
      </motion.div>

      <div className={`${commonStyle.flex} ${styles.project_mapper}`}>
        {PROJECTS.projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            delay={0.1 * index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
