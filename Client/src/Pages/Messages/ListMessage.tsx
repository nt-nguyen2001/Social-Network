import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import ItemChatBox from './ItemChatBox';

const arr = [1, 2, 3, 4, 5, 6, 7];

function ListMessage({
  handleSetIdChat,
  isOpenChatBox,
  width,
}: {
  handleSetIdChat: (id: string) => () => void;
  isOpenChatBox: boolean;
  width: boolean;
}) {
  const [groups, setGroups] = useState([1, 2]);
  const [people, setPeople] = useState([1, 2]);
  useEffect(() => {
    console.log('?');
  }, []);
  return (
    <div
      className={`flex flex-col w-full md:min-w-[325px] md:max-w-[325px] p-4 gap-5 overflow-hidden max-h-screen ${
        isOpenChatBox && !width && 'hidden'
      }`}
    >
      <div className="flex relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full text-base px-10 py-1 rounded-lg shadow-[0_4px_5px_2px_rgba(121,197,239,0.38)]"
        />
        <AiOutlineSearch className="absolute top-[calc(50%-8px)] left-[calc(20px-8px)] text-base" />
      </div>
      <div className="table-chatBox">
        <div className="font-medium px-4">Groups</div>
        <div className="group-chatBox">
          <ItemChatBox arr={groups} handleSetIdChat={handleSetIdChat} />
        </div>
      </div>
      <div className="table-chatBox">
        <div className="font-medium px-4">People</div>
        <div className="group-chatBox">
          <ItemChatBox arr={people} handleSetIdChat={handleSetIdChat} />
        </div>
      </div>
    </div>
  );
}

export default ListMessage;
