"use client";

import { useDispatch } from "react-redux";
import { openModal } from "../app/redux/modalSlice";

function Landing() {
    const dispatch = useDispatch();



    return(
        <>
        <section id="landing">
      <div className="py-[40px] w-full">
        <div className="max-w-[1070px] w-full m-auto py-[24px]">
          <div className="flex">
            <div className="w-full">
              <div className="text-[#032b41] text-[40px] font-bold mb-[24px] ">
                Gain more knowledge <br className="hidden md:block" />
                in less time
              </div>
              <div className="text-[#394547] text-[20px] font-[300] mb-[24px] leading-[1.5]">
                Great summaries for busy people,
                <br className="hidden md:block" />
                individuals who barely have time to read,
                <br className="hidden md:block" />
                and even people who don’t like to read.
              </div>
              <button className="bg-[#2bd97c] text-[#032b41] w-full h-[40px] rounded-sm font-[16px] transition-colors duration-200 flex items-center justify-center min-w-[180px] max-w-[300px] hover:bg-[#20ba68] active:translate-y-[1px] cursor-pointer"
              onClick={() => dispatch(openModal())}>Login</button>
            </div>
            <figure className="w-full flex justify-end h-full max-w-[400px]">
              <img src="/assets/landing.png" alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Landing