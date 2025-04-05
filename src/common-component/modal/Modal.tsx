import React, { useEffect, useState } from 'react';
import * as styles from './modal.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, X } from 'lucide-react';

const Modal = ({
  children,
  onclose,
  onRefresh,
}: {
  children: React.ReactNode;
  onclose: () => void;
  onRefresh?: () => void;
}) => {
  const [rotationCount, setRotationCount] = useState(0);

  const handleRotate = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setRotationCount((prev) => prev + 1);
    e.currentTarget.style.transformOrigin = 'center';
    e.currentTarget.style.transition = 'transform 0.5s ease-in-out';
    e.currentTarget.style.transform = `rotate(${360 * (rotationCount + 1)}deg)`;

    if (onRefresh) onRefresh();
  };
  return (
    <div>
      <AnimatePresence>
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={styles.modal}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.body_wrapper}>
            <div className={styles.close_container}>
              <X
                className={`${styles.file_icon} ${styles.close_icon}`}
                onClick={onclose}
              />
              <RotateCw
                className={`${styles.file_icon} ${styles.refresh}`}
                onClick={handleRotate}
                id="refresh"
              />
              <div className={styles.url}>http://localhost:3000</div>
            </div>
            <div className={styles.children_container}>{children}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Modal;
