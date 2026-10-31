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
        
            <a href="/book/f9gy1gpai8" className="text-center md:text-left flex-col md:flex-row  mx-auto md:mx-0 flex bg-[#fbefd6] rounded-sm mb-[24px] md:w-[calc((100%/3)*2)] justify-between p-[24px] gap-[24px]
            ">
            <div className="flex-col text-[#032b41] md:w-[40%]">
                How constant innovation creates radically successful businesses
                </div>
                <div className="w-[1px] bg-[#bac8ce]">                    
                </div>
                <div className="mx-auto md:mx-0 flex-col md:flex-row flex gap-[16px] md:w-[60%]">
                    <figure><img className="w-[140px] h-[140px] min-w-[140px]" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2" alt="" /></figure>
                    <div className="w-full">
                        <div className="text-[#032b41] font-semibold mb-[8px]">The Lean Startup</div>
                        <div className="text-[14px] text-[#394547] mb-[16px]">Eric Ries</div>
                        <div className="flex items-center gap-[8px]">
                            <div className="flex items-center w-[40px] min-w-[40px] h-[40px]"><FaRegCirclePlay className="w-full h-full" /> </div>
                            <div className="text-[14px] font-medium text-[#032b41]">3 mins 23 secs</div>
                        </div>
                    </div>

                </div>
            </a>
             )}           
       </div>

    )
}

export default SelectedForYou