import Carousel from "./Carousel";
// @ts-expect-error - mocked data is js file
import mockedMovies from "../mockedData/movieData";

export default function Trendings(){
    return (
    <div className="w-full px-10 pb-20">
        <Carousel data={mockedMovies} label={'Trending'}/>
        <Carousel data={mockedMovies} label={'Horror'}/>
    </div>)
}