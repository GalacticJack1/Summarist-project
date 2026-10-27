"use client";
import { useDispatch } from "react-redux";
import { openModal } from "@/app/redux/modalSlice";
import { useAuth } from "@/app/context/AuthProvider";


function Settings() {
    const dispatch = useDispatch();
    const { user, loading } = useAuth();

    if (!user) {
        return (
            <>
                <div className="p-[40px] w-full">
                    <div className="max-w-[1070px] w-full mx-auto px-[24px]">
                        <div className="text-left border-b border-[#e1e7ea] pb-[16px] text-[32px] text-[#032b41] mb-[32px] font-bold">
                            Settings
                        </div>
                        <div className="max-w-[460px] flex flex-col items-center mx-auto">
                            <img className="w-full h-full" src="./assets/login.png" alt="" />

                            <div className="text-[24px] font-bold text-[#032b41] text-center mb-[16px]">
                                Log in to your account to see your details
                            </div>
                            <button className="bg-[#2bd97c] text-[#032b41] w-full h-[40px] rounded-sm font-[16px] transition-colors duration-200 flex items-center justify-center min-w-[180px] max-w-[300px] hover:bg-[#20ba68] active:translate-y-[1px] cursor-pointer"
                                onClick={() => dispatch(openModal())}>Login</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            <div className="p-[40px] w-full">
                <div className="max-w-[1070px] w-full mx-auto px-[24px]">
                    <div className="text-left border-b border-[#e1e7ea] pb-[16px] text-[32px] text-[#032b41] mb-[32px] font-bold">
                        Settings
                    </div>
                    <div className="flex flex-col items-start gap-[8px] mb-[32px] border-b border-[#e1e7ea] pb-[24px]">
                        <div className="text-[18px] font-bold text-[#032b41]">Your Subscription plan</div>
                        <div className="text-[#032b41 ]">Premium-Plus</div>
                    </div>
                    <div className="flex flex-col gap-[8px] pb-[24px]">
                        <div className="text-[18px] font-bold text-[#032b41]">Email</div>
                        <div className="text-[#032b41]">youremail@gmail.com</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings