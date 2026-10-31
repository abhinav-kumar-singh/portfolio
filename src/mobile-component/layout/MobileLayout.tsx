import React, { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import * as styles from './mobile_layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

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
      <MobileNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MobileLayout;
