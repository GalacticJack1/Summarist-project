"use client"

import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useEffect } from "react";
import type { BookData } from "@/Components/Book";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import NavMenu from "./NavMenu";

function Searchbar() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [books, setBooks] = useState<BookData[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ navMenu, setNavMenu ] = useState(false);

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);


  useEffect(() => {
    if (!debouncedSearch) {
      setBooks([]);
      setLoading(false);
      return;
    }


    const controller = new AbortController();

    async function fetchBooks() {
      setLoading(true);

      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${encodeURIComponent(debouncedSearch)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data: BookData[] = await response.json();

        if (!controller.signal.aborted) {
          setBooks(data);
        }

      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Search failed:", error);
          setBooks([]);
        }

      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchBooks();

    return () => controller.abort();
  }, [debouncedSearch]);


  return (
    <div className=" flex items-center justify-center md:justify-end h-[80px] px-[32px] border-b bg-white">
      <div className="relative w-[340px]">
        <div className="relative w-full max-w-[500px]">
          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setIsOpen(true);
            }}
            type="text"
            placeholder="Search for books"
            className="w-full h-[40px] pl-[12px] pr-[56px] bg-[#f1f6f4] text-[#042330] rounded-lg outline-none"
          />
          {isOpen && search.trim() && (
            <div className="absolute top-full right-0 mt-[8px] w-full max-h-[550px] overflow-y-auto bg-white shadow-lg rounded-md z-50">

              {loading || debouncedSearch !== search.trim() ? (<div className="flex flex-col gap-[10px] p-[10px]">
                <div className="w-[300px] h-[100px] bg-gray-200 animate-pulse rounded-sm"></div>
                <div className="w-[300px] h-[100px] bg-gray-200 animate-pulse rounded-sm"></div>
                <div className="w-[300px] h-[100px] bg-gray-200 animate-pulse rounded-sm "></div>
                <div className="w-[300px] h-[100px] bg-gray-200 animate-pulse rounded-sm"></div>
                <div className="w-[300px] h-[100px] bg-gray-200 animate-pulse rounded-sm"></div></div>
              ) : books.length > 0 ? (
                books.map((book) => (
                  <Link
                    key={book.id}
                    href={`/book/${book.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-[20px] p-[16px] border-b border-[#e1e7ea] hover:bg-[#f1f6f4]"
                  >
                    <img
                      src={book.imageLink}
                      alt={book.title}
                      className="w-[56px] h-[72px] object-contain"
                    />

                    <div>
                      <p className="font-semibold text-[#032b41]">
                        {book.title}
                      </p>

                      <p className="text-[14px] text-[#617985]">
                        {book.author}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="p-[20px] text-center">
                  No books found.
                </p>
              )}

            </div>
          )}
        </div>


        <button type="submit" className="absolute right-0 top-0 h-[40px] w-[48px] flex items-center justify-center border-l border-[#e1e7ea] cursor-pointer hover:bg-[#032b41] transition-colors ease-in-out duration-100 active:scale-95 group">
          {search ? (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setBooks([]);
                setIsOpen(false);
              }}
              aria-label="Clear search"
              className="cursor-pointer"
            >
              <FaXmark className="w-[20px] h-[20px] text-[#03314b] transition-colors ease-in-out duration-100 group-hover:text-white" />
            </button>
          ) : (
            <FaMagnifyingGlass className="w-[20px] h-[20px] text-[#03314b] transition-colors ease-in-out duration-100 group-hover:text-white" />
          )}
        </button>
      </div>
      <button 
      onClick={() => setNavMenu(true)}      
      className="cursor-pointer">
      <IoIosMenu className="md:hidden min-w-[40px] min-w-[40px] w-[full] h-full"/>
      </button>

      {navMenu && <NavMenu onClose={() => setNavMenu(false)} />}




    </div>
  )
}

export default Searchbar