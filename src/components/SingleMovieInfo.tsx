import { useSingleMovieInfo } from "../hooks/useSingleMovieInfo"
import SingleMoviePoster from "./SingleMoviePoster";
import CrewCarousel from "./CrewCarousel";

export default function SingleMovieInfo(movieId: string){

    const { data, isLoading, error } = useSingleMovieInfo(movieId);

    console.log(data);

    return (
        <div className="w-full p-10">
            <svg 
            className="w-12  h-12 text-white stroke-current stroke-2 absolute z-20 left-20 top-15"
            viewBox="0 0 24 24" 
            fill="none"
            strokeLinecap="round" 
            strokeLinejoin="round"
            >
            <path d="M6 8L2 12L6 16"/>
            <path d="M2 12H22"/>
            </svg>
            <div className="vhs-effect bg-black/50 w-full p-20">
                <div className="flex flex-col sm:flex-row">
                    <SingleMoviePoster movie_path={data?.poster_path} id={data?.id} vote_average={data?.vote_average}/>
                    <div className="w-full p-5">
                        <div className="w-full flex flex-row justify-between">
                            <div className="w-2/3 flex flex-col">
                                <span className="text-3xl pb-2">{data?.title}</span>
                                <span className="pb-5">{data?.release_date}</span>
                                <div className="flex flex-row">
                                    {data?.genres.map((genre, id) => (
                                    <span className="bg-[#ff00ff] font-bold px-4 mr-4 py-2 text-center " key={id}>{genre.name.trim()}</span>
                                    ))}
                                </div>
                               
                            </div>
                            <div className="text-xl flex flex-col pt-4">
                                <span>Budget {data?.budget}</span>
                                <span>Boxofice {data?.revenue}</span>
                            </div>
                        </div>
                        <div className="py-20">
                            {data?.overview}
                        </div>
                    </div>
                </div>
                <CrewCarousel data={data?.credits?.cast || []} label="Cast"/>
            </div>
        </div>
    )
}
