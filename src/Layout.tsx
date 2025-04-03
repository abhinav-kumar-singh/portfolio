import React from 'react';
import './app.module.css';
import * as styles from './layout.module.css';
import { Body, Footer, Header } from './components';

function Layout() {
  return (
    <div>
      <div className={styles.files}></div>
      <section className={styles.hero}>
        <section>
          <Header />
        </section>
        <section className={styles.body}>
          <Body />
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default Layout;
