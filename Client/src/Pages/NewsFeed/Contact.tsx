import { BiSearch } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 1, 1, 1, 1];

function Contact() {
  return (
    <div className="w-[350px] overflow-auto max-h-screen sticky top-[56px]">
      <div className="flex items-center justify-between pt-10 px-4 text-[#B0B3B8]">
        <p className="font-bold ">Contacts</p>
        <BiSearch className=" left-3 text-xl" />
      </div>
      <div className="flex flex-col  pt-10 text-white">
        {arr.map((v, i) => (
          <div
            className="flex items-center gap-5 p-4 hover:bg-[#ffffff1a] rounded-md cursor-pointer transition-all duration-300"
            key={i}
          >
            <div className="w-[36px] h-[36px]">
              <img
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/269859446_2007334679450241_1229469730610810340_n.png?stp=cp0_dst-png_p60x60&_nc_cat=110&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=pkC88G2cwOAAX93wE5a&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_1gXwAidrY05jIzonNzJm6xLObnycjB-oq3mzSidWWFg&oe=62C0C56F"
                alt=""
                className="rounded-full"
              />
            </div>
            <p>Full Name Your Friend</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
