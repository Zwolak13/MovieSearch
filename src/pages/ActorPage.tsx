import { useParams } from 'react-router-dom';
import ActorInfo from '../components/ActorInfo';


export default function ActorPage(){
    const { actorId } = useParams<{ actorId: string }>();

    if (!actorId) return <div>Actor ID is missing</div>;

    return <ActorInfo actorId={actorId} />;
}