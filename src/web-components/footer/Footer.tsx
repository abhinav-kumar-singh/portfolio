import React from 'react';
import * as styles from './footer.module.css';
import { GitBranch } from 'lucide-react';
import useFileStore from '../../store/file.store';

const Footer = () => {
  const line = useFileStore((state) => state.line);
  const column = useFileStore((state) => state.column);
  const statusLabel = useFileStore((state) => state.statusLabel);

  return (
    <div className={styles.footer}>
      <div className={styles.left_action}>
        <GitBranch className={styles.icon} />
        <span>main</span>
        {statusLabel ? <span>{statusLabel}</span> : null}
      </div>
      <div className={styles.right_action}>
        <span>
          Ln {line}, Col {column}
        </span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>TypeScript</span>
      </div>
    </div>
  );
};

export default Footer;
