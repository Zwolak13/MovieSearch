import Carousel from "./Carousel";
import mockedMovies from '../mockedData/movieData.js'

export default function Trendings(){
    return (
    <div className="w-full px-10 pb-20">
        <Carousel data={mockedMovies} label={'Trending'}/>
        <Carousel data={mockedMovies} label={'Horror'}/>
    </div>)
}