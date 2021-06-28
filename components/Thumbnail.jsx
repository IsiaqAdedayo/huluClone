import Image from "next/image"
import { useState } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react"
import { Modal } from 'react-responsive-modal';

const Thumbnail = forwardRef(({result}, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const [movie, setMovie] = useState("")
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleClick = () => {
        setMovie(result)
        onOpenModal()
    }

     
    return (
        <div ref={ref}  className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50">
            <Image 
                layout="responsive"
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
                height={1000}
                width={1920}
            />

            <div className="p-2" onClick={handleClick}>
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 transition-all duration-100 ease-in-out group-hover:opacity-100">
                    {result.vote_average && `${result.vote_average} .`}{" "}
                    {result.release_date || result.first_air_date} . {" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>

            <div>
                <Modal 
                    open={open} 
                    onClose={onCloseModal} 
                    center 
                    classNames={{
                        modal: 'customModal',
                    }}
                >
                    <div className="p-3 flex flex-col md:flex-row justify-between space-x-4">
                        <div>
                            <Image 
                                layout="intrinsic"
                                src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}` || `${BASE_URL}${movie.poster_path}`}
                                height={1700}
                                width={1920}
                            />
                        </div>
                        <div>
                            <h2 className="mb-1 text-2xl">{movie.title || movie.original_name}</h2>
                            <p className="flex flex-wrap text-sm">
                                <span className="m-1 text-xl">OVERVIEW</span>
                                {movie.overview}
                            </p>
                            <p className="mt-1 md:mt-3 flex justify-center items-center">
                                Ratings: {movie.vote_average && `${movie.vote_average} .`}{" "} &nbsp;&nbsp;
                                {movie.release_date || movie.first_air_date} . {" "} &nbsp;
                                <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
                            </p>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
})

export default Thumbnail
