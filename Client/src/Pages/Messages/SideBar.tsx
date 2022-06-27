import { AiOutlineHome, AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
function SideBar() {
  return (
    <div className="bg-[#6E00FF] h-screen w-[64px] flex flex-col text-3xl py-5 gap-10 text-gray-200">
      <div className="flex justify-center ">
        <MdOutlineAccountCircle />
      </div>
      <div className="flex flex-col gap-7 w-full">
        <div className="flex justify-center p-4 bg-[#612DD1E5] relative w-full after:content-[''] after:absolute  after:bg-[#F3B559] after:w-[4px] after:h-full after:top-0 after:right-0">
          <AiOutlineHome />
        </div>
        <div className="flex justify-center ">
          <AiOutlineMessage />
        </div>
        <div className="flex justify-center ">
          <AiOutlineSetting />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
