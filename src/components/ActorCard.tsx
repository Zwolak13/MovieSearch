import { IMAGE_URL } from "../hooks/config";
import type { Crew } from "../types/Crew";
import { useNavigate } from "react-router-dom";

interface ActorCardProps {
  crew: Crew
  idx: number
}

export default function ActorCard({crew, idx}: ActorCardProps){
      const navigate = useNavigate();
      const handleActorClick = (actorId: number) => {
        navigate(`/actor/${actorId}`);
    };

    return(
        <div
                              key={`${crew.id}-${idx}`}
                              className="flex-shrink-0 w-[300px] h-110 mr-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded relative overflow-hidden flex justify-center items-center"
                              onClick={() => handleActorClick(crew.id)}
                              >
                              {crew.profile_path !== null ? <img className=' w-full h-full' src={`${IMAGE_URL}${crew.profile_path}`}/> 
                              : 
                              <svg 
                              className="w-24 h-24 text-current stroke-current stroke-2" 
                              viewBox="0 0 24 24" 
                              fill="none"
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="8" r="5"/>
                              <path d="M20 21a8 8 0 0 0-16 0"/>
                            </svg>}
                              
                              <h3 className="text-white text-xl absolute bottom-10 w-full px-3 text-center font-bold text-shadow-md z-20">
                                  {crew.character}
                              </h3>
                              <h4 className='text-white  text-sm bg-black px-3 absolute bottom-5'>
                                {crew.name}
                              </h4>
                      
                              <div className='absolute w-full h-15 bg-gradient-to-t from-black  bottom-0'/>
                              <div className='absolute w-full h-20 bg-gradient-to-b from-black  top-0'/>
                          </div>
    )
}