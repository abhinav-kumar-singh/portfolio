import React, { JSX } from 'react';
import * as styles from './web.module.css';
import './web_app.module.css';
import { Body, Footer, Header } from '../../web-components';

const WebView = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default WebView;
