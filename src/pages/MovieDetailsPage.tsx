import { useParams } from 'react-router-dom';
import SingleMovieInfo from '../components/SingleMovieInfo';

export default function MovieDetailsPage(){
    const { movieId } = useParams<{ movieId: string }>();

    if (!movieId) return <div>Movie ID is missing</div>;

    return <SingleMovieInfo movieId={movieId} />;
}