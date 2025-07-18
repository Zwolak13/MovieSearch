import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }
    return (
      <>
      <Header />
      <div className="w-full p-2 sm:p-10">
            <svg 
            className="w-12  h-12 text-white stroke-current stroke-2 absolute z-20 left-5  sm:left-15 top-25 sm:top-37"
            viewBox="0 0 24 24" 
            fill="none"
            strokeLinecap="round" 
            strokeLinejoin="round"
            onClick={handleGoBack}
            >
            <path d="M6 8L2 12L6 16"/>
            <path d="M2 12H22"/>
            </svg>
            <div className="vhs-effect bg-black/50 w-full p-2 sm:p-20">
                            {children}
            </div>
        </div>
      </>
    )
}