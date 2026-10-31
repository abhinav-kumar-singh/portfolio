import React, { JSX } from 'react';
import { Play } from 'lucide-react';
import * as styles from '../../header/header.module.css';
import useFileStore from '../../../store/file.store';
import { startPreview } from '../../../preview/run-preview';
import { FileName } from '../../../constants/files.types';

const Primary = (): JSX.Element => {
  const name = useFileStore((state) => state.name);
  const running = useFileStore((state) => state.running);
  return (
    <div className={styles.primary}>
      <div className={styles.header_action}>
        <div className={styles.cross}></div>
        <div className={styles.minimize}></div>
        <div className={styles.expand}></div>
      </div>
      {FileName[name]} - portfolioapp
      <button
        className={styles.run}
        disabled={running}
        onClick={() => startPreview('full')}
      >
        <Play className={styles.runIcon} aria-hidden="true" />
        Run
      </button>
    </div>
  );
};

export default Primary;
