import icons8_facebook from '../Assets/Images/icons8-facebook.svg';
import { BiSearch } from 'react-icons/bi';

function Header() {
  return (
    <section className="bg-[#242526] px-4 py-1 flex items-center">
      <div>
        <img src={icons8_facebook} />
      </div>
      <div className="relative bg-[#3A3B3C] text-[#E4E6EB] flex items-center rounded-full">
        <input
          type="text"
          className="bg-transparent w-full py-2 px-10 outline-none"
          placeholder="Search"
        />
        <BiSearch className="absolute left-4 " />
      </div>
    </section>
  );
}

export default Header;
