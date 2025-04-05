import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Code, Home, Mail, Menu, User, X } from 'lucide-react';
import * as styles from './mobile_layout.module.css';

interface MobileNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'about', label: 'About', Icon: User },
    { id: 'experience', label: 'Experience', Icon: Briefcase },
    { id: 'projects', label: 'Projects', Icon: Code },
    { id: 'contact', label: 'Contact', Icon: Mail },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.drawer}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles.drawerContent}>
              <div className={styles.closeIcon}>
                <X
                  size={24}
                  className={styles.cursorPointer}
                  onClick={toggleMenu}
                />
              </div>
              <nav className={styles.nav}>
                <div className={styles.navList}>
                  {navItems.map((item) => (
                    <motion.div key={item.id} whileTap={{ scale: 0.95 }}>
                      <button
                        onClick={() => handleNavigation(item.id)}
                        className={`${styles.navItemButton} ${
                          activeSection === item.id
                            ? styles.active
                            : styles.hoverable
                        }`}
                      >
                        <item.Icon
                          size={20}
                          className={
                            activeSection === item.id ? styles.iconActive : ''
                          }
                        />
                        <div
                          className={`${activeSection === item.id ? styles.textActive : ''}`}
                        >
                          {item.label}
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
