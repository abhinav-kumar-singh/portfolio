import React from 'react';
import { motion } from 'framer-motion';
import { Send, ChevronRight } from 'lucide-react';
import * as styles from './contact.module.css';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';
import * as commonStyle from '../common.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <motion.div
        className={styles.contentWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.headerSection}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.title}>Get in Touch</div>
          <p className={styles.subtitle}>
            I'd love to hear from you. Fill out the form below or reach out
            through social media.
          </p>

          <motion.div
            className={styles.connect}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            <Send size={14} />
            <span>Let's Connect</span>
            <ChevronRight size={14} />
          </motion.div>
        </motion.div>

        <div className={`${styles.contentColumns}`}>
          <motion.div
            className={styles.formColumn}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className={styles.infoColumn}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className={styles.infoCard}>
              <div className={styles.infocard_heading}>Connect with me</div>
              <p>
                Reach out directly or follow me on social media for updates on
                my latest work.
              </p>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
