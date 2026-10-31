import React, { useEffect, useState } from 'react';
import { PreviewFrame } from '../../preview/PreviewGate';
import AnimatedLoader from '../../mobile-component/layout/AnimatedLoader';

const MobileView = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatedLoader isLoading={isLoading} />
      <PreviewFrame />
    </>
  );
};

export default MobileView;
