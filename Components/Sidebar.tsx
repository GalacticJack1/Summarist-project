"use client"

import { FaHouse } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { BsPen } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { useAuth } from "@/app/context/AuthProvider";
import { auth } from "@/app/lib/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { openModal } from "@/app/redux/modalSlice";
import { useRouter } from "next/navigation";

function Sidebar() {
    const { user, loading } = useAuth();
    const dispatch = useDispatch();
    const router = useRouter();

   async function handleAuthClick() {
    if (user) {
        try {
            await signOut(auth);
            router.push("/logout");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    } else {
        dispatch(openModal());
    }
}


    return(
        <div className=" bg-[#f7faf9] w-[200px] min-w-[200px] fixed top-0 left-0  h-screen z-1000 flex flex-col">
            <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
            <div className="flex items-center justify-center h-[60px] pt-[16px] max-w-[160px] mx-0 pl-[12px]">
                <img className="w-full h-[40px]" src="/assets/logo.png" alt="" />
            </div>
            <div className="flex flex-col pb-[20px] overflow-y-auto mt-[40px]">
                <div className="">
                    <a className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer" href="/for-you">
                    <div className="active:bg-[#2bd97c] w-[5px] h-full mr-[16px]"></div>
                    <div className="flex items-center justify-center mr-[8px]">
                        <FaHouse className="w-[24px] h-[24px]"/>
                    </div>
                    <div className="text-[#032b41] cursor-pointer">For you</div>
                    </a>                 
                </div>
                <div className="">
                    <a className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer" href="/library">
                    <div className="active:bg-[#2bd97c] w-[5px] h-full mr-[16px]"></div>
                    <div className="flex items-center justify-center mr-[8px]">
                        <CiBookmark className="w-[24px] h-[24px]"/>
                    </div>
                    <div className="text-[#032b41] cursor-pointer">My Library</div>
                    </a>                 
                </div>
                <div className="">
                    <a className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed" href="#">
                    <div className="active:bg-[#2bd97c] w-[5px] h-full mr-[16px]"></div>
                    <div className="flex items-center justify-center mr-[8px]">
                        <BsPen className="w-[24px] h-[24px]"/>
                    </div>
                    <div className="text-[#032b41] cursor-not-allowed">Highlights</div>
                    </a>                 
                </div>
                <div className="">
                    <a className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer" href="/search-engine">
                    <div className="active:bg-[#2bd97c] w-[5px] h-full mr-[16px]"></div>
                    <div className="flex items-center justify-center mr-[8px]">
                        <FaMagnifyingGlass className="w-[24px] h-[24px]"/>
                    </div>
                    <div className="text-[#032b41] cursor-pointer">Search</div>
                    </a>                 
                </div>
                </div>
            </div>
            

            <div className="mt-auto pb-[20px]">
            <div className="">
                <a className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer" href="/settings">
                    <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
                    <div className="display items-center justify-center mr-[8px]">
                        <GoGear className="w-[24px] h-[24px]" />
                    </div>
                    <div className="">Settings</div>
                </a>
            </div>
            <div className="">
                <a className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed">
                    <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
                    <div className="display items-center justify-center mr-[8px]">
                        <HiOutlineQuestionMarkCircle className="w-[24px] h-[24px]" />
                    </div>
                    <div className="">Help & Support</div>
                </a>
            </div>
            <div className="">
                <a className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer"href="/choose-plan">
                    <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
                    <div className="display items-center justify-center mr-[8px]">
                        <GiMoneyStack className="w-[24px] h-[24px]" />
                    </div>
                    <div className="">Manage Subscription</div>
                </a>
            </div>
            <div className="">
                <button type="button" onClick={handleAuthClick} disabled={loading} className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer">
                    <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
                    <div className="display items-center justify-center mr-[8px]">
                        <FiLogOut className="w-[24px] h-[24px]" />
                    </div>
                    <div className="">{loading ? "Checking..." : user ? "Logout" : "Login"}</div>
                </button>
            </div>
            </div>
        </div>        
    )
}

export default Sidebar