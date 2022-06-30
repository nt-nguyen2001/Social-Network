import { useState } from 'react';
import CommentInput from './CommentInput';
const arr = [1, 2, 3, 4];
function Comment() {
  const [isOpenCommentInput, setIsOpenCommentInput] = useState({
    id: '',
    open: false,
  });
  const handleOpenCommentInput = (id: string) => () => {
    setIsOpenCommentInput({
      id,
      open: true,
    });
  };
  return (
    <div className="w-full pt-3 px-4">
      <CommentInput />
      <div>
        {/* {arr.map((d, v) => (
          <div>
            <div className="flex py-3">
              <div>
                <img
                  src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-1/49167909_359061294885153_1755708804411949056_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zg_ksjP8YCoAX9uUzPn&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT-qSvEHEx7DnWX4MVGlBO-DhicwyCLyKeZG9An_VCTGAw&oe=62E1544C"
                  alt=""
                  className="rounded-full h-[32px] w-[32px] "
                />
              </div>
              <div className="pl-3">
                <div className="bg-[#3a3b3c] py-1 px-3 rounded-[17px]">
                  <p className="text-xs font-semibold">Nguyen Trung Nguyen</p>
                  <p className="text-[15px] pt-1">Comment</p>
                </div>
                <div className="flex gap-6 px-3 pt-1 text-xs font-bold text-[#B0B3B8]">
                  <p className="cursor-pointer hover:underline">Like</p>
                  <p
                    className="cursor-pointer hover:underline"
                    onClick={handleOpenCommentInput(v + '')}
                  >
                    Reply
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-10">
              <div className="flex">
                <div>
                  <img
                    src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-1/49167909_359061294885153_1755708804411949056_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zg_ksjP8YCoAX9uUzPn&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT-qSvEHEx7DnWX4MVGlBO-DhicwyCLyKeZG9An_VCTGAw&oe=62E1544C"
                    alt=""
                    className="rounded-full h-[32px] w-[32px] "
                  />
                </div>
                <div className="pl-3">
                  <div className="bg-[#3a3b3c] py-1 px-3 rounded-[17px]">
                    <p className="text-xs font-semibold">Nguyen Trung Nguyen</p>
                    <p className="text-[15px] pt-1">Comment</p>
                  </div>
                  <div className="flex gap-6 px-3 pt-1 text-xs font-bold text-[#B0B3B8]">
                    <p className="cursor-pointer hover:underline">Like</p>
                    <p
                      className="cursor-pointer hover:underline"
                      onClick={handleOpenCommentInput(v + '')}
                    >
                      Reply
                    </p>
                  </div>
                </div>
              </div>
              {v + '' === isOpenCommentInput.id && isOpenCommentInput.open && <CommentInput />}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Comment;
