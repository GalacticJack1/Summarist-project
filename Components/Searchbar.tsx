import { FaMagnifyingGlass } from "react-icons/fa6";

function Searchbar() {
    return (                     
    <div className="flex items-center justify-end h-[80px] px-[32px] border-b bg-white">
  <div className="relative w-[340px]">
    <input
      type="text"
      placeholder="Search for books"
      className="w-full h-[40px] pl-[12px] pr-[56px] bg-[#f1f6f4] text-[#042330] rounded-lg outline-none"
    />

    <button type="submit" className="absolute right-0 top-0 h-[40px] w-[48px] flex items-center justify-center border-l border-[#e1e7ea] cursor-pointer hover:bg-[#032b41] transition-colors ease-in-out duration-100 active:scale-95 group">
      <FaMagnifyingGlass className="w-[20px] h-[20px] text-[#03314b] transition-colors ease-in-out duration-100 group-hover:text-white" />
    </button>
  </div>
</div>
    )
}

export default Searchbar