import React, { createContext, useState, useEffect } from 'react';
import { BASE_URL, options } from './config.ts';

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieContextType {
  moviesPlayingNow: Movie[];
  loading: boolean;
  error: string | null;
  fetchPlayingNowMovies: () => Promise<void>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [moviesPlayingNow, setMoviesPlayingNow] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPlayingNowMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options);
      if (!res.ok) throw new Error('Failed to fetch movies');
      const data = await res.json();
      setMoviesPlayingNow(data.results);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayingNowMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ 
      moviesPlayingNow, 
      loading, 
      error, 
      fetchPlayingNowMovies 
    }}>
      {children}
    </MovieContext.Provider>
  );
}

export { MovieContext };