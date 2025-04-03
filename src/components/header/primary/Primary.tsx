import React, { JSX } from 'react';
import * as styles from '../../header/header.module.css';
import useFileStore from '../../../store/file.store';
import { FileName } from '../../../constants/files.types';

const Primary = (): JSX.Element => {
  const name = useFileStore((state) => state.name);
  return (
    <div className={styles.primary}>
      <div className={styles.header_action}>
        <div className={styles.cross}></div>
        <div className={styles.minimize}></div>
        <div className={styles.expand}></div>
      </div>
      {FileName[name]} - portfolioapp
    </div>
  );
};

export default Primary;
