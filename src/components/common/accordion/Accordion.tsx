import React, { useState } from 'react';
import * as styles from './accordion.module.css';
import { ChevronDown } from 'lucide-react';

interface IAccordion {
  isAccordionOpen: boolean;
  children: React.ReactNode;
  title: React.ReactNode;
  customStyle?: string;
}

const Accordion = (props: IAccordion) => {
  const { isAccordionOpen, children, title, customStyle } = props;
  const [show, setShow] = useState(isAccordionOpen || false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={customStyle}>
      <div className={styles.title_container} onClick={handleClick}>
        <div className={styles.title}>
          <ChevronDown
            className={`${styles.icon}
                  ${show ? styles.active_chevron : styles.inactive__chevron}
            `}
          />{' '}
          {title}
        </div>
      </div>
      <div className={`${show ? styles.active : styles.inactive}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
