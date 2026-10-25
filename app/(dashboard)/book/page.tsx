"use client"
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineMicrophone } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBookOpenText } from "react-icons/lu";
function Book() {
   
    return (
        <div className="max-w-[1070px] w-full mx-auto px-[24px]">
            <div className="py-[40px] w-full">
                <div className="flex gap[16px]">
                    <div className="w-full">
                        <div className="text-[#032b41] text-[32px] mb-16px font-semibold">
                            Can't Hurt Me
                        </div>
                        <div className="div">
                            David goggins
                        </div>
                        <div className="text-[20px] text-[#032b41] mb-16px font-light">
                            Master Your Mind and Defy the Odds
                        </div>
                        <div className="border-t-[#e1e7ea] border-b-[#e1e7ea] border-t border-b py-[16px] mb-[24px] ">
                            <div className="flex flex-wrap max-w-[400px] gap-y-3">
                                <div className="flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
                                    <div className=""><FaRegStar className="flex h-[24px] w-[24px] mr-[4px]"/></div>
                                    <div className="mr-[4px]"> 4.2</div>
                                    <div className="">(726 ratings)</div>
                                </div>
                                <div className="flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
                                    <div className=""><FaRegClock className="flex h-[24px] w-[24px] mr-[4px]"/></div>
                                    <div className="">04:52</div>                                    
                                </div>
                                <div className="flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
                                    <div className=""><HiOutlineMicrophone className="flex h-[24px] w-[24px] mr-[4px]"/></div>
                                    <div className="">Audio & Text</div>                                    
                                </div>
                                <div className="flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
                                    <div className=""><HiOutlineLightBulb className="flex h-[24px] w-[24px] mr-[4px]"/></div>
                                    <div className="">6 Key ideas</div>                                    
                                </div>                            
                            </div>
                        </div>
                        <div className="flex gap-[16px] mb-[24px]">
                            <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-sm cursor-pointer gap-[8px] transition-opacity duration-200 hover:opacity-[.8]">
                                <div className="flex"><LuBookOpenText className="h-[24px] w-[24px]"/></div>
                                <div className="">Read</div>
                            </button>
                            <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-sm cursor-pointer gap-[8px] transition-opacity duration-200 hover:opacity-[.8]">
                                <div className="flex"><HiOutlineMicrophone className="h-[24px] w-[24px]"/></div>
                                <div className="">Listen</div>
                            </button>

                        </div>


                    </div>
                    <div className="div"></div>

                </div>

             </div>
            </div>
    )
    
}

export default Book