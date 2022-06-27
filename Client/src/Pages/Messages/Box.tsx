import { useEffect, useState } from 'react';
import ChatBox from './ChatBox';
import ListMessage from './ListMessage';
import SideBar from './SideBar';

export enum OpenChatBox {
  both = 1,
  listMessage,
  chatBox,
}

function BoxMessages() {
  const [isOpenChatBox, setIsOpenChatBox] = useState(false);
  const [width, setWidth] = useState(window.innerWidth >= 768);
  const [idChat, setIdChat] = useState('1');

  const handleSetIdChat = (id: string) => () => {
    setIdChat(id);
    setIsOpenChatBox(!isOpenChatBox);
  };
  const handleCloseChatBox = () => {
    setIsOpenChatBox(!isOpenChatBox);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <ListMessage handleSetIdChat={handleSetIdChat} width={width} isOpenChatBox={isOpenChatBox} />
      {(width || isOpenChatBox) && (
        <ChatBox
          width={width}
          isOpenChatBox={isOpenChatBox}
          idChat={idChat}
          handleCloseChatBox={handleCloseChatBox}
        />
      )}
    </div>
  );
}

export default BoxMessages;
