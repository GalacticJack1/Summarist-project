"use client"
import { FaRegClock } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Book, { type BookData } from "@/Components/Book";
import { useEffect, useState } from "react";
import BookSkeleton from "./Bookskeleton";


    
function RecommendedForYou() {

    const [books, setBooks ] = useState<BookData[]>([]);

    const [loading, setLoading] =useState(true)

    useEffect(function () {
        async function fetchBooks() {
            const response = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended");
            const data = await response.json();

            setBooks(data);
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setLoading(false);
        }

        fetchBooks();
    }, []);


    return (
    <div className="px-[40px] w-full max-w-[1070px] mx-auto items-center">
        <div className="text-[22px] text-[#032b41] font-bold mb-[16px]">
            Recommended For You
        </div>
        <div className="font-light text-[#394547] mb-[16px]">We think you'll like these</div>
       <div className="flex gap-[16px] overflow-x-auto">
        {loading ?
        Array.from({ length: 5 }).map((_, index) => (
            <BookSkeleton key={index} />
        ))
  : books.slice(0, 5).map((book) => (
    <Book key={book.id} book={book} />
  ))}
</div>
    </div>
    )
}

export default RecommendedForYou