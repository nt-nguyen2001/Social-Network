function SideBar() {
  return (
    <div className="py-8 w-[300px] pt-[56px] text-[#e4e6eb] max-h-screen sticky top-[56px]">
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
        <div className="flex gap-5 pt-10">
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
  );
}

export default SideBar;
