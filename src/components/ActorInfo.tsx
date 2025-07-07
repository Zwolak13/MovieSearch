
import PageLayout from "./SidePageLayout";
import ErrorMessage from "./ErrorMessage";
import { useMovieCredits } from "../hooks/useMovieCredits";
import { IMAGE_URL } from "../hooks/config";
import KnownForCarousel from "./KnownForCarousel";


interface ActorInfoProps {
  actorId: string;
}



export default function ActorInfo({ actorId }: ActorInfoProps){

    const { data, isLoading, error } = useMovieCredits(actorId);

    return (
        <PageLayout>
            {isLoading && <div><h1 className="text-3xl">Trying to find more info...</h1></div>}
            {error && <ErrorMessage error={error} />}
            {!isLoading && !error && data &&
            <>
                <div className="flex flex-col md:flex-row md:p-0 py-15 pb-0 justify-center items-center">
                    <div
                      className="flex-shrink-0 w-[300px] h-110 mr-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded relative overflow-hidden flex justify-center items-center md:mx-0"

                      >
                      {data.profile_path !== null ? <img className=' w-full h-full' src={`${IMAGE_URL}${data.profile_path}`}/> 
                      : 
                      <svg 
                      className="w-24 h-24 text-current fill-current"
                      viewBox="0 0 24 24"
                      >
                      <polygon points="6 3 20 12 6 21 6 3"/>
                      </svg>}
              
                      <div className='absolute w-full h-15 bg-gradient-to-t from-black  bottom-0'/>
                      <div className='absolute w-full h-20 bg-gradient-to-b from-black  top-0'/>
                  </div>
                    <div className="w-full p-5">
                       <div>
                            <h1 className="text-3xl pb-2">{data.name}</h1>
                            <div >
                                <h3 className="text-sm">Birthday: {data.birthday}</h3>
                                {data.deathday && <h3 className="text-sm">Deathday: {data.deathday}</h3>}
                            </div>
                            <div className="py-4">
                                <h1 className="text-2xl pb-2 pt-2">Biography</h1>
                                {data.biography}
                            </div>
                       </div>
                    </div>
                </div>
        <KnownForCarousel data={data.movie_credits.cast} label="Known For" isLoading={isLoading} error={error}/>
            </>}
        </PageLayout>
    )
}
