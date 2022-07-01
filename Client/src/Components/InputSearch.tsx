import { CSSProperties, DOMAttributes, useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const InputSearch = (
  props: { style?: CSSProperties } & DOMAttributes<HTMLDivElement> & { detectOutside?: boolean }
) => {
  const [isSearch, setIsSearch] = useState(props.style?.width);
  const refSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleDetectOutSide = (e: Event) => {
      if (!refSearch.current!.contains(e.target as Node)) {
        setIsSearch(props.style?.width);
      }
    };
    setIsSearch(props.style?.width);
    if (props.detectOutside) {
      window.addEventListener('click', handleDetectOutSide);
    }
    return () => window.removeEventListener('click', handleDetectOutSide);
  }, [props.detectOutside, props.style?.width]);

  const handleOpenSearch = () => {
    setIsSearch('100%');
  };
  return (
    <div
      className="relative flex justify-center items-center py-2 px-[20px] bg-[#3A3B3C] rounded-full transition-all duration-500"
      {...props}
      style={{ width: isSearch }}
      onClick={handleOpenSearch}
      ref={refSearch}
    >
      <div className="flex justify-center ">
        <BiSearch />
      </div>
      <div className={`flex-1 ${isSearch !== '0' && 'pl-2'}`}>
        <input
          type="text"
          className={`bg-transparent w-full outline-none flex-1`}
          placeholder="Search"
        />
      </div>
    </div>
  );
};
export default InputSearch;
