import { useState } from 'react';

interface TopProps {
  onSearch: (keyword: string) => void;
}

export default function Top({ onSearch }: TopProps){
    const [input, setInput] = useState('');

    function handleSubmit(){
        if (input.trim()) {
            onSearch(input.trim());
        }
    };
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setInput(e.target.value);
    }


    return (
        <>
        <div className="w-[100vw] h-[70vh] text-5xl bg-black/30 flex justify-center items-center flex-col relative vhs-effect overflow-hidden"
         style={{
    background: "radial-gradient(ellipse at center, rgba(255, 0, 255, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%)",
            }}>
            <h1 className="opacity-100 py-10 z-20 text-center ">Yet Another <br/> Movie Search</h1>
            <div className=" z-20 flex items-center bg-black border-2 border-[#ff00ff] shadow-[0_0_20px_rgba(255,0,255,0.5)] rounded-md px-4">
                <input
                    type="text"
                    onChange={handleChange}
                    onKeyDown={(e) =>{
                        if(e.key === 'Enter'){
                            handleSubmit();
                        }
                    }}
                    className="bg-black w-50 sm:w-full text-white flex-grow outline-none border-none"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <path d="m21 21-4.34-4.34" />
                    <circle cx="11" cy="11" r="8"/>
                </svg>
            </div>
            <div
                className="absolute h-[100%] sm:h-[200%] bottom-0 right-[20%] w-[10%] origin-bottom animate-lightRight z-10 "
                style={{
                    backgroundImage:
                    'radial-gradient(circle, rgba(255,0,255,0.2) 0%, rgba(255,0,255,0) 70%)',
                    clipPath: 'polygon(50% 100%, -20% 0%, 120% 0%)',
                }}>
            </div>
            <div
                className="absolute h-[100%] sm:h-[200%] bottom-0 left-[20%] w-[10%] origin-bottom animate-lightLeft z-10"
                style={{
                    backgroundImage:
                    'radial-gradient(circle, rgba(255,0,255,0.2) 0%, rgba(255,0,255,0) 70%)',
                    clipPath: 'polygon(50% 100%, -20% 0%, 120% 0%)',
                }}>
            </div>

        </div>
        </>
    )
}