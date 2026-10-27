"use client"
import { auth } from "@/app/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";

type LoginModalProps = {
    onClose: () => void;
};

function LoginModal({ onClose }: LoginModalProps) {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleGuestLogin() {
    setError("");
    setLoading(true);

    try {
        await signInAnonymously(auth);

        onClose();
        router.push("/for-you");
    } catch (error) {
        console.error("Guest login failed:", error);
        setError("Unable to continue as guest.");
    } finally {
        setLoading(false);
    }
}

    async function handleEmailLogin(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);

            onClose();
            router.push("/for-you");
        } catch (error) {
            console.error("Login failed:", error);
            setError("Unable to log in. Please check your email and password.");
        } finally {
            setLoading(false);
        }
    }

    async function handleGoogleLogin() {
    setError("");
    setLoading(true);

    try {
        const provider = new GoogleAuthProvider();

        await signInWithPopup(auth, provider);

        onClose();
        router.push("/for-you");
    } catch (error) {
        console.error("Google login failed:", error);
        setError("Unable to sign in with Google.");
    } finally {
        setLoading(false);
    }
}

        async function handleSignUp() {
            setError("");
            setLoading(true);

            try {
                await createUserWithEmailAndPassword(auth, email, password);

                onClose();
                router.push("/for-you");
            } catch (error) {
                console.error("Sign up failed", error);
                setError("Unable to create account.Please check your email and password.");
            } finally {
                setLoading(false);
            }
    }



    return (
        <>
            <div className="fixed inset-0 z-9999 bg-black/75 flex justify-center items-center">
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
                        <button onClick={handleGoogleLogin} disabled={loading} className="relative flex items-center justify-center w-full h-[40px] bg-[#4285f4] text-white rounded-sm cursor-pointer">
                            {loading ? (
                                <ImSpinner2 className="animate-spin text-[20px]" />
                            ) : (<>
                                <figure className="flex items-center justify-center w-[36px] h-[36px] rounded-sm bg-white absolute left-[2px]">
                                    <img className="w-[24px] h-[24px]" src="/assets/google.png" alt="" />
                                </figure>
                                <div className="m-0 p-0 box-border ">Login with google</div>
                            </>
                            )}
                        </button>
                        <div className="flex items-center gap-[16px] my-[16px]">
                            <div className="flex-1 h-px bg-[#bac8ce]"></div>
                            <span className="text-[14px] text-[#394547] font-medium">or</span>
                            <div className="flex-1 h-px bg-[#bac8ce]"></div>
                        </div>
                        <form className="flex flex-col gap-[16px]" onSubmit={handleEmailLogin}>
                            <input value={email} onChange={(event) => setEmail(event.target.value)} className="w-full h-[40px] border border-[#394547] rounded-sm text-[#394547] py-[12px] outline-none focus:border-[#4285f4] px-[12px]" type="email" placeholder="Email Address" />
                            <input value={password} onChange={(event) => setPassword(event.target.value)} className="w-full h-[40px] border border-[#394547] rounded-sm text-[#394547] py-[12px] outline-none focus:border-[#4285f4] px-[12px]" type="password" placeholder="Password" />
                            {error && (
                                <p className="text-red-500 text-[14px]">
                                    {error}
                                </p>
                            )}
                            <button type="submit" disabled={loading} className="bg-[#2bd97c] text-[#032b41] w-full h-[40px] rounded-sm text-[16px] transition-colors duration-.2s flex items-center justify-center min-w-[180px] cursor-pointer">
                                {loading ? (
                                    <ImSpinner2 className="animate-spin text-[20px]" />
                                ) : (
                                    <span className="text-[#032b41] text-[16px]">Login</span>
                                )}
                            </button>
                        </form>
                        <div className="text-center text-[#116be9] font-light text-[14px] w-fit mx-auto mt-[16px] mb-[16px] cursor-pointer">Forgot your password?</div>
                        <button className="h-[40px] text-center bg-[#f1f6f4] text-[#116be9] w-full rounded-sm font-light text-[16px] cursor-pointer" onClick={handleSignUp} >Don't have an account?</button>
                        <div className="absolute top-[12px] right-[12px] flex cursor-pointer transition-opacity duration-.2s" onClick={onClose}>✕</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal