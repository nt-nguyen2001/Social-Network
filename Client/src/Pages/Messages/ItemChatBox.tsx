import { MdOutlineAccountCircle } from 'react-icons/md';

function ItemChatBox({
  arr,
  handleSetIdChat,
}: {
  arr: number[];
  handleSetIdChat: (index: string) => () => void;
}) {
  return (
    <>
      {arr.map((item, index) => (
        <div
          className="flex gap-2 px-4 justify-between items-center cursor-pointer hover:bg-[#E7E7E7] transition-all duration-300"
          key={index}
          onClick={handleSetIdChat(index + '')}
        >
          <div className="w-[36px]">
            <MdOutlineAccountCircle className="w-full h-full" />
          </div>
          <div className="flex-1 w-[100px] ">
            <div className="truncate">Friend Forever Friend Forever</div>
            <div className="truncate">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum voluptates ipsum
              vero enim, cum dolorem officiis consequatur voluptatem officia vitae labore modi
              laboriosam delectus obcaecati harum maiores. Inventore, cupiditate!
            </div>
          </div>
          <div className="text-xs flex-[0] sm:flex-[none] text-right">
            <div>Today, 9:52pm</div>
            <div>4</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemChatBox;
