import icons8_facebook from '../Assets/Images/icons8-facebook.svg';
import { BiSearch } from 'react-icons/bi';
import { BsBellFill } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaUserFriends, FaBars } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import { WidthDeviceContext } from '../Context/WidthDevice.Context';
import SideBar from './SideBar';
import { SideBarHoc } from '../HOCS/SideBar.HOC';
import InputSearch from './InputSearch';

function Header() {
  const { widthMobile } = useContext(WidthDeviceContext);
  const [isBar, setIsBar] = useState(false);

  const handleOpenBar = () => {
    setIsBar(!isBar);
  };

  return (
    <>
      <section className="bg-[#242526]  pl-4 pr-8 py-1 flex flex-col lg:flex-row justify-between items-center fixed top-0 w-full text-base">
        <div className="flex justify-between items-center gap-5 text-[#E4E6EB] w-full lg:w-[450px]">
          <div className="flex items-center justify-between gap-2 w-full ">
            <div className="flex justify-between items-center flex-1">
              <img src={icons8_facebook} className="h-[32px] lg:h-[44px] pr-1" alt="" />
              <InputSearch
                style={{ width: (widthMobile && '0') || '100%' }}
                detectOutside={widthMobile}
              />
            </div>
            {widthMobile && (
              <div>
                <FaBars onClick={handleOpenBar} />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between lg:justify-end lg:gap-4 w-full text-white pt-2">
          <div className="icon-header hover-overlay">
            <AiFillHome />
          </div>
          <div className="icon-header hover-overlay">
            <FaUserFriends />
          </div>
          <div className="icon-header hover-overlay">
            <RiSendPlaneFill />
          </div>
          <div className="icon-header hover-overlay">
            <BsBellFill />
          </div>
        </div>
      </section>
      {isBar && widthMobile && <SideBar handleOpenBar={handleOpenBar} widthMobile={widthMobile} />}
    </>
  );
}

export default Header;
