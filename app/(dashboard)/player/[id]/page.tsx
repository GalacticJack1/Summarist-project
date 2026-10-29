"use client"
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import type { BookData } from "@/Components/Book";
import { TbRewindBackward10 } from "react-icons/tb";
import { TbRewindForward10 } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";




function Player() {
    const [book, setBook] = useState<BookData | null>(null);
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const id = params.id as string;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const { fontSize } = useReaderSettings();


    function formatTime(seconds: number) {
        if (!Number.isFinite(seconds)) return "0:00";

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
    }

    async function handlePlayPause() {
        const audio = audioRef.current;

        if (!audio) return;

        if (audio.paused) {
            try {
                await audio.play();
            } catch (error) {
                console.error("Could not play audio:", error)
            }
        } else {
            audio.pause();
        }
    }

    function handleRewind() {
        const audio = audioRef.current;

        if (!audio) return;

        audio.currentTime = Math.max(0, audio.currentTime - 10);
    }

    function handleForward() {
        const audio = audioRef.current

        if (!audio) return;

        audio.currentTime = Math.min(
            audio.duration || Infinity,
            audio.currentTime + 10
        )
    }

    useEffect(() => {
        if (!id) return;


        async function fetchBooks() {
            try {
                const response = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${encodeURIComponent(id)}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch book");
                }

                const data: BookData = await response.json();

                setBook(data);
            } catch (error) {
                console.error("Error fetching book:", error)
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, [id]);



    if (loading) {
        return <div>Loading book...</div>;
    }

    if (!book) {
        return <div>Book not found.</div>;
    }


    return (

        <div className="wrapper relative flex flex-col ml-[200px] w-[calc(100%_-_200px)] transition-all duration-300">
            <div className="summary relative w-full overflow-y-auto h-[calc(100vh-160px)]">
                <div className="book-summary p-[24px] mx-auto max-w-[800px]">
                    <div className="summary-title text-[#032b41] text-[24px] border-b border-[#e1e7ea] mb-[32px] pb-[16px] leading-[1.5] font-bold ">
                        <span className="" >{book.title}</span>
                    </div>
                    <div
                        className="summary-text whitespace-pre-wrap leading-[1.4] text-[#032b41]"
                        style={{ fontSize: `${fontSize}px` }}>
                        {book.summary}
                    </div>
                </div>
                <audio ref={audioRef}
                    src={book.audioLink}
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    onLoadedMetadata={(event) => {
                        setDuration(event.currentTarget.duration);
                    }}
                    onDurationChange={event => {
                        setDuration(event.currentTarget.duration);
                    }}
                    onTimeUpdate={(event) => {
                        setCurrentTime(event.currentTarget.currentTime);
                    }} />
                <div className="audio-wrapper w-full h-[80px] mt-auto flex items-center justify-between bg-[#042330] px-[40px] fixed bottom-0 left-0 z-9998">
                    <div className="audio-track-wrapper w-[calc(100%_/_3)] flex gap-[12px]">
                        <div className="flex max-w-48px">
                            <figure className="h-[48px] w-[48px] max-w-48px">
                                <img className="w-full h-full" src={book.imageLink} alt="" />
                            </figure>
                        </div>
                        <div className="text-[#fff] font-[14px] flex flex-col gap-[4px] justify-center">
                            <div className="div">{book.title}</div>
                            <div className="text-[#bac8ce]">{book.author}</div>
                        </div>
                    </div>
                    <div className="audi-controls-wrapper w-[calc(100%_/_3)]">
                        <div className="audio-controls flex items-center gap-[24px] justify-center">
                            <button
                                onClick={handleRewind} className="rounded-full cursor-pointer flex items-center justify-center bg-transparent">
                                <TbRewindBackward10 className="w-[40px] h-[40px] invert transition-all duration-200" />
                            </button>
                            <button
                                onClick={handlePlayPause}
                                className="bg-[#fff] w-[40px] h-[40px] rounded-full cursor-pointer flex items-center justify-center border-none">
                                {isPlaying ? (
                                    <FaPause className="w-[20px] h-[20px] text-[#042330]" />
                                ) : (<FaPlay className="w-[20px] h-[20px] text-[#042330] ml-[4px]" />
                                )}
                            </button>
                            <button
                                onClick={handleForward}
                                className="rounded-full cursor-pointer flex items-center justify-center bg-transparent">
                                <TbRewindForward10 className="w-[40px] h-[40px] invert transition-all duration-200" />
                            </button>
                        </div>
                    </div>

                    <div className="audio-progress-wrapper w-[calc(100%_/_3)] flex items-center gap-[16px]">

                        <div className="time text-[#fff] text-[14px]">
                            {formatTime(currentTime)}
                        </div>

                        <input
                            type="range"
                            min={0}
                            max={duration || 0}
                            step={0.1}
                            value={currentTime}
                            onChange={(event) => {
                                const newTime = Number(event.target.value);

                                if (audioRef.current) {
                                    audioRef.current.currentTime = newTime;
                                }

                                setCurrentTime(newTime);
                            }}
                            className="progress-bar appearance-none h-[4px] rounded-full max-w-[300px] w-full cursor-pointer accent-white"
                            style={{
                                background: `linear-gradient(to right,
            #2bd97c 0%,
            #2bd97c ${duration > 0 ? (currentTime / duration) * 100 : 0}%,
            #bac8ce ${duration > 0 ? (currentTime / duration) * 100 : 0}%,
            #bac8ce 100%)`
                            }}
                        />

                        <div className="audio-length text-[#fff] text-[14px]">
                            {formatTime(duration)}
                        </div>

                    </div>


                </div>


            </div>

        </div>

    )
}

export default Player