import { useQuery } from '@tanstack/react-query';
import { BASE_URL, options } from './config.ts'
import type { Details } from '../types/Details.ts';

async function fetchSingleMovieInfo(id: string): Promise<Details>{
          const res = await fetch(`${BASE_URL}/movie/${id}?append_to_response=credits&language=en-US`, options);
          if (!res.ok) throw new Error('Failed to fetch movie');
          const data = await res.json();
          return data;
}

export function useSingleMovieInfo(id: string) {
  return useQuery<Details, Error>({
    queryKey: ['singleMovie',id], 
    queryFn: () => fetchSingleMovieInfo(id),
    enabled: !!id, 
    staleTime: 1000 * 60 * 10,
  });
}