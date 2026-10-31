import React, { JSX, lazy, Suspense } from 'react';
import * as styles from './web.module.css';
import './web_app.module.css';
import { Body, Footer, Header } from '../../web-components';
import useFileStore from '../../store/file.store';

const PreviewGate = lazy(() => import('../../preview/PreviewGate'));

const BuildStatus = () => {
  return (
    <div className={styles.build} role="status">
      Building preview
    </div>
  );
};

const PreviewSlot = () => {
  const preview = useFileStore((state) => state.preview);

  if (!preview) {
    return null;
  }

  return (
    <Suspense fallback={<BuildStatus />}>
      <PreviewGate />
    </Suspense>
  );
};

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
      <PreviewSlot />
    </>
  );
};

export default WebView;
