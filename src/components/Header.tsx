import SideLogo from '../assets/sideicon.svg'
import { useNavigate } from 'react-router-dom'

export default function Header(){
    const navigate = useNavigate();

    return (
        <div className="flex justify-center vhs-effect bg-black/50 w-full">
            <img className='py-6' src={SideLogo}
            onClick={() => navigate(`/`)}/>
        </div>
    )
}