"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";

type LoginModalProps = {
  onClose: () => void;
};

function LoginModal({ onClose }: LoginModalProps) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    function handleGuestLogin() {
        setLoading(true)

        setTimeout(() => {
            onClose();
            router.push("/for-you")
        }, 1000)
    }


  return (
        <>
        <div className="fixed inset-0 z-[9999] bg-black/75 flex justify-center items-center">
            <div className="relative w-full max-w-[400px] bg-white rounded-2xl shadow-2xl z-9999">
                <div className="pt-[48px] px-[32px] pb-[24px]">
                    <div className="text-center text-[20px] font-bold text-[#032b41] mb-[24px]">
                        Log in to Summarist
                    </div>
                    <button disabled={loading} className="relative flex items-center bg-[#3a579d] text-white justify-center w-full h-[40px] rounded-sm cursor-pointer"
                    onClick={handleGuestLogin}>
                        {loading ? (
                            <ImSpinner2 className="animate-spin text-[20px]" />
                        ) : (
                            <>
                        <figure className="bg-white flex items-center justify-center w-[36px] h-[36px] rounded-sm absolute left-[2px]">
                            <img className="w-[24px] h-[24px]" src="/assets/pngwing.com.png" alt="" />
                        </figure>
                    Login as guest 
                    </>
                )}
                    </button>
                    <div className="flex items-center gap-[16px] my-[16px]">
                        <div className="flex-1 h-px bg-[#bac8ce]"></div>
                        <span className="text-[14px] text-[#394547] font-medium">or</span>
                        <div className="flex-1 h-px bg-[#bac8ce]"></div>
                     </div>
                    <button className="relative flex items-center justify-center w-full h-[40px] bg-[#4285f4] text-white rounded-sm cursor-pointer">
                        <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-sm bg-white absolute left-[2px]">
                            <img className="w-[24px] h-[24px]" src="/assets/google.png" alt="" />
                        </figure>
                        <div className="m-0 p-0 box-border ">Login with google</div>
                    </button>
                    <div className="flex items-center gap-[16px] my-[16px]">
                        <div className="flex-1 h-px bg-[#bac8ce]"></div>
                        <span className="text-[14px] text-[#394547] font-medium">or</span>
                        <div className="flex-1 h-px bg-[#bac8ce]"></div>
                     </div>
                    <form className="flex flex-col gap-[16px]" action="">
                        <input className="w-full h-[40px] border border-[#394547] rounded-sm text-[#394547] py-[12px] outline-none focus:border-[#4285f4] px-[12px]" type="text" placeholder="Email Address" />
                        <input className="w-full h-[40px] border border-[#394547] rounded-sm text-[#394547] py-[12px] outline-none focus:border-[#4285f4] px-[12px]" type="password" placeholder="Password" />
                        <button className="bg-[#2bd97c] text-[#032b41] w-full h-[40px] rounded-sm text-[16px] transition-colors duration-.2s flex items-center justify-center min-w-[180px] cursor-pointer">
                            <span className="text-[#032b41] text-[16px]">Login</span>
                            </button>
                    </form>
                    <div className="text-center text-[#116be9] font-light text-[14px] w-fit mx-auto mt-[16px] mb-[16px] cursor-pointer">Forgot your password?</div>
                    <button className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-sm font-light text-[16px] cursor-pointer">Don't have an account?</button>
                    <div className="absolute top-[12px] right-[12px] flex cursor-pointer transition-opacity duration-.2s" onClick={onClose}>✕</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginModal