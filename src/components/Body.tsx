import Carousel from "./PosterCarousel";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";

export default function Body(){

    const {data: moviesPlayingNow, isLoading: nowPlayingMoviesLoading, error: nowPlayingMoviesError} = useNowPlayingMovies();
    const {data: moviesTopRated, isLoading: topRatedLoading, error: topRatedError} = useTopRatedMovies();

    return (
    <div className="w-full px-10 pb-20">
        <Carousel data={moviesPlayingNow || []} 
        label={'Now Playing'}
        isLoading={nowPlayingMoviesLoading}
        error={nowPlayingMoviesError}
        />

        <Carousel data={moviesTopRated || []} 
        label={'Top Rated'}
        isLoading={topRatedLoading}
        error={topRatedError}
        />
    </div>)
}