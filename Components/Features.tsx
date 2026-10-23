import { AiFillFileText,AiFillBulb,AiFillAudio } from "react-icons/ai";


function Features() {
    return (
            <section id="features">
      <div className="py-[40px] w-full">
        <div className="max-w-[1070px] w-full m-auto px-[24px]">
          <div className="text-[32px] text-[#032b41] text-center mb-[32px] font-bold">Understand books in few minutes</div>
          <div className="grid grid-cols-3 gap-[40px] mb-[96px]">
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-[8px] text-[#032b41]">
                <AiFillFileText className="w-15 h-15"/>
              </div>
              <div className="text-[24px] text-[#032b41] mb-15px font-medium">Read or listen</div>
              <div className="text-[18px] text-[#394547] font-light">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-[8px] text-[#032b41]">
                <AiFillBulb  className="w-15 h-15"/>
              </div>
              <div className="text-[24px] text-[#032b41] mb-15px font-medium">Find your next read</div>
              <div className="text-[18px] text-[#394547] font-light">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-[8px] text-[#032b41]">
                <AiFillAudio  className="w-15 h-15"/>
              </div>
              <div className="text-[24px] text-[#032b41] mb-15px font-medium">Briefcasts</div>
              <div className="text-[18px] text-[#394547] font-light">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div className="flex gap-[80px] mb-[96px]">
            <div className="w-full flex flex-col justify-center">
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Enhance your knowledge</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Achieve greater success</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Improve your health</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Develop better parenting skills
              </div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Increase happiness</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Be the best version of yourself!
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-[24px] bg-[#f1f6f4] py-[10px] px-[24px]">
              <div className="flex gap-[16px]">
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">93%</div>
                <div className="text-[20px] font-light text-[#394547]">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">96%</div>
                <div className="text-[20px] font-light text-[#394547]">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">90%</div>
                <div className="text-[20px] font-light text-[#394547]">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[80px] mb-[96px]">
            <div
              className="statistics__content--details statistics__content--details-second"
            >
              <div className="flex gap-[16px]">
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">91%</div>
                <div className="text-[20px] font-light text-[#394547]">
                  of Summarist members <b>report feeling more productive</b>
                 after incorporating the service into their daily routine.
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">94%</div>
                <div className="text-[20px] font-light text-[#394547]">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">88%</div>
                <div className="text-[20px] font-light text-[#394547]">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col justify-center items-end"
            >
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Expand your learning</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Accomplish your goals</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Strengthen your vitality</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Become a better caregiver</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Improve your mood</div>
              <div className="text-[32px] font-medium text-[#6b757b] mb-[16px]">Maximize your abilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}
export default Features