import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import AnimatedLoader from './AnimatedLoader';
import * as styles from './mobile_layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Handle initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Get all section elements
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.background_container}>
      {/* Loading screen */}
      <AnimatedLoader isLoading={isLoading} />

      {!isLoading && (
        <>
          <MobileNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.main}
          >
            {children}
          </motion.main>
        </>
      )}
    </div>
  );
};

export default MobileLayout;
