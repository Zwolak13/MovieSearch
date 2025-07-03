
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
            <h1 className="text-3xl pl-8 absolute top-6">Search result - "{keyword}"</h1>
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-items-center py-5">
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
        </PageLayout>
    )
}