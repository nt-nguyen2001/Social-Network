import icons8_facebook from '../Assets/Images/icons8-facebook.svg';
import { BiSearch } from 'react-icons/bi';
import { BsBellFill } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaUserFriends, FaBars } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import { WidthDeviceContext } from '../Context/WidthDevice.Context';

function Header() {
  const { widthMobile } = useContext(WidthDeviceContext);
  const [isSearch, setIsSearch] = useState((widthMobile && '40px') || '100%');
  const refSearch = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDetectOutSide = (e: Event) => {
      if (!refSearch.current!.contains(e.target as Node) && widthMobile) {
        setIsSearch('40px');
      }
    };
    setIsSearch((widthMobile && '40px') || '100%');
    widthMobile && window.addEventListener('click', handleDetectOutSide);
    return () => window.removeEventListener('click', handleDetectOutSide);
  }, [widthMobile]);

  const handleOpenSearch = (e: MouseEvent) => {
    e.preventDefault();
    setIsSearch('100%');
  };

  return (
    <section className="bg-[#242526]  pl-4 pr-8 py-1 flex flex-col lg:flex-row justify-between items-center fixed top-0 w-full text-base">
      <div className="flex justify-between items-center gap-5 text-[#E4E6EB] w-full lg:w-[450px]">
        <div className="flex items-center justify-between gap-2 w-full ">
          <div>
            <img src={icons8_facebook} className="h-[32px] lg:h-[44px]" />
          </div>
          <div
            className="relative  flex items-center bg-[#3A3B3C] rounded-full transition-all duration-500"
            onClick={(e) => handleOpenSearch(e)}
            ref={refSearch}
            style={{ width: isSearch }}
          >
            <input
              type="text"
              className={`bg-transparent py-2 px-[40px] w-full outline-none `}
              placeholder="Search"
            />
            <BiSearch className="absolute left-3" />
          </div>
        </div>
        {widthMobile && (
          <div>
            <FaBars />
          </div>
        )}
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
  );
}

export default Header;
