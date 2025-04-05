import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Building,
  Calendar,
} from 'lucide-react';
import * as styles from './experience.module.css';
import * as commonStyle from '../common.module.css';
import { EXPERIENCES } from '../../../../../../constants/all';

// const experience = [
//   {
//     position: 'Software Development Engineer',
//     company: 'LeadSquared',
//     duration: 'April 2023 - Present',
//     responsibilities: [
//       'Optimized product performance, reducing initial load time from 12s to 3s, improving user experience significantly.',
//       'Engaged with customers to address queries, troubleshoot issues, and provide timely support.',
//       'Developed and implemented critical features, ensuring a seamless user experience across multiple devices.',
//       'Collaborated with cross-functional teams to integrate new features efficiently and maintain product consistency.',
//       'Conducted thorough code reviews, ensuring high-quality code and adherence to best practices.',
//     ],
//   },
//   {
//     position: 'Associate Software Development Engineer',
//     company: 'LeadSquared',
//     duration: 'October 2022 - March 2023',
//     responsibilities: [
//       'Implemented the advanced search feature, one of the most critical functionalities in the Marvin app.',
//       'Collaborated closely with designers and backend teams to ensure seamless feature integration.',
//       'Maintained and improved the Calendar feature, significantly contributing to US customer retention.',
//       'Provided direct customer support, resolving issues and enhancing user satisfaction.',
//     ],
//   },
//   {
//     position: 'Software Developer Intern',
//     company: 'LeadSquared',
//     duration: 'October 2021 - September 2022',
//     responsibilities: [
//       'Diagnosed and fixed high-priority bugs, improving platform stability.',
//       'Gained experience in code reviews, maintaining code quality, and following best practices.',
//       'Developed new features and successfully delivered them to the team.',
//     ],
//   },
//   {
//     position: 'Software Engineer Intern',
//     company: 'Highradius',
//     duration: 'May 2021 - September 2021',
//     responsibilities: [
//       'Developed an email automation feature to streamline communication processes.',
//       'Learned and applied best practices in code quality, reviews, and software development.',
//     ],
//   },
// ];

const ExperienceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedResponsibility, setSelectedResponsibility] = useState<
    number | null
  >(null);

  const handleNext = () => {
    if (activeIndex < EXPERIENCES.experiences.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => prev + 1);
      setSelectedResponsibility(null);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => prev - 1);
      setSelectedResponsibility(null);
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  // Calculate years of experience based on the dates
  const calculateYears = () => {
    // Assuming each date is in format "Month Year - Present/Month Year"
    const latestExp = EXPERIENCES.experiences[0].duration;
    const startExp =
      EXPERIENCES.experiences[EXPERIENCES.experiences.length - 1].duration;

    let startYear, endYear;

    // Extract years
    try {
      startYear = parseInt(startExp.split(' ')[1]);
      endYear = latestExp.includes('Present')
        ? new Date().getFullYear()
        : parseInt(latestExp.split(' - ')[1].split(' ')[1]);

      return endYear - startYear;
    } catch (e) {
      return 2;
    }
  };

  const years = calculateYears();

  return (
    <div className={`${styles.experienceContainer} ${commonStyle.section}`}>
      <motion.div
        className={styles.experienceHeader}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.heading}>My Professional Journey</div>
        <div className={styles.yearsIndicator}>
          <div>{years}+ Years of Experience*</div>
        </div>
      </motion.div>

      <div className={styles.experienceContent}>
        <div className={styles.navigation}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className={`${styles.navButton} ${activeIndex === 0 ? styles.disabled : ''}`}
            disabled={activeIndex === 0 || isAnimating}
            aria-label="Previous experience"
          >
            <ChevronLeft />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className={`${styles.navButton} ${activeIndex === EXPERIENCES.experiences.length - 1 ? styles.disabled : ''}`}
            disabled={
              activeIndex === EXPERIENCES.experiences.length - 1 || isAnimating
            }
            aria-label="Next experience"
          >
            <ChevronRight />
          </motion.button>
        </div>

        <div className={styles.experienceWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={styles.experienceCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={handleAnimationComplete}
            >
              <div className={styles.roleHeader}>
                <div className={styles.roleTitle}>
                  <Briefcase size={24} />
                  <h2>{EXPERIENCES.experiences[activeIndex].position}</h2>
                </div>

                <div className={styles.roleInfo}>
                  <div className={styles.company}>
                    <Building size={18} />
                    <span>{EXPERIENCES.experiences[activeIndex].company}</span>
                  </div>

                  <div className={styles.duration}>
                    <Calendar size={18} />
                    <span>{EXPERIENCES.experiences[activeIndex].duration}</span>
                  </div>
                </div>
              </div>

              <div className={styles.responsibilitiesSection}>
                <div className={styles.res_heading}>Key Contributions</div>

                <div className={styles.responsibilities_container}>
                  <div className={styles.responsibilitiesGrid}>
                    {EXPERIENCES.experiences[activeIndex].responsibilities.map(
                      (responsibility, idx) => (
                        <motion.div
                          key={idx}
                          className={`${styles.responsibilityBubble} ${selectedResponsibility === idx ? styles.active : ''}`}
                          onClick={() =>
                            setSelectedResponsibility(
                              idx === selectedResponsibility ? null : idx,
                            )
                          }
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: [10, 0],
                          }}
                          transition={{
                            duration: 0.4,
                            delay: idx * 0.1,
                          }}
                        >
                          <div className={styles.bubbleContent}>
                            {responsibility}
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.progressTracker}>
          {EXPERIENCES.experiences.map((_, idx) => (
            <motion.div
              key={idx}
              className={`${styles.progressDot} ${idx === activeIndex ? styles.active : ''}`}
              onClick={() => {
                if (!isAnimating && idx !== activeIndex) {
                  setIsAnimating(true);
                  setActiveIndex(idx);
                  setSelectedResponsibility(null);
                }
              }}
              whileHover={{ scale: 1.3 }}
              animate={{
                scale: idx === activeIndex ? 1.3 : 1,
                backgroundColor:
                  idx === activeIndex
                    ? 'var(--vivid-color)'
                    : idx < activeIndex
                      ? 'var(--secondary-color)'
                      : 'var(--light-color)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
