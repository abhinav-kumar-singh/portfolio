import React from 'react';
import * as styles from './footer.module.css';
import {
  Braces,
  CheckCheck,
  GitBranch,
  GitCommitVertical,
  GitGraph,
  RadioTower,
  RefreshCcw,
} from 'lucide-react';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left_action}>
        <GitBranch className={styles.icon} /> Master
        <RefreshCcw className={styles.icon} />
        <GitCommitVertical className={styles.icon} />
        <GitGraph className={styles.icon} />
        <div>[TypeScript Importer] : Symbols : 4998</div>
      </div>
      <div className={styles.right_action}>
        <div>UTF-8</div>
        <Braces className={styles.icon} />
        TypeScript
        <RadioTower className={styles.icon} /> Go-Live
        <div>Colorize:114 variables</div>
        <CheckCheck className={styles.icon} /> Prettier
      </div>
    </div>
  );
};

export default Footer;
