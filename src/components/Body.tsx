import Carousel from "./Carousel";
// @ts-expect-error - mocked data is js file
import mockedMovies from "../mockedData/movieData";
import { useMovies } from "../context/useMovie";


export default function Body(){

    const { moviesPlayingNow, loading} = useMovies();

    return (
    <div className="w-full px-10 pb-20">
        <Carousel data={moviesPlayingNow} label={'Trending'}/>
        <Carousel data={mockedMovies} label={'Horror'}/>
    </div>)
}