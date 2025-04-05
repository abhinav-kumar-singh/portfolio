import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../common-component/custom-hook/useScrollAnimation';

import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { DEVELOPER } from '../../../constants/all';
import * as styles from './contact.module.css';

const Contact = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="contact" className={styles.section}>
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
            hidden: { opacity: 1, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
          }}
          className={styles.heading}
        >
          Get In Touch
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
          }}
          className={styles.card}
        >
          <div className={styles.mutedText}>
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you have any questions or just want to connect!
          </div>

          <div className={styles.inlineIcon}>
            <MapPin size={20} className={styles.icon} />
            <div className={styles.loc_email}>{DEVELOPER.location}</div>
          </div>

          <div className={styles.inlineIcon}>
            <Mail size={20} className={styles.icon} />
            <a href="mailto:contact@example.com" className={styles.loc_email}>
              singhankur111968@gmail.com
            </a>
          </div>

          <div className={styles.socialLinks}>
            <motion.a href="#" className={styles.socialIcon}>
              <Github size={20} />
            </motion.a>
            <motion.a href="#" className={styles.socialIcon}>
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              className={styles.socialIcon}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          <form className={styles.form}>
            <div className={styles.area}>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Ankur Singh"
              />
            </div>

            <div className={styles.area}>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="ankur@example.com"
              />
            </div>

            <div className={styles.area}>
              <textarea
                id="message"
                rows={4}
                className={styles.textarea}
                placeholder="Your message here..."
              />
            </div>

            <motion.button type="submit" className={styles.button}>
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
