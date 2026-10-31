"use client";

import { useDispatch } from "react-redux";
import { openModal } from "@/app/redux/modalSlice";
import { useAuth } from "@/app/context/AuthProvider";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import Link from "next/link";
import React from 'react';
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";





function Library() {
    const dispatch = useDispatch();
    const { user, loading } = useAuth();


    type SavedBook = {
        id: string;
        title: string;
        author: string;
        imageLink: string;
    };

    const [savedBooks, setSavedBooks] = useState<SavedBook[]>([]);
    const [booksLoading, setBooksLoading] = useState(true);
    const [finishedBooks, setFinishedBooks] = useState<SavedBook[]>([]);

    useEffect(() => {
        if (!user) {
            setSavedBooks([]);
            setBooksLoading(false);
            setFinishedBooks([]);
            return;
        }

        let cancelled = false;

        async function fetchSavedBooks() {
            if (!user) return;

            setBooksLoading(true);

            try {
                const booksRef = collection(
                    db,
                    "users",
                    user.uid,
                    "savedBooks"
                );

                const snapshot = await getDocs(booksRef);

                const books = snapshot.docs.map((doc) => {
                    return doc.data() as SavedBook;
                });

                if (!cancelled) {
                    setSavedBooks(books);
                }

                const finishedRef = collection(
                    db,
                    "users",
                    user.uid,
                    "finishedBooks"
                );

                const finishedSnapshot = await getDocs(finishedRef);

                const finished = finishedSnapshot.docs.map((doc) => {
                    return doc.data() as SavedBook;
                });

                if (!cancelled) {
                    setFinishedBooks(finished);
                }
            } catch (error) {
                console.error("Error fetching saved books:", error);
            } finally {
                if (!cancelled) {
                    setBooksLoading(false);
                }
            }
        }

        fetchSavedBooks();

        return () => {
            cancelled = true;
        };
    }, [user]);


    if (loading) {
        return <div>Checking authentication...</div>;
    }

    if (!user) {
        return (
            <>
                <div className="p-[40px] w-full">
                    <div className="max-w-[1070px] w-full mx-auto px-[24px]">
                        <div className="text-left border-b border-[#e1e7ea] pb-[16px] text-[32px] text-[#032b41] mb-[32px] font-bold">
                            library
                        </div>
                        <div className="max-w-[460px] flex flex-col items-center mx-auto">
                            <img className="w-full h-full" src="/assets/login.png" alt="" />

                            <div className="text-[24px] font-bold text-[#032b41] text-center mb-[16px]">
                                Log in to your account to see your library
                            </div>
                            <button className="bg-[#2bd97c] text-[#032b41] w-full h-[40px] rounded-sm font-[16px] transition-colors duration-200 flex items-center justify-center min-w-[180px] max-w-[300px] hover:bg-[#20ba68] active:translate-y-[1px] cursor-pointer"
                                onClick={() => dispatch(openModal())}>Login</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }





    return (
        <>
            <div className="max-w-[1070px] w-full mx-auto px-[24px]">
                <div className="text-center md:text-left py-[40px] w-full items-center mx-0">
                    <div className="text-[22px] font-bold text-[#032b41] mb-[16px]">
                        Saved Books
                    </div>
                    <div className="font-light text-[#394547] mb-[16px]">
                        {savedBooks.length} items
                    </div>

                    <div className="flex justify-center md:justify-start overflow-x-auto gap-[16px] mb-[32px]">
                        {booksLoading ? (
                            <p>Loading saved books...</p>
                        ) : savedBooks.length === 0 ? (
                            <p>You haven't saved any books yet.</p>
                        ) : (
                            savedBooks.map((book) => (
                                <Link
                                    key={book.id}
                                    href={`/book/${book.id}`}
                                    className="shrink-0 w-[172px]"
                                >
                                    <img
                                        src={book.imageLink}
                                        alt={book.title}
                                        className="w-full h-[230px] object-cover mb-[8px]"
                                    />

                                    <div className="font-semibold text-[#032b41] text-[16px]">
                                        {book.title}
                                    </div>

                                    <div className="text-[#6b757b] text-[14px]">
                                        {book.author}
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                    <div className="text-[22px] font-bold text-[#032b41] mb-[16px]">
                        Finished
                    </div>
                    <div className="font-light text-[#394547] mb-[16px]">
                        {finishedBooks.length} items
                    </div>

                    <div className="flex justify-center md:justify-start gap-[16px] mb-[32px] text-center md:text-left">
                        {booksLoading ? (
                            <p>Loading finished books...</p>
                        ) : finishedBooks.length === 0 ? (
                            <p >You haven't finished any books yet.</p>
                        ) : (
                            <Swiper 
                            slidesPerView="auto" 
                            spaceBetween={16}
                            modules={[Navigation]}
                            navigation
                            className="finished-carousel"                             >
                                {finishedBooks.map((book) => (
                                    <SwiperSlide
                                        key={book.id}
                                        style={{ width: "172px" }}
                                    >
                                        <Link href={`/book/${book.id}`}>
                                            <img
                                                src={book.imageLink}
                                                alt={book.title}
                                                className="w-full h-[230px] object-cover mb-[8px]"
                                            />

                                            <div className="font-semibold text-[#032b41] text-[16px]">
                                                {book.title}
                                            </div>

                                            <div className="text-[#6b757b] text-[14px]">
                                                {book.author}
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>

                </div>
            </div>
        </>

    )
}

export default Library
