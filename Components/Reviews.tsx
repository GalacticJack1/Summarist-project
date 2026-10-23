"use client";

import { useDispatch } from "react-redux";
import { openModal } from "../app/redux/modalSlice";
import  { BsStarFill }  from "react-icons/bs";

function Reviews() {
    const dispatch = useDispatch();


    return(
  <section id="reviews">
      <div className="max-w-[1070px] w-full m-auto py-[24px] ">
        <div className="px-[40px] w-full">
          <div className="text-[32px] text-[#032b41] text-center mb-[32px] font-bold">What our members say</div>
          <div className="max-w-[600px] m-auto">
            <div className="bg-[#fff3d7] p-[16px] mb-[32px] rounded font-light">
              <div className="text-[#032b41] flex gap-[8px] mb-[8px]">
                <div className="review__name">Hanna M.</div>
                <div className="fill-[#0564f1] flex flex-row">
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                </div>
              </div>
              <div className="text-[#394547] leading-1.4 tracking-[0.3px]">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>
            <div className="bg-[#fff3d7] p-[16px] mb-[32px] rounded font-light">
              <div className="text-[#032b41] flex gap-[8px] mb-[8px]">
                <div className="review__name">David B.</div>
                <div className="fill-[#0564f1] flex flex-row">
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>               
                </div>
              </div>
              <div className="text-[#394547] leading-1.4 ">
                I love this app! It provides
                <b>concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div className="bg-[#fff3d7] p-[16px] mb-[32px] rounded font-light">
              <div className="text-[#032b41] flex gap-[8px] mb-[8px]">
                <div className="review__name">Nathan S.</div>
                <div className="fill-[#0564f1] flex flex-row">
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                </div>
              </div>
              <div className="text-[#394547] leading-1.4 tracking-[0.3px]">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>
            <div className="bg-[#fff3d7] p-[16px] mb-[32px] rounded font-light">
              <div className="text-[#032b41] flex gap-[8px] mb-[8px]">
                <div className="review__name">Ryan R.</div>
                <div className="fill-[#0564f1] flex flex-row">
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                  <BsStarFill className="text-[#0365f2]"/>
                </div>
              </div>
              <div className="text-[#394547] leading-1.4 tracking-[0.3px]">
                If you're a busy person who
                <b>loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#2bd97c] text-[#032b41] w-full h-[40px] rounded-sm font-[16px] transition-colors duration-200 flex items-center justify-center min-w-[180px] max-w-[300px] hover:bg-[#20ba68] active:translate-y-[1px] cursor-pointer"
            onClick={() => dispatch(openModal())}>Login</button>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Reviews