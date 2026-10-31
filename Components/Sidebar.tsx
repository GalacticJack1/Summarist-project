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
import { usePathname } from "next/navigation";
import { useReaderSettings } from "@/app/context/ReaderSettingsContext";
import { Suspense } from "react";
import Link from "next/link";


function Sidebar() {
    const { user, loading } = useAuth();
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const isPlayerPage = pathname.startsWith("/player/");
    const isForYouPage = pathname === "/for-you";
    const isSearchPage = pathname === "/search-engine";
    const isSettingsPage = pathname === "/settings";
    const isLibraryPage = pathname === "/library";
    const isLogPage = pathname === "/logout";
    const { fontSize, setFontSize } = useReaderSettings();
    const fontSizes = [14, 16, 18, 20];

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


    return (
        <div className="flex fixed top-0 left-0 h-screen w-[200px]
                max-md:-translate-x-full max-md:opacity-0 max-md:pointer-events-none
                transition-[transform,opacity] duration-300 ease-in-out bg-[#f7faf9] w-[200px] min-w-[200px] fixed top-0 left-0  h-screen z-1000 flex-col ">
            <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
                <div className="flex items-center justify-center h-[60px] pt-[16px] max-w-[160px] mx-0 pl-[12px]">
                    <img className="w-full h-[40px]" src="/assets/logo.png" alt="" />
                </div>
                <div className="flex flex-col pb-[20px] overflow-y-auto mt-[40px]">
                    <div className="">
                        <Link className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer" href="/for-you">
                            <div className={`w-[5px] h-full mr-[16px] ${isForYouPage ? "bg-[#2bd97c]" : ""}`}></div>
                            <div className="flex items-center justify-center mr-[8px]">
                                <FaHouse className="w-[24px] h-[24px]" />
                            </div>
                            <div className="text-[#032b41] cursor-pointer">For you</div>
                        </Link>
                    </div>
                    <div className="">
                        <Link className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer" href="/library">
                            <div className={`w-[5px] h-full mr-[16px] ${isLibraryPage ? "bg-[#2bd97c]" : ""}`}></div>
                            <div className="flex items-center justify-center mr-[8px]">
                                <CiBookmark className="w-[24px] h-[24px]" />
                            </div>
                            <div className="text-[#032b41] cursor-pointer">My Library</div>
                        </Link>
                    </div>
                    <div className="">
                        <Link className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed" href="#">
                            <div className="active:bg-[#2bd97c] w-[5px] h-full mr-[16px]"></div>
                            <div className="flex items-center justify-center mr-[8px]">
                                <BsPen className="w-[24px] h-[24px]" />
                            </div>
                            <div className="text-[#032b41] cursor-not-allowed">Highlights</div>
                        </Link>
                    </div>
                    {<div className="">
                        <Link className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer" href="/search-engine">
                            <div className={`w-[5px] h-full mr-[16px] ${isSearchPage ? "bg-[#2bd97c]" : ""}`}></div>
                            <div className="flex items-center justify-center mr-[8px]">
                                <FaMagnifyingGlass className="w-[24px] h-[24px]" />
                            </div>
                            <div className="text-[#032b41] cursor-pointer">Search</div>
                        </Link>
                    </div>}

                    {isPlayerPage && (
                        <div className="flex items-center gap-[16px] px-[16px] py-[12px]">

                            {fontSizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setFontSize(size)}
                                    aria-label={`Set text size to ${size} pixels`}
                                    aria-pressed={fontSize === size}
                                    className={`cursor-pointer pb-[4px] border-b-[2px] transition-colors ${fontSize === size
                                        ? "border-[#2bd97c]"
                                        : "border-transparent"
                                        }`}
                                >
                                    <span style={{ fontSize: `${size}px` }}>
                                        Aa
                                    </span>
                                </button>
                            ))}

                        </div>
                    )}

                </div>
            </div>





            <div className="mt-auto pb-[20px]">
                <div className="">
                    <Link className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer" href="/settings">
                        <div className={`w-[5px] h-full mr-[16px] ${isSettingsPage ? "bg-[#2bd97c]" : ""}`}></div>
                        <div className="display items-center justify-center mr-[8px]">
                            <GoGear className="w-[24px] h-[24px]" />
                        </div>
                        <div className="">Settings</div>
                    </Link>
                </div>
                <div className="">
                    <Link href="#" className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-not-allowed">
                        <div className="w-[5px] h-full bg-transparent mr-[16px]"></div>
                        <div className="display items-center justify-center mr-[8px]">
                            <HiOutlineQuestionMarkCircle className="w-[24px] h-[24px]" />
                        </div>
                        <div className="">Help & Support</div>
                    </Link>
                </div>
                <div className="">
                    <Link className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer border-l-5 border-[#f7faf9] hover:border-[#2bd97c] " href="/choose-plan">
                        <div className="w-[5px] h-full mr-[16px] "></div>
                        <div className="display items-center justify-center mr-[8px]">
                            <GiMoneyStack className="w-[24px] h-[24px]" />
                        </div>
                        <div className="">Manage Subscription</div>
                    </Link>
                </div>
                <div className="">
                    <button type="button" onClick={handleAuthClick} disabled={loading} className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer">
                        <div className={`w-[5px] h-full mr-[16px] ${isLogPage ? "bg-[#2bd97c]" : ""}`}></div>
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