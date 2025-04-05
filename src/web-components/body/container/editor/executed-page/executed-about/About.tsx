import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  MapPin,
  Briefcase,
  Heart,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import ProfileImage from './ProfileImage';
import InterestCard from './InterestCard';
import * as styles from './about.module.css';
import TypingEffect from '../../../../../../common-component/typing-effect/TypingEffect';
import { DEVELOPER } from '../../../../../../constants/all';

const About = () => {
  // const developer = {
  //   name: 'Abhinav Kumar Singh',
  //   title: 'Frontend Developer',
  //   location: 'Bangalore, Karnataka, India',
  //   bio: "I'm a passionate frontend developer with a keen eye for design, performance, and a love for creating intuitive, responsive web applications. My journey in web development started 3 years ago, and I've been obsessed with crafting beautiful, fast, and seamless user experiences ever since. I focus on writing efficient, scalable code, optimizing rendering performance, and leveraging best practices to ensure smooth interactions across all devices.",
  //   interests: [
  //     'I have a deep passion for frontend development, focusing on performance optimization, state management, and intuitive UI/UX.',
  //     'I love working with modern web technologies like React, TypeScript, Zustand, and Rspack to build scalable and maintainable applications.',
  //     'I enjoy optimizing web apps for speed and seamless user experience, ensuring they load fast and perform efficiently across all devices.',
  //     "I'm always exploring ways to improve rendering performance, reduce bundle size, and enhance accessibility for a better web experience.",
  //     "Apart from coding, I enjoy watching anime, with 'One Piece', 'Naruto' and 'Grand Blue Dreaming' being one of my favorites",
  //   ],
  // };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.section
          className={`${styles.profileSection} ${styles.about_category}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.profileImage} variants={itemVariants}>
            <ProfileImage />
          </motion.div>

          <motion.div className={styles.profileInfo} variants={itemVariants}>
            <div className={styles.name}>{DEVELOPER.name}</div>
            <div className={styles.titleWrapper}>
              <Briefcase size={18} />
              <p>{DEVELOPER.title}</p>
            </div>
            <div className={styles.locationWrapper}>
              <MapPin size={18} />
              <p>{DEVELOPER.location}</p>
            </div>

            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="#" className={styles.socialLink}>
                <Mail size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Github size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <ExternalLink size={20} />
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className={`${styles.bioSection} ${styles.about_category}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <div className={styles.bio_and_interests}>
            <motion.h3 variants={itemVariants}>
              <User size={20} className={styles.sectionIcon} />
              Biography
            </motion.h3>
            <motion.p variants={itemVariants} className={styles.bio}>
              <TypingEffect text={DEVELOPER.bio} />
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          className={`${styles.interestsSection} ${styles.about_category}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <div className={styles.bio_and_interests}>
            <motion.h3 variants={itemVariants}>
              <Heart size={20} className={styles.sectionIcon} />
              Interests & Passions
            </motion.h3>
            <div className={styles.interestsContainer}>
              {DEVELOPER.interests.map((interest, index) => (
                <InterestCard key={index} text={interest} index={index} />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
