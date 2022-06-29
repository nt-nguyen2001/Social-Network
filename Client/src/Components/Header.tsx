import icons8_facebook from '../Assets/Images/icons8-facebook.svg';
import { BiSearch } from 'react-icons/bi';
import { BsBellFill } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';

function Header() {
  return (
    <section className="bg-[#242526] pl-4 pr-8 py-1 flex justify-between items-center fixed top-0 w-full">
      <div className="flex gap-2 items-center">
        <div>
          <img src={icons8_facebook} />
        </div>
        <div className="relative bg-[#3A3B3C] text-[#E4E6EB] flex items-center rounded-full">
          <input
            type="text"
            className="bg-transparent w-full py-2 px-10 outline-none"
            placeholder="Search"
          />
          <BiSearch className="absolute left-3 text-xl" />
        </div>
      </div>
      <div className="flex text-xl gap-10 text-white">
        <div className="icon-header hover-overlay">
          <BsBellFill />
        </div>
        <div className="icon-header hover-overlay">
          <RiSendPlaneFill />
        </div>
      </div>
    </section>
  );
}

export default Header;
