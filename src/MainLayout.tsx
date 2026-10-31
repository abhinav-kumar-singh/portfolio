import React from 'react';
import WebView from './layout/web-view/index';
import MobileView from './layout/mobile-view/index';
import useMobile from './common-component/custom-hook/useMobile';
import './layout/web-view/web_app.module.css';

function MainLayout() {
  const isMobileView = useMobile();

  return <>{!isMobileView ? <WebView /> : <MobileView />}</>;
}

export default MainLayout;
