import Carousel from "./PosterCarousel";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useNavigate } from "react-router-dom";

export default function Body(){

    const {data: moviesPlayingNow, isLoading, error} = useNowPlayingMovies();
    const navigate = useNavigate();

    const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies</div>;

    return (
    <div className="w-full px-10 pb-20">
        <Carousel data={moviesPlayingNow || []} 
        label={'Now Playing'}
        onMovieClick={handleMovieClick}
        />
    </div>)
}