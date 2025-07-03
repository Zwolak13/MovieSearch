import { useQuery } from '@tanstack/react-query';
import { BASE_URL, options } from './config.ts'
import type { Movie } from '../types/Movies.ts';

async function fetchTopRatedMovies(): Promise<Movie[]>{
          const res = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=1&region=PL`, options);
          if (!res.ok) throw new Error('Failed to fetch movies');
          const data = await res.json();
          return data.results;
}

export function useTopRatedMovies(){
    return useQuery<Movie[], Error>({
        queryKey: ['TopRatedMovies'],
        queryFn: fetchTopRatedMovies,
        staleTime: 1000 * 60 * 60
    })
}