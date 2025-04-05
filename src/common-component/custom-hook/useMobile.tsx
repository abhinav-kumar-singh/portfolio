import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 900;

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;
