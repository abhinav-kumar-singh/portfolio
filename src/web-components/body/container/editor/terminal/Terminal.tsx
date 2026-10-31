import React, { useEffect, useRef } from 'react';
import useFileStore from '../../../../../store/file.store';
import * as styles from './terminal.module.css';

const Terminal = () => {
  const logs = useFileStore((state) => state.logs);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' });
  }, [logs]);

  return (
    <div className={styles.panel}>
      <div className={styles.terminal_action}>
        <div className={styles.active}>TERMINAL</div>
      </div>
      <div className={styles.terminal_output}>
        {logs.map((line, index) => {
          const prompt = line.startsWith('abhinav.singh@MACPRO');
          const idle = line === 'abhinav.singh@MACPRO ~ %';
          return (
            <div
              key={`${index}-${line}`}
              className={prompt ? styles.command : styles.server}
            >
              {line}
              {idle && index === logs.length - 1 ? (
                <span className={styles.cursor} />
              ) : null}
            </div>
          );
        })}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default Terminal;
