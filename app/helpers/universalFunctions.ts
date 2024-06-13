import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileCheck = window.matchMedia('(max-width: 768px)');
      setIsMobile(mobileCheck.matches);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};
