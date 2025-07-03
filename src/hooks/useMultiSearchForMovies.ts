import { useQuery } from '@tanstack/react-query';
import { BASE_URL, options } from './config.ts'
import type { Movie } from '../types/Movies.ts';

async function fetchMultiSearchForMovies(keyword: string): Promise<Movie[]>{
          const res = await fetch(`${BASE_URL}/search/movie?query=${keyword}}&include_adult=true&language=en-US&page=1`, options);
          if (!res.ok) throw new Error('Failed to fetch movies');
          const data = await res.json();

          return data.results;
}

export function useMultiSearchForMoviesTV(keyword: string) {
  return useQuery<Movie[], Error>({
    queryKey: ['multiSearch', keyword], 
    queryFn: () => fetchMultiSearchForMovies(keyword),
    enabled: !!keyword, 
    staleTime: 1000 * 60 * 10,
  });
}