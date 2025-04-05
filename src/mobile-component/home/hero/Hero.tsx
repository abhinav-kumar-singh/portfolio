import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../../ui/AnimatedText';
import { ArrowDown } from 'lucide-react';
import { DEVELOPER } from '../../../constants/all';
import * as styles from './hero.module.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.section}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.codeLine}>
            <span className={styles.codeNumber}>1</span>
            <span className={styles.codeComment}>
              // Welcome to my portfolio
            </span>
          </div>
          <div className={styles.codeLine}>
            <span className={styles.codeNumber}>2</span>
            <div className={styles.codeContent}>
              <div className={styles.codePurple}>const</div>
              <div className={styles.codeBlue}>developer</div>
              <div className={styles.textWhite}>=</div>
              <div className={styles.codeYellow}>{'{'}</div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.codeLine}
          >
            <span className={styles.codeNumber}>3</span>
            <span className={styles.codeContent}>
              <span className={styles.codeBlue}>name</span>:
              <span className={styles.codeOrange}>'{DEVELOPER.name}'</span>
              <span className={styles.textWhite}>,</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.codeLine}
          >
            <span className={styles.codeNumber}>4</span>
            <span className={styles.codeContent}>
              <span className={styles.codeBlue}>title</span>:
              <span className={styles.codeOrange}>'{DEVELOPER.title}'</span>
              <span className={styles.textWhite}>,</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={styles.codeLine}
          >
            <span className={styles.codeNumber}>5</span>
            <span className={styles.codeContent}>
              <span className={styles.codeBlue}>location</span>:
              <span className={styles.codeOrange}>'{DEVELOPER.location}'</span>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`${styles.codeLine} mb-8`}
        >
          <div className={styles.codeNumber}>6</div>
          <div className={styles.codeContent}>
            <div className={styles.codeYellow}>{'}'}</div>
          </div>
        </motion.div>

        <div className={styles.name_container}>
          <div className={styles.heading}>
            <div className={styles.subHeading}>Hi,</div>
            <AnimatedText
              text="I'm Abhinav Kumar Singh"
              delayOffset={0.7}
              className={styles.textGradient}
            />
          </div>
          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {DEVELOPER.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className={styles.buttonContainer}
          >
            <a
              href="#contact"
              className={`${styles.ctaButton} ${styles.primaryBtn}`}
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className={`${styles.ctaButton} ${styles.secondaryBtn}`}
            >
              View my work
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        className={styles.scrollBtn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        // transition={{
        //   opacity: { delay: 1.4, duration: 4 },
        //   y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
        // }}
      >
        <ArrowDown size={20} className={styles.scroll_icon} />
      </motion.button>
    </section>
  );
};

export default Hero;
