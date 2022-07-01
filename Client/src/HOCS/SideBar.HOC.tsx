import { useContext, useEffect, useState } from 'react';
import { WidthDeviceContext } from '../Context/WidthDevice.Context';
import { createPortal } from 'react-dom';

export const SideBarHoc = ({ children }: { children: JSX.Element }) =>
  (function Warrper() {
    const [elSideBar, setElSideBar] = useState(document.createElement('div'));
    const { widthMobile } = useContext(WidthDeviceContext);
    useEffect(() => {
      const el = document.getElementById('sideBar') as HTMLDivElement;
      elSideBar.style.position = 'fixed';
      elSideBar.style.top = '0';
      elSideBar.style.width = '100%';

      const html = document.getElementsByTagName('html');
      html[0].style.overflow = 'hidden';
      el.appendChild(elSideBar);

      return () => {
        el.removeChild(elSideBar);
        html[0].style.overflow = '';
      };
    }, []);
    return createPortal(children, elSideBar);
  })();
