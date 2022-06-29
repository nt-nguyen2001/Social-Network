function CommentInput() {
  return (
    <div className="flex items-center gap-2 pt-2">
      <div>
        <img
          src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-1/49167909_359061294885153_1755708804411949056_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zg_ksjP8YCoAX9uUzPn&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT-qSvEHEx7DnWX4MVGlBO-DhicwyCLyKeZG9An_VCTGAw&oe=62E1544C"
          alt=""
          className="rounded-full h-[32px] w-[32px] "
        />
      </div>
      <div
        className="#3a3b3c px-[18px] py-[7px] min-h-[36px] wrap rounded-[17px] bg-[#3a3b3c] outline-none flex-1"
        contentEditable
      ></div>
    </div>
  );
}

export default CommentInput;
