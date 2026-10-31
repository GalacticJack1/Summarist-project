"use client";
import { useDispatch } from "react-redux";
import { openModal } from "@/app/redux/modalSlice";
import { useAuth } from "@/app/context/AuthProvider";
import Link from "next/link";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";


function Settings() {
    const dispatch = useDispatch();
    const { user, loading } = useAuth();
    const [subscription, setSubscription] = useState<string | null>(null);
    const [planLoading, setPlanLoading] = useState(true);

    useEffect(() => {
        if (!user) {
    setPlanLoading(false);
    return;
}

const userId = user.uid;

async function fetchSubscription() {
            setPlanLoading(true);

            try {
                const docRef = doc(db, "users", userId, "subscription", "current");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setSubscription(docSnap.data().plan);
                } else {
                    setSubscription(null);
                }
            } catch (error) {
                console.error("Error fetching subscription:", error);
                setSubscription(null);
            } finally {
                setPlanLoading(false);
            }
        }

        fetchSubscription();
    }, [user]);

    if (loading) {
    return <div>Loading settings...</div>;
}

    if (!user) {
        return (
            <>
                <div className="p-[40px] w-full ">
                    <div className="max-w-[1070px] w-full mx-auto px-[24px] ">
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
            <div className="p-[40px] w-full text-center md:text-left">
                <div className="max-w-[1070px] w-full mx-auto px-[24px]">
                    <div className="md:text-left text-center border-b border-[#e1e7ea] pb-[16px] text-[32px] text-[#032b41] mb-[32px] font-bold">
                        Settings
                    </div>
                    <div className="items-center mx-auto text-center md:text-left flex flex-col md:items-start gap-[8px] mb-[32px] border-b border-[#e1e7ea] pb-[24px]">
                        <div className="text-[18px] font-bold text-[#032b41]">Your Subscription plan</div>
                        <div className="text-[#032b41]">
                            {planLoading
                                ? "Loading plan..."
                                : subscription === "yearly"
                                    ? "Premium Plus"
                                    : subscription === "monthly"
                                        ? "Premium"
                                        : "No active plan"}
                        </div>
                        <Link href="/choose-plan" className="bg-[#2bd97c] justify-center text-[#032b41] w-full h-[40px] rounded-sm font-[16px] transition-colors duration-200 flex items-center min-w-[180px] max-w-[300px] hover:bg-[#20ba68] active:translate-y-[1px] cursor-pointer"
                        >Upgrade Plan
                        </Link>
                    </div>
                    <div className="flex flex-col gap-[8px] pb-[24px]">
                        <div className="text-[18px] font-bold text-[#032b41]">Email</div>
                        <div className="text-[#032b41]">
                            {user.email ?? "No email available"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings