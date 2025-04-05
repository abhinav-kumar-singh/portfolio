import React from 'react';
import { motion } from 'framer-motion';
import * as styles from './about.module.css';
import ProfilePicture from '../../../../../../asset/profile1.jpg';

const ProfileImage = () => {
  return (
    <motion.div
      className={styles.imageContainer}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img
        src={ProfilePicture}
        alt="Abhinav Kumar Singh"
        className={styles.image}
      />
    </motion.div>
  );
};

export default ProfileImage;
