import { useQuery } from '@tanstack/react-query';
import { BASE_URL, options } from './config.ts'
import type { Movie } from '../types/Movies.ts';

async function fetchNowPlayingMovies(): Promise<Movie[]>{
          const res = await fetch(`${BASE_URL}/movie/now_playing?language=en-US&page=1`, options);
          if (!res.ok) throw new Error('Failed to fetch movies');
          const data = await res.json();
          return data.results;
}

export function useNowPlayingMovies(){
    return useQuery<Movie[], Error>({
        queryKey: ['nowPlayingMovies'],
        queryFn: fetchNowPlayingMovies,
        staleTime: 1000 * 60 * 60
    })
}