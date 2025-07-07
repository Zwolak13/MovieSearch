import { useQuery } from '@tanstack/react-query';
import { BASE_URL, options } from './config.ts'
import type { PersonWithCredits } from '../types/PersonWithCredits.ts';

async function fetchMovieCreditsAndPersonalInfo(id:string): Promise<PersonWithCredits>{
    console.log(id);
          const res = await fetch(`${BASE_URL}/person/${id}?append_to_response=movie_credits&language=en-US`, options);
          if (!res.ok) throw new Error('Failed to fetch actor info');
          const data = await res.json();
          return data;
}

export function useMovieCredits(id:string){
    return useQuery<PersonWithCredits, Error>({
        queryKey: ['MovieCreditsAndPersonalInfo',id],
        queryFn: () => fetchMovieCreditsAndPersonalInfo(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 60
    })
}