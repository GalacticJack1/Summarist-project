import { BiCrown } from "react-icons/bi"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { RiLeafLine } from "react-icons/ri"



function Numbers() {
    return (
           <section id="bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-lg">
      <div className="py-[40px] w-full">
        <div className="max-w-[1070px] w-full m-auto py-24px">
          <div className="text-[32px] text-[#032b41] text-center mb-[32px] font-bold">Start growing with Summarist now</div>
          <div className="grid grid-cols-3 gap-[40px]">
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-lg">
              <div className="flex items-center h-[60px] gap-[4px]">
                <BiCrown className="h-[48px] w-[48px] text-[#0365f2]" />
              </div>
              <div className="text-[40px] text-[#032b41] font-bold mb-[16px]">3 Million</div>
              <div className="text-[#394547] font-light">Downloads on all platforms</div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-lg">
              <div className="flex items-center h-[60px] gap-[4px]">
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]"/>
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]"/>
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]"/>
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]"/>
                <BsStarHalf className="w-[20px] h-[20px] text-[#0365f2]"/>
              </div>
              <div className="text-[40px] text-[#032b41] font-bold mb-[16px]">4.5 Stars</div>
              <div className="text-[#394547] font-light">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-lg">
              <div className="flex items-center h-[60px] gap-[4px]">
                <RiLeafLine className="h-[48px] w-[48px] text-[#0365f2]"/>
              </div>
              <div className="text-[40px] text-[#032b41] font-bold mb-[16px]">97%</div>
              <div className="text-[#394547] font-light">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}

export default Numbers