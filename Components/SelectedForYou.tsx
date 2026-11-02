"use client"

import { FaRegCirclePlay } from "react-icons/fa6";
import { useState, useEffect } from  "react";

  function SelectedForYou() {

    const [loading, setLoading] = useState(true);

   useEffect(() => { 
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1000);
   
   return () => clearTimeout(timer);
}, []);



    return (
        <div className="pt-[40px] px-[40px] w-full max-w-[1070px] mx-auto transition-all">
            <div className="text-center md:text-left text-[22px] text-[#032b41]-bold mb-[16px]">
                Selected just for you
            </div>

            {loading ? (
        <div className="h-[225px] flex bg-gray-200 rounded-sm mb-[24px] w-[calc((100%/3)*2)] md:justify-between p-[24px] gap-[24px] md:shrink-0 animate-pulse "></div>
        
             ) : (
        
            
<a
  href="/book/f9gy1gpai8"
  className="flex flex-col lg:flex-row w-full lg:w-[calc(100%*2/3)] mx-auto lg:mx-0 bg-[#fbefd6] rounded-sm mb-[24px] p-[24px] gap-[24px] text-center lg:text-left"
>

            <div className="text-[#032b41] w-full lg:w-[40%] min-w-0">
                How constant innovation creates radically successful businesses
                </div>
                <div className="w-[1px] bg-[#bac8ce]">                    
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-[16px] w-full lg:w-[60%] min-w-0 items-center sm:items-start lg:items-center xl:items-start">
                    <figure><img className="w-[140px] h-[140px] min-w-[140px]" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2" alt="" /></figure>
                    <div className="w-full">
                        <div className="text-[#032b41] font-semibold mb-[8px]">The Lean Startup</div>
                        <div className="text-[14px] text-[#394547] mb-[16px]">Eric Ries</div>
                        <div className="mx-auto md:mx-0 flex items-center gap-[8px]">
                            <div className="mx-auto md:mx-0 flex w-[40px] min-w-[40px] h-[40px]">
                                <FaRegCirclePlay className="mx-auto md:mx-0 w-full h-full" /> </div>
                            <div className="mx-auto md:mx-0 text-[14px] font-medium text-[#032b41]">3 mins 23 secs</div>
                        </div>
                    </div>

                </div>
            </a>
             )}           
       </div>

    )
}

export default SelectedForYou