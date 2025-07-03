import Top from "../components/Top";
import Body from "../components/Body";
import { useNavigate } from 'react-router-dom';

export default function Homepage(){
    const navigate = useNavigate();

  const handleSearch = (keyword: string) => {
    navigate(`/search/${encodeURIComponent(keyword)}`);
  };

    return (
    <>
      <Top onSearch={handleSearch} />
      <Body />
    </>
  );
}