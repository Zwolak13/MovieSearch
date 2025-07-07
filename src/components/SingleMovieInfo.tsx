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

    const formatCurrency = (number: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(number);
    };

    return (
        <PageLayout>
            {isLoading && <div><h1 className="text-3xl">Trying to find your movie...</h1></div>}
            {error && <ErrorMessage error={error} />}
            {!isLoading && !error && 
            <>
                <div className="flex flex-col lg:flex-row sm:p-0 py-15 pb-0 items-center">
                    <SingleMoviePoster movie_path={data?.poster_path ?? ''} id={data?.id ?? 0} vote_average={data?.vote_average ?? 0}/>
                    <div className="w-full p-5">
                        <div className="flex flex-row justify-between">
                            <div className="w-2/3 flex flex-col sm:p-0 pt-4">
                                <span className="text-3xl pb-2">{data?.title}</span>
                                <span className="pb-5">{data?.release_date}</span>
                                <div className="flex flex-row flex-wrap w-85">
                                    {data?.genres.map((genre, id) => (
                                        <span
                                        key={id}
                                        className="bg-[#ff00ff] font-bold  px-4 py-2 mr-4 mb-4 text-center whitespace-nowrap inline-block"
                                        >
                                        {genre.name.trim()}
                                        </span>
                                    ))}
                                </div>

                               
                            </div>
                            <div className="text-[12px] flex flex-col sm:p-0 pt-4 sm:text-sm ">
                                <span>Budget: <br/>{formatCurrency(data?.budget || 0)}</span>
                                <span>Box Office: <br/>{formatCurrency(data?.revenue || 0)}</span>
                            </div>
                        </div>
                        <div className="4">
                            {data?.overview}
                        </div>
                    </div>
                </div>
                <CrewCarousel data={data?.credits?.cast || []} label="Cast"/>
            </>}
        </PageLayout>
    )
}
