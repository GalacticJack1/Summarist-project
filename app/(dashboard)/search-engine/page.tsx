"use client"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react"
import type { ChangeEvent, FormEvent } from 'react'
import type { BookData } from "@/Components/Book"
import BookSkeleton from "@/Components/Bookskeleton";


function SearchEngine() {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState<BookData[]>([])

    function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    async function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const cleanedSearch = search.trim();

        if (!cleanedSearch) return;
    

    setLoading(true);

    try {
        const response = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${encodeURIComponent(cleanedSearch)}`
        )

        if (!response.ok) {
            throw new Error("Failed to search books")
        }
        const data: BookData[] = await response.json();

        console.log("Search results:", data);

        setBooks(data);
    } catch (error) {
        console.error("Search failed:", error);
        setBooks([]);
    } finally {
        setLoading(false);
    }
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
                    onSubmit={handleSearchSubmit}
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
                            onChange={handleSearchChange}
                            value={search}
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
                {loading ? (
                    <div className="grid grid-cols-4 gap-[24px] mt-[32px] animate-pulse">
                   <BookSkeleton /> 
                   <BookSkeleton /> 
                   <BookSkeleton /> 
                   <BookSkeleton /> 
                   </div>
                ) : (
                    <div className="grid grid-cols-4 gap-[24px] mt-[32px]">
                        {books.map((book) => (
                            <div key={book.id}>
                                <img
                                    src={book.imageLink}
                                    alt={book.title}
                                    className="w-full"
                                />

                                <p className="font-semibold">
                                    {book.title}
                                </p>

                                <p>{book.author}</p>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default SearchEngine