import type { Movie } from './Movies';

export interface PersonWithCredits {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  deathday: string | null;
  place_of_birth: string;
  profile_path: string;
  movie_credits: {
    cast: Movie[];
  };
}