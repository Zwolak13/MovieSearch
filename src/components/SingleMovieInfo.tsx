import { useSingleMovieInfo } from "../hooks/useSingleMovieInfo"
import SingleMoviePoster from "./SingleMoviePoster";
import CrewCarousel from "./CrewCarousel";
import PageLayout from "./SidePageLayout";
import ErrorMessage from "./ErrorMessage";


interface SingleMovieInfoProps {
  movieId: string;
}



export default function SingleMovieInfo({ movieId }: SingleMovieInfoProps){

    const { data, isLoading, error } = useSingleMovieInfo(movieId);

    return (
        <PageLayout>
            {isLoading && <div><h1 className="text-3xl">Trying to find your movie...</h1></div>}
            {error && <ErrorMessage error={error} />}
            {!isLoading && !error && 
            <>
                <div className="flex flex-col sm:flex-row">
                    <SingleMoviePoster movie_path={data?.poster_path ?? ''} id={data?.id ?? 0} vote_average={data?.vote_average ?? 0}/>
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
            </>}
        </PageLayout>
    )
}
