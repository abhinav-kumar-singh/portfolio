import React from 'react';
import {
  ACTION,
  LEFT_BOTTOM_ACTION,
  LEFT_TOP_ACTION,
} from '../../constants/left-action';
import * as styles from './body.module.css';
import { CONTACT } from '../../constants/all';
import useFileStore, { setAction } from '../../store/file.store';

const LeftAction = () => {
  const selectedAction = useFileStore((state) => state.selectedAction);
  const handleActionClick = (action: ACTION) => {
    switch (action) {
      case ACTION.Profile:
        window.open(CONTACT.linkedin);
        break;
      case ACTION.Search:
        setAction(ACTION.Search);
        break;
      case ACTION.Files:
        setAction(ACTION.Files);
        break;
      default:
        setAction(ACTION.Files);
    }
  };

  return (
    <div className={styles.left_action}>
      <div className={styles.action}>
        {LEFT_TOP_ACTION.map((action) => {
          const active = action.label === selectedAction;
          return (
            <button
              key={action.id}
              className={`${styles.activity} ${active ? styles.activityActive : ''}`}
              aria-label={action.label}
              onClick={() => handleActionClick(action.label)}
            >
              <action.comp
                className={`${styles.icon} ${active ? styles.active : ''}`}
              />
            </button>
          );
        })}
      </div>
      <div className={styles.action}>
        {LEFT_BOTTOM_ACTION.map((action) => {
          return (
            <button
              key={action.id}
              className={styles.activity}
              aria-label={action.label}
              onClick={() => handleActionClick(action.label)}
            >
              <action.comp className={styles.icon} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LeftAction;
