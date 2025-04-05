import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import * as styles from './contact.module.css';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={22} />,
      url: '',
      color: '#333',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={22} />,
      url: '',
      color: '#1DA1F2',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={22} />,
      url: '',
      color: '#0A66C2',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={22} />,
      url: '',
      color: '#E1306C',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={styles.socialLinksContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          className={styles.socialLink}
          style={{ '--social-color': link.color } as React.CSSProperties}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.iconWrapper}>{link.icon}</span>
          {/* <span className={styles.socialName}>{link.name}</span> */}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
