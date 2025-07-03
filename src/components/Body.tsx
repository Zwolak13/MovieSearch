import Carousel from "./PosterCarousel";
// @ts-expect-error - mocked data is js file
import mockedMovies from "../mockedData/movieData";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

export default function Body(){

    const {data: moviesPlayingNow, isLoading, error} = useNowPlayingMovies();


    return (
    <div className="w-full px-10 pb-20">
        <Carousel data={moviesPlayingNow || []} label={'Now Playing'}/>
        <Carousel data={mockedMovies} label={'Horror'}/>
    </div>)
}