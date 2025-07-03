import { useParams } from 'react-router-dom';
import Search from '../components/Search';

export default function SearchPage(){
    const { keyword } = useParams<{ keyword: string }>();

    return (
        <>
            <Search keyword={keyword ?? ""} />
        </>
    )
}