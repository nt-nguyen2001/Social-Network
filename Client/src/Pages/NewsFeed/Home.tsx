import { useContext } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import { WidthDeviceContext } from '../../Context/WidthDevice.Context';
import Comment from './Comment';
import Contact from '../../Components/Contact';

const a = [1, 1, 1, 1, 1, 1];

function Home() {
  const { widthMobile } = useContext(WidthDeviceContext);
  return (
    <>
      <Header />
      <section className="bg-[#1c1e21] pt-[100px] lg:pt-[56px] lg:pl-[350px] min-h-screen flex">
        {!widthMobile && <SideBar />}
        <div className="flex-1 flex flex-col gap-5 items-center lg:px-5 lg:pt-5">
          {a.map(() => (
            <>
              <div className="min-w-[320px] lg:py-4 lg:max-w-[590px] py-3  bg-[#242526] text-white rounded-lg">
                <div className="px-4 flex gap-3">
                  <div className="h-[40px] w-[40px]">
                    <img
                      src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/269859446_2007334679450241_1229469730610810340_n.png?stp=cp0_dst-png_p60x60&_nc_cat=110&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=pkC88G2cwOAAX93wE5a&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_1gXwAidrY05jIzonNzJm6xLObnycjB-oq3mzSidWWFg&oe=62C0C56F"
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p>Name</p>
                    <p className="text-xs text-[#B0B3B8]">20 h</p>
                  </div>
                </div>
                <p className="px-4 pt-1 text-sm">
                  Ví dụ ở đây là chỉ cần thay đổi code vùng khoanh đỏ lên trên hoặc xuống dưới dòng
                  code "padding: 64px 0 112px" là đã thay đổi ở website rồi.
                </p>
                <div className="pt-3">
                  <img
                    src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/290391095_617333150105610_1241930574698549512_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=wLEGT7qxSoUAX9uU6Ge&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8V462Surwz0VsshuRbB3qqUPreckUQRM8MScWbM5gEPA&oe=62C0DBAD"
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between px-4 pt-2 pb-2">
                    <div className="h-[18px] w-[18px]">
                      <img
                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                        alt=""
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <p>51 Comments</p>
                    </div>
                  </div>
                  <div className="flex justify-around py-1 px-4 text-[#B0B3B8] border-y border-[#333436]">
                    <div className="flex gap-2 items-center hover-overlay py-1 flex-1 justify-center rounded-sm">
                      <AiOutlineLike />
                      <p>Like</p>
                    </div>
                    <div className="flex gap-2 items-center hover-overlay py-1 flex-1 justify-center rounded-sm">
                      <FaRegCommentAlt />
                      <p>Comment</p>
                    </div>
                  </div>
                </div>
                <Comment />
              </div>
            </>
          ))}
        </div>
        {!widthMobile && <Contact />}
      </section>
    </>
  );
}

export default Home;
