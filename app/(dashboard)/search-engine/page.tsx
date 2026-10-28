"use client"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react"


function SearchEngine() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);



    if (loading) {
        return (
            <div className="max-w-[1070px] w-full mx-auto px-[24px]">
                <div className="py-[40px] w-full animate-pulse">
                    <div className="bg-gray-200 w-[700px] h-[50px] mx-auto justify-center mb-[20px]">
                    </div>
                    <div className="bg-gray-200 flex pt-[20px] items-center mx-auto justify-center h-[200px] w-[200px]">
                    </div>
                    <div className="bg-gray-200 flex items-center mx-auto mt-[20px] px-[32px] w-[800px] h-[40px] border-b border-[#e1e7ea] pb-[20px]">
                    </div>
                </div>
            </div>)
    }

    return (

        <div className="p-[40px] w-full h-full">
            <div className="max-w-[1070px] w-full mx-auto px-[24px]">
                <div className="text-center mx-auto text-[32px] font-bold text-[#032b41]">
                    Find books and enhance your knowledge
                </div>
                <div className=" flex p-[20px] items-center mx-auto justify-center">
                    <img className="max-h-[200px] h-full max-w-[200px] w-full" src="/assets/read.png" alt="" />
                </div>
                <form
                    role="search"
                    className="flex items-center mx-auto px-[32px] border-b border-[#e1e7ea] pb-[20px]">
                    <div className="flex items-center w-full max-w-[500px] mx-auto bg-[#f1f6f4] border border-[#d5dfe2] rounded-lg overflow-hidden transition-all duration-200 focus-within:border-[#032b41] focus-within:ring-2 focus-within:ring-[#0365f2]/20">
                        <label htmlFor="book-search" className="sr-only">
                            Search books
                        </label>
                        <FaMagnifyingGlass
                            aria-hidden="true"
                            className="ml-[16px] text-[#617985] shrink-0" />
                        <input
                            id="book-search"
                            type="search"
                            placeholder="Search books by title or author..."
                            className="w-full h-[48px] px-[14px] bg-transparent text-[#032b41] text-[16px] outline-none placeholder:text-[#7b919b]" />
                        <button
                            type="submit"
                            aria-label="Submit book search"
                            className="flex items-center justify-center h-[40px] w-[44px] mr-[4px] bg-[#032b41] text-white rounded-md cursor-pointer shrink-0 transition-colors duration-200 hover:bg-[#075174]"
                        >
                            <FaArrowRight aria-hidden="true" />
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SearchEngine