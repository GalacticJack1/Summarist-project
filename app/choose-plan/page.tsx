"use client"
import Footer from "@/Components/Footer"
import { FaFileAlt } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/app/redux/modalSlice";
import { useAuth } from "@/app/context/AuthProvider";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";


function ChoosePlan() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const dispatch = useDispatch();
    const [selectedPlan, setSelectedPlan] = useState("yearly")
    const { user } = useAuth();
    const router = useRouter();

    async function handleSelectPlan() {
        if (!user) {
            dispatch(openModal());
            return;
        }

        try {
            await setDoc(
                doc(db, "users", user.uid, "subscription", "current"),
                {
                    plan: selectedPlan,
                }
            );

            console.log("Plan selection saved!");

            router.push("/settings");

        } catch (error) {
            console.error("Error saving plan:", error);
        }
    }

    return (
        <>
            <div className="wrapper-full ml-0 w-full relative flex flex-col transition-all duration-[.3]">
                <div className="plan w-full">
                    <div className="plan-header-wrapper relative text-center w-full pt-[48px] mb-[24px] 
                before:absolute before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full before:bg-[#032b41] before:rounded-br-[16rem] before:rounded-bl-[16rem]">
                        <div className="plan-header max-w-[1000px] mx-auto text-white px-[24] ">
                            <div className="plan-title text-[48px] font-bold mb-[40px]">
                                Get unlimited access to many amazing books to read
                            </div>
                            <div className="plan-sub-title text-[20px] mb-[32px]">
                                Turn ordinary moments into amazing learning opportunities
                            </div>
                            <figure className="img-mask flex justify-center max-w-[340px] mx-auto rounded-[180px_180px_0_0] overflow-hidden">
                                <img className="w-full h-full" src="/assets/pricing-top.png" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="row max-w-[1070px] w-full mx-auto px-[24px]">
                        <div className="container py-[40px] w-full">
                            <div className="features-wrapper grid grid-cols-3 justify-center items-center text-center gap-[24px] max-w-[800px] mx-auto mb-[56px] ">
                                <div className="div">
                                    <figure className="flex justify-center text-[#032b41] mb-[12px]">
                                        <FaFileAlt className="w-[60px] h-[60px]" />
                                    </figure>
                                    <div className="text-[#394547] leading-[1.5]">
                                        <b>Key ideas in a few minutes</b> with many books to read
                                    </div>
                                </div>
                                <div className="div">
                                    <figure className="flex justify-center text-[#032b41] [mb-12px]">
                                        <PiPottedPlantFill className="w-[60px] h-[60px]" />
                                    </figure>
                                    <div className="text-[#394547] leading-[1.5]">
                                        <b>3 million</b> people growing with Summarist everyday
                                    </div>
                                </div>
                                <div className="div">
                                    <figure className="flex justify-center text-[#032b41] [mb-12px]">
                                        <FaHandshake className="w-[60px] h-[60px]" />
                                    </figure>
                                    <div className="text-[#394547] leading-[1.5]">
                                        <b>Precise recommendations</b> collections curated by experts
                                    </div>
                                </div>
                            </div>
                            <div className="section-title text-[32px] text-[#032b41] text-center mb-[32px] font-bold">
                                Choose the plan that fits you
                            </div>




                            <button
                                type="button"
                                onClick={() => setSelectedPlan("yearly")}
                                className={`plan-card active:rounded-sm border-[#2be080] flex gap-[24px] p-[24px] bg-[#f1f6f4] rounded-sm border-[4px] cursor-pointer w-full max-w-[680px] min-w-[400px] mx-auto transition-colors duration-100 
                                ${selectedPlan === "yearly" ? "border-[#2be080]" : "border-[#bac8ce]"}`}
                            >
                                <div className="plan-circle relative w-[24px] h-[24px] rounded-full border-[#000] border-[2px] flex items-center justify-center">
                                    {selectedPlan === "yearly" && (
                                        <div className="plan-circle-dot absolute w-[6px] h-[6px] bg-[#000] rounded-full" />
                                    )}
                                </div>
                                <div className="card-content">
                                    <div className="text-[18px] font-semibold text-[#032b41] mb-[8px]">Premium Plus Yearly</div>
                                    <div className="text-[24px] font-bold text-[#032b41] mb-[8px]">$99.99/year</div>
                                    <div className="text-[#6b757b] text-[14px]">7-day trial included</div>
                                </div>
                            </ button>
                            <div className="plan-separator text-[14px] text-[#6b757b] flex items-center gap-[8px] max-w-[240px] mt-[24px] mb-[24px] mx-auto">
                                <div className="plan-separator flex-1 h-[1px] bg-[#bac8ce]"></div>
                                <div className="div">or</div>
                                <div className="plan-separator flex-1 h-[1px] bg-[#bac8ce]"></div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedPlan("monthly")}
                                className={`plan-card rounded-sm flex gap-[24px] p-[24px] bg-[#f1f6f4] rounded-sm  border-[4px] cursor-pointer w-full max-w-[680px] min-w-[400px] mx-auto transition-colors duration-100
                            ${selectedPlan === "monthly" ? "border-[#2be080]" : "border-[#bac8ce]"}`}>
                                <div className="plan-circle relative w-[24px] h-[24px] rounded-full border-[#000] border-[2px] flex items-center justify-center">
                                    {selectedPlan === "monthly" && (
                                        <div className="plan-circle-dot absolute w-[6px] h-[6px] bg-[#000] rounded-full" />
                                    )}
                                </div>
                                <div className="card-content">
                                    <div className="text-[18px] font-semibold text-[#032b41] mb-[8px]">Premium Monthly</div>
                                    <div className="text-[24px] font-bold text-[#032b41] mb-[8px]">$9.99/month</div>
                                    <div className="text-[#6b757b] text-[14px]">No trial included</div>
                                </div>
                            </button>
                            <div className="signup-container bg-[#fff] sticky bottom-0 z-1 p-[32px] flex flex-col items-center gap-[16px]">
                                <span className="button-wrapper w-[300px] ">
                                    <button onClick={handleSelectPlan} className="bg-[#2bd97c] text-[#032b41] h-[40px] rounded-sm text-[16px] transition-colors duration-[.2] flex items-center justify-center min-w-[180px] w-full cursor-pointer hover:bg-[#20ba68]">
                                        <span>
                                            {selectedPlan === "yearly" ? "Start your free 7 day trial!" : "Start your first month"}
                                        </span>
                                    </button>
                                </span>
                                <div className="text-[12px] text-[#6b757b] text-center">{selectedPlan === "yearly" ? "Cancel your trial at any time before it ends, and you won’t be charged." : "30-day money back guarantee, no questions asked."}</div>
                            </div>




                            <div className="faq-wrapper">
                                <div className="accordion-card border-b border-[#ddd] mb-[8px]">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenAccordion(openAccordion === 1 ? null : 1)
                                        }
                                        aria-expanded={openAccordion === 1}
                                        aria-controls="trial-answer"
                                        className="accordion-header flex w-full justify-between items-center cursor-pointer py-[24px] gap-[8px] text-left">
                                        <span className="accordion-title font-medium text-[24px] text-[#032b41]">
                                            How does the free 7-day trial work?
                                        </span>

                                        <IoIosArrowDown
                                            className={`w-[24px] min-w-[24px] h-[24px] transition-transform duration-100 ${openAccordion === 1 ? "rotate-180" : "rotate-0"}`} />
                                    </button>

                                    <div
                                        id="trial-answer"
                                        inert={openAccordion !== 1}
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openAccordion === 1
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden min-h-0">
                                            <div className="accordion-body pb-[24px] text-[#394547] leading-[1.5]">
                                                Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="accordion-card border-b border-[#ddd] mb-[8px]">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenAccordion(openAccordion === 2 ? null : 2)
                                        }
                                        aria-expanded={openAccordion === 2}
                                        aria-controls="trial-answer"
                                        className="accordion-header flex w-full justify-between items-center cursor-pointer py-[24px] gap-[8px] text-left">
                                        <span className="accordion-title font-medium text-[24px] text-[#032b41]">
                                            Can I switch subscriptions from monthly to yearly, or yearly to monthly?
                                        </span>

                                        <IoIosArrowDown
                                            className={`w-[24px] min-w-[24px] h-[24px] transition-transform duration-100 ${openAccordion === 2 ? "rotate-180" : "rotate-0"
                                                }`} />
                                    </button>

                                    <div
                                        id="trial-answer"
                                        inert={openAccordion !== 2}
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openAccordion === 2
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden min-h-0">
                                            <div className="accordion-body pb-[24px] text-[#394547] leading-[1.5]">
                                                While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="accordion-card border-b border-[#ddd] mb-[8px]">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenAccordion(openAccordion === 3 ? null : 3)
                                        }
                                        aria-expanded={openAccordion === 3}
                                        aria-controls="trial-answer"
                                        className="accordion-header flex w-full justify-between items-center cursor-pointer py-[24px] gap-[8px] text-left">
                                        <span className="accordion-title font-medium text-[24px] text-[#032b41]">
                                            What's included in the Premium plan?
                                        </span>
                                        <IoIosArrowDown
                                            className={`w-[24px] min-w-[24px] h-[24px] transition-transform duration-100 ${openAccordion === 3 ? "rotate-180" : "rotate-0"
                                                }`} />
                                    </button>

                                    <div
                                        id="trial-answer"
                                        inert={openAccordion !== 3}
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openAccordion === 3
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden min-h-0">
                                            <div className="accordion-body pb-[24px] text-[#394547] leading-[1.5]">
                                                Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="accordion-card border-b border-[#ddd] mb-[8px]">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenAccordion(openAccordion === 4 ? null : 4)
                                        }
                                        aria-expanded={openAccordion === 4}
                                        aria-controls="trial-answer"
                                        className="accordion-header flex w-full justify-between items-center cursor-pointer py-[24px] gap-[8px] text-left"
                                    >
                                        <span className="accordion-title font-medium text-[24px] text-[#032b41]">
                                            Can I cancel during my trial or subscription?
                                        </span>

                                        <IoIosArrowDown
                                            className={`w-[24px] min-w-[24px] h-[24px] transition-transform duration-100 ${openAccordion === 4 ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>


                                    <div
                                        id="trial-answer"
                                        inert={openAccordion !== 4}
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openAccordion === 4
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden min-h-0">
                                            <div className="accordion-body pb-[24px] text-[#394547] leading-[1.5]">
                                                You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default ChoosePlan