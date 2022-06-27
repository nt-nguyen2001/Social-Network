import { MdOutlineAccountCircle } from 'react-icons/md';
import { BsTelephone, BsCameraVideo, BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegSmileBeam } from 'react-icons/fa';
import { useEffect } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { OpenChatBox } from './Box';

const arr: any[] = [];

function ChatBox({
  idChat,
  isOpenChatBox,
  width,
  handleCloseChatBox,
}: {
  idChat: string;
  isOpenChatBox: boolean;
  width: boolean;
  handleCloseChatBox: () => void;
}) {
  useEffect(() => {
    console.log('call api message', idChat);
  }, []);

  return (
    <div className="flex flex-col justify-between w-full p-4 gap-5 overflow-hidden max-h-screen">
      <div className="flex justify-between items-center relative after:-content[''] after:absolute after:h-[1px] after:bg-[#B4ABABA8] after:w-full after:-bottom-5">
        {isOpenChatBox && !width && (
          <RiArrowLeftSLine className="text-4xl" onClick={handleCloseChatBox} />
        )}
        <div className="flex gap-2">
          <div className="w-[44px]">
            <MdOutlineAccountCircle className="w-full h-full" />
          </div>
          <div>
            <p>Anil</p>
            <p className="text-[11px]">Online - Last seen, 2.02pm</p>
          </div>
        </div>
        <div className="flex gap-3">
          <BsTelephone />
          <BsCameraVideo />
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className=" flex flex-col gap-3 flex-1 mt-5 overflow-auto ">
        {arr?.map((item, index) => (
          <div
            className={`flex flex-col gap-3 items-${item} 
          `}
            key={index}
          >
            <div
              className={`py-2 px-4 rounded-xl  ${
                (item === 'start' && 'bg-[#e7e7e7]') || 'bg-[#6E00FF] text-white'
              } `}
            >
              Hey There!
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <div
          contentEditable={true}
          className="bg-[#EFF6FC] w-full min-h-10 max-h-32 overflow-auto rounded-xl pl-5 pr-10 py-3 text-sm"
          placeholder="Type your message here"
        ></div>
        <FaRegSmileBeam className="absolute top-[calc(50%-8px)] right-[8px]" />
      </div>
    </div>
  );
}

export default ChatBox;
