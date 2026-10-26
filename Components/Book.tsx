import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export type BookData = {
  id: string;
  title: string;
  author: string;
  subTitle: string;
  imageLink: string;
  averageRating: number;
  audioLink: string;
  totalRating:string;
  type: string;
  keyIdeas: string;
  tags:string;
  bookDescription: string;
  authorDescription: string;
};

type BookProps = {
  book: BookData;
};


function Book({ book }:BookProps) {
  const [duration, setDuration] = useState<string>("--:--");
  

      return (
  <>
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

        
                    <Link href={`/book/${book.id}`} className="relative pt-[32px] py-[12px] no-underline rounded-sm max-w-[200px] w-full">
                        <figure className="w-[172px] h-[172px]"><img src={book.imageLink} alt={book.title} /></figure>
                        <div className="text-[16px] font-semibold text-[#032b41] mb-8px">{book.title}</div>
                        <div className="text-[14px] text-[#6b757b] font-light mb-8px">{book.author}</div>
                        <div className="text-[14px] text-[#394547] mb-8px">{book.subTitle}</div>
                        <div className="flex gap-[8px]">
                            <div className="flex items-center gap-[4px] text-[14px] font-light text-[#6b757b]" >
                              <div className="div"><FaRegClock /></div>
                              <div className="div">{duration}</div>
                            </div>
                            <div className="flex items-center gap-[4px] text-[14px] font-light text-[#6b757b]">
                                <div className="div"><FaRegStar /></div>
                                <div className="div">{book.averageRating}</div>
                            </div>
                        </div>
                    </Link>
    </>            

    )
} 

export default Book