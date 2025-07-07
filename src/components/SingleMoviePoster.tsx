import { IMAGE_URL } from "../hooks/config";

interface MoviePosterProps {
  movie_path: string;
  id: number;
  vote_average: number;
}

export default function SingleMoviePoster({ movie_path, id, vote_average }: MoviePosterProps){

    return (
    <div
        key={`${id}`}
        className="flex-shrink-0 w-[300px] h-110 mr-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded relative overflow-hidden flex justify-center items-center"
        >
        {movie_path !== null && movie_path !== '' ? 
        <div>
            <img className=' w-full h-full' src={`${IMAGE_URL}${movie_path}`} />
            <svg 
            className="w-8 h-8 text-yellow-500 fill-current absolute top-3 left-5 z-20"
            viewBox="0 0 24 24">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
            </svg>
            <span className='absolute top-3 left-15 text-2xl   z-20'>{vote_average?.toFixed(2)}</span>
            <div className='absolute w-full h-15 bg-gradient-to-t from-black  bottom-0'/>
            <div className='absolute w-full h-20 bg-gradient-to-b from-black  top-0'/>
        </div> 
        : 
        <svg 
        className="w-24 h-24 text-current fill-current"
        viewBox="0 0 24 24"
        >
        <polygon points="6 3 20 12 6 21 6 3"/>
        </svg>}
    </div>
    )

}