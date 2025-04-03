import React from 'react';
import * as styles from './terminal.module.css';
import TERMINAL_ACTINS from '../../../../../constants/terminal-action';

const Terminal = () => {
  return (
    <div>
      <div className={styles.terminal_action}>
        {TERMINAL_ACTINS.map((action) => {
          return (
            <div
              key={action.id}
              className={action.id === 1 ? styles.active : ''}
            >
              {action.label}
            </div>
          );
        })}
      </div>
      <div className={styles.terminal_output}>
        <div className={styles.command}>$ pnpm run start </div>
        <div className={styles.server}>Starting development server... </div>
        <div className={styles.server}>Compiled successfully. </div>
        <div className={styles.server}>
          You can now view portfolio-app in the browser.
        </div>
        <div className={styles.localhost}>
          Local:{' '}
          <a
            href="http://www.linkedin.com/in/abhinav-singh-602934267"
            target="_blank"
          >
            http://localhost:3000
          </a>
        </div>
        <div className={styles.server}>
          Rspack compiled successfully in 83 ms
        </div>
      </div>
    </div>
  );
};

export default Terminal;
