import React from 'react';
import * as styles from './body.module.css';
import LeftAction from './LeftAction';
import Container from './container/Container';

const Body = () => {
  return (
    <div className={styles.body_container}>
      <section className={styles.left_section}>
        <LeftAction />
      </section>
      <section className={styles.right_section}>
        <Container />
      </section>
    </div>
  );
};

export default Body;
