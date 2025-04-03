import React from 'react';
import {
  ACTION,
  LEFT_BOTTOM_ACTION,
  LEFT_TOP_ACTION,
} from '../../constants/left-action';
import * as styles from './body.module.css';
import useFileStore, { setAction } from '../../store/file.store';

const WORKING_ACTION = [ACTION.Files, ACTION.Search, ACTION.Profile];

const LeftAction = () => {
  const selectedAction = useFileStore((state) => state.selectedAction);
  const handleActionClick = (action: ACTION) => {
    switch (action) {
      case ACTION.Profile:
        window.open('http://www.linkedin.com/in/abhinav-singh-602934267');
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
          return (
            <action.comp
              className={`${styles.icon} ${action.label === selectedAction ? styles.active : ''} ${WORKING_ACTION.includes(action.label) ? styles.working_action : styles.not_working_action}`}
              key={action.id}
              onClick={() => handleActionClick(action.label)}
            />
          );
        })}
      </div>
      <div className={styles.action}>
        {LEFT_BOTTOM_ACTION.map((action) => {
          return (
            <div
              onClick={() => handleActionClick(action.label)}
              key={action.id}
            >
              <action.comp
                className={`${styles.icon} ${WORKING_ACTION.includes(action.label) ? styles.working_action : styles.not_working_action}`}
                key={action.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftAction;
