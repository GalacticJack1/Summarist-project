"use client"
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineMicrophone } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBookOpenText } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import { useState, useEffect} from "react"
import { useParams } from "next/navigation";
import type { BookData } from "@/Components/Book";


function Book() {

const params = useParams<{ id: string }>();
const id = params.id;
const [book, setBook] = useState<BookData | null>(null);
const [loading, setLoading] = useState(true);
const [duration, setDuration] = useState<string>("--:--");

useEffect(() => {
  async function fetchBook() {
    setLoading(true);
    setBook(null);
    setDuration("--:--");

    try {
      const response = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${encodeURIComponent(id)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch book");
      }

      const data = await response.json();

      setBook(data);
    } catch (error) {
      console.error("Error fetching book:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchBook();
}, [id]);
if (loading) {
  return <div className="max-w-[1070px] w-full mx-auto px-[24px]">
    <div className="py-[40px] w-full">
        <div className="flex gap-[16px] animate-pulse">
            <div className="flex-1 min-w-0">
                <div className=" bg-gray-200 mb-[16px] w-full h-[48px]">
                </div>
                <div className="bg-gray-200 w-full h-[24px]">
                </div>
                <div className="bg-gray-200 w-full h-[24px] mb-[16px]">
                </div>
                <div className="border-t-[#e1e7ea] border-b-[#e1e7ea] border-t border-b py-[16px] mb-[24px] ">
                    <div className="flex flex-wrap max-w-[400px] gap-y-3">
                        <div className=" bg-gray-200 flex items-center w-[50%] h-[24px]  ">
                        </div>
                        <div className=" bg-gray-200 flex items-center w-[50%] h-[24px]  ">
                        </div>
                        <div className=" bg-gray-200 flex items-center w-[50%] h-[24px]  ">
                        </div>
                        <div className=" bg-gray-200 flex items-center w-[50%] h-[24px]  ">
                        </div>
                    </div>
                </div>
                <div className="flex gap-[16px] mb-[24px]">
                    <button className="flex items-center justify-center w-[144px] h-[48px] bg-gray-200 rounded-sm gap-[8px]">
                    </button>
                    <button className="flex items-center justify-center w-[144px] h-[48px] bg-gray-200 rounded-sm gap-[8px]">
                    </button>

                </div>
                <div className="bg-gray-200 flex items-center gap-[8px] mb-[40px] w-[440px] h-[27px]">
                </div>
                <div className="bg-gray-200 mb-[16px] w-[440px] h-[27px] ">
                </div>
                <div className="flex flex-wrap gap-[16px] mb-[16px]">
                    <div className="bg-gray-200 px-[16px] h-[48px] w-[440px] flex items-center rounded-sm ">
                    </div>
                    <div className="bg-gray-200 px-[16px] h-[48px] w-[440px] flex items-center rounded-sm ">
                    </div>
                </div>
                <div className="bg-gray-200 mb-[16px] w-full max-x-[400px] h-[400px]">
                </div>
                <div className="bg-gray-200 mb-[16px] w-full max-x-[440px] h-[27px] ">
                </div>
                <div className="bg-gray-200 mb-[16px] w-full max-x-[400px] h-[400px]">
                </div>
            </div>
            <div className="div">
                <figure className="bg-gray-200 h-[300px] w-[300px] min-w-[300px]">
                </figure>
            </div>
        </div>
    </div>
</div>
}

if (!book) {
  return <div>Book not found.</div>;

}
     
        return (
  <div className="max-w-[1070px] w-full mx-auto px-[24px]">

    <audio
      src={book.audioLink}
      preload="metadata"
      onLoadedMetadata={(event) => {
        const seconds = event.currentTarget.duration;

        if (!Number.isFinite(seconds)) return;

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        setDuration(
          `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`
        );
      }}
    />

            <div className="py-[40px] w-full">
                <div className="flex gap-[16px]">
                    <div className="flex-1 min-w-0">
                        <div className="text-[#032b41] text-[32px] [mb]-16px font-semibold">
                            {book.title}
                        </div>
                        <div className="div">
                            {book.author}
                        </div>
                        <div className="text-[20px] text-[#032b41] [mb]-16px font-light">
                            {book.subTitle}
                        </div>
                        <div className="border-t-[#e1e7ea] border-b-[#e1e7ea] border-t border-b py-[16px] mb-[24px] ">
                            <div className="flex flex-wrap max-w-[400px] gap-y-3">
                                <div className="flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
                                    <div className=""><FaRegStar className="flex h-[24px] w-[24px] mr-[4px]"/></div>
                                    <div className="mr-[4px]">{book.averageRating}</div>
                                    <div className="">({book.totalRating})</div>
                                </div>
                                <div className="flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
                                    <div className=""><FaRegClock className="flex h-[24px] w-[24px] mr-[4px]"/></div>
                                    <div className="">{duration}</div>                                    
                                </div>
                                <div className="flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
                                    <div className=""><HiOutlineMicrophone className="flex h-[24px] w-[24px] mr-[4px]"/></div>
                                    <div className="">{book.type}</div>                                    
                                </div>
                                <div className="flex items-center w-[50%] text-[#032b41] font-medium text-[14px]">
                                    <div className=""><HiOutlineLightBulb className="flex h-[24px] w-[24px] mr-[4px]"/></div>
                                    <div className="">{book.keyIdeas} Key ideas</div>                                    
                                </div>                            
                            </div>
                        </div>
                        <div className="flex gap-[16px] mb-[24px]">
                            <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-sm cursor-pointer gap-[8px] transition-opacity duration-200 hover:opacity-[.8]">
                                <div className="flex"><LuBookOpenText className="h-[24px] w-[24px]"/></div>
                                <div className="">Read</div>
                            </button>
                            <button className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] text-white text-[16px] rounded-sm cursor-pointer gap-[8px] transition-opacity duration-200 hover:opacity-[.8]">
                                <div className="flex"><HiOutlineMicrophone className="h-[24px] w-[24px]"/></div>
                                <div className="">Listen</div>
                            </button>
                        </div>
                        <div className="flex items-center gap-[8px] text-[#0365f2] font-medium cursor-pointer mb-[40px] text-[18px] transition-colors duration-200 hover:text-[#044298]">
                            <div className="flex w-[20px] h-[20px]"><FaBookmark className="w-full h-full"/></div>
                            <div className="div">Saved in My Library</div>
                        </div>
                        <div className="text-[18px] text-[#032b41] mb-[16px] font-semibold">
                            What's it about?
                        </div>
                        <div className="flex flex-wrap gap-[16px] mb-[16px]">
                            <div className="bg-[#f1f6f4] px-[16px] h-[48px] flex items-center text-[#032b41] font-medium rounded-sm transition-colors duration-200ms">
                                {book.tags[0]}
                            </div>
                            <div className="bg-[#f1f6f4] px-[16px] h-[48px] flex items-center text-[#032b41] font-medium rounded-sm transition-colors duration-200ms">
                                {book.tags[1]}
                            </div>
                        </div>
                        <div className="text-[#032b41] mb-[16px] leading-[1.5]">
                            {book.bookDescription}
                        </div>
                        <div className="text-[18px] text-[#032b41] mb-[16px] font-semibold">
                            About the author
                        </div>
                          <div className="text-[#032b41] mb-[16px] leading-[1.5]">
                            {book.authorDescription}
                        </div>
                    </div>  
                              <div className="div">
                    <figure className="h-[300px] w-[300px] min-w-[300px]">
                        <img className="w-full h-full" src={book.imageLink} alt="" />
                    </figure>
                </div>              
                </div>                 
            </div>                    
            </div>
                   
    )
    
}

export default Book