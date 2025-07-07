
import { useMultiSearchForMoviesTV } from "../hooks/useMultiSearchForMovies";
import MoviePoster from "./MoviePoster";
import { useNavigate } from "react-router-dom";
import PageLayout from "./SidePageLayout";
import ErrorMessage from "./ErrorMessage";

type SearchProps = {
  keyword: string;
};

export default function Search({keyword}: SearchProps){
    const { data, isLoading, error } = useMultiSearchForMoviesTV(keyword);
    const navigate = useNavigate();

    const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading movies</div>;


    return (    
        <PageLayout>
          <div className="sm:p-0 py-25 ">
            <h1 className="text-3xl sm:pl-0 absolute sm:top-6 top-15 sm:px-0 px-2 text-center">Search result - "{keyword}"</h1>
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-center py-5 sm:pt-0 pt-15">
            {isLoading && <div><h1 className="text-3xl">Searching for your movies...</h1></div>}
            {error && <ErrorMessage error={error} />}

            {!isLoading && !error &&
            <>
            {data?.map((movie, idx) => (
              <MoviePoster 
                key={`${movie.id}-${idx}`}
                movie={movie} 
                idx={idx}
                onClick={() => handleMovieClick(movie.id?.toString() || '')}/>
            ))}
            </>}
        </div>
          </div>
            
        </PageLayout>
    )
}