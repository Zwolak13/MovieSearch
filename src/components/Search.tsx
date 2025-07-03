import type { SearchType } from "../types/SearchType"
import { useMultiSearchForMoviesTV } from "../hooks/useMultiSearchForMovies";
import { IMAGE_URL } from "../hooks/config";
import MoviePoster from "./MoviePoster";

export default function Search({keyword, setKeyword}: SearchType){
    const { data, isLoading, error } = useMultiSearchForMoviesTV(keyword);

    console.log(data);

    return (
        <>
        <div className=" w-full h-15 bg-black/50 vhs-effect px-8 flex items-center">
            <svg 
            className="w-12  h-12 text-white stroke-current stroke-2"
            viewBox="0 0 24 24" 
            fill="none"
            strokeLinecap="round" 
            strokeLinejoin="round"
            onClick={() => setKeyword('')}
            >
            <path d="M6 8L2 12L6 16"/>
            <path d="M2 12H22"/>
            </svg>
            <h1 className="text-3xl pl-8">Search result - {keyword}</h1>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-center py-5">
            {data?.map((movie, idx) => (
               <MoviePoster movie={movie} idx={idx}/>
            ))}
        </div>
        </>
    )
}