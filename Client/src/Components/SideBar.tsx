import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { createPortal } from 'react-dom';
function SideBar({
  handleOpenBar,
  widthMobile,
}: {
  handleOpenBar?: () => void;
  widthMobile?: boolean;
}) {
  const [elSideBar, setElSideBar] = useState(document.createElement('div'));
  useEffect(() => {
    const html = document.getElementsByTagName('html');
    if (widthMobile) {
      html[0].style.overflow = 'hidden';
    }
    return () => void (html[0].style.overflow = '');
  }, [widthMobile]);
  useEffect(() => {
    const el = document.getElementById('sideBar') as HTMLDivElement;
    el.appendChild(elSideBar);

    return () => {
      el.removeChild(elSideBar);
    };
  }, []);
  return createPortal(
    <>
      <div className="bg-[#1c1e21] h-screen fixed top-0 z-10 w-full max-w-[350px] lg:w-[300px]  lg:top-[56px] text-[#e4e6eb]">
        {widthMobile && (
          <>
            <div className="flex justify-end p-4 text-lg">
              <AiOutlineClose onClick={handleOpenBar} />
            </div>
            {/* <div className="absolute top-0 z-[-1] w-screen h-full bg-slate-500"></div> */}
          </>
        )}
        <div className="py-8 pt-[56px]">
          <div className="px-8 pb-8 border-b border-[#333436]">
            <div className="flex flex-col items-center justify-center  gap-4">
              <div className="w-[64px] h-[64px]">
                <img
                  src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-1/49167909_359061294885153_1755708804411949056_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zg_ksjP8YCoAX9uUzPn&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT-qSvEHEx7DnWX4MVGlBO-DhicwyCLyKeZG9An_VCTGAw&oe=62E1544C"
                  alt=""
                  className="rounded-full h-full"
                />
              </div>
              <p>Nguyen Trung Nguyen</p>
            </div>
            <div className="flex justify-between gap-5 pt-10">
              <div className="text-xs flex flex-col items-center gap-2">
                <p className="font-black">120</p>
                <p className="">POSTS</p>
              </div>
              <div className="text-xs flex flex-col items-center gap-2">
                <p className="font-black">120</p>
                <p className="">FOLLOWERS</p>
              </div>
              <div className="text-xs flex flex-col items-center gap-2">
                <p className="font-black">120</p>
                <p className="">FOLLOWINGS</p>
              </div>
            </div>
          </div>
          <div className="pt-4 flex flex-col ">
            <div className="px-8 py-4 hover:bg-[#ffffff1a] rounded-md cursor-pointer transition-all duration-300">
              Feed
            </div>
            <div className="px-8 py-4 hover:bg-[#ffffff1a] rounded-md cursor-pointer transition-all duration-300">
              Setting
            </div>
            <div className="px-8 py-4 hover:bg-[#ffffff1a] rounded-md cursor-pointer transition-all duration-300">
              Log Out
            </div>
          </div>
        </div>
      </div>
      {widthMobile && <div className="absolute top-0 w-screen h-screen bg-[#00000078]"></div>}
    </>,
    elSideBar
  );
}

export default SideBar;
