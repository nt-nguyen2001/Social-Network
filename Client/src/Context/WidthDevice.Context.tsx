import { createContext, useEffect, useState } from 'react';

export const WidthDeviceContext = createContext<{ widthMobile: boolean }>({ widthMobile: false });

export const WidthDeviceProvider = ({ children }: { children: JSX.Element }) => {
  const [widthMobile, setWidthMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const resize = () => {
      setWidthMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  return (
    <WidthDeviceContext.Provider value={{ widthMobile }}>{children}</WidthDeviceContext.Provider>
  );
};
