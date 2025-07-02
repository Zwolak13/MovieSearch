import { useState, useEffect, useRef, useMemo } from 'react';

type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type CarouselProps = {
  data: Movie[];
  label: string;
};




const TRANSITION_MS = 500; 
const SLIDE_WIDTH = 300;   
const GAP = 16;           

export default function Carousel({ data, label}:CarouselProps) {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const directionRef = useRef('right');
  const slideWidth = SLIDE_WIDTH + GAP;


  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      let count = 4;
      if (width < 640) count = 1;
      else if (width < 768) count = 2;
      else if (width < 1024) count = 3;

      setVisibleSlides(count);
      setCurrentIndex(count * 2); 
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);


  const cloneCount = visibleSlides * 2;


  const duplicated = useMemo(() => {
    return [
      ...data.slice(-cloneCount), 
      ...data,                   
      ...data.slice(0, cloneCount), 
    ];
  }, [data, cloneCount]);

  const totalSlides = duplicated.length;


  const handleMove = (dir: string) => {
    if (isTransitioning) return;
    directionRef.current = dir;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + (dir === 'right' ? visibleSlides : -visibleSlides));
  };


  const resetTo = (index: number) => {
    if (!trackRef.current) return;

    trackRef.current.style.transition = 'none';
    trackRef.current.style.transform = `translateX(-${index * slideWidth}px)`;

    requestAnimationFrame(() => {
      setCurrentIndex(index);

      requestAnimationFrame(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = `transform ${TRANSITION_MS}ms ease`;
        }
      });
    });
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      const min = cloneCount;       
      const max = cloneCount + data.length; 


      if (currentIndex >= max - 1) {
        resetTo(min + (currentIndex - max));
      } else if (currentIndex <= min) {
        resetTo(max - (min - currentIndex));
      }
    }, TRANSITION_MS);

    return () => clearTimeout(timeout);
  }, [currentIndex, isTransitioning, cloneCount, data.length]);

  return (
    <div className="w-full overflow-hidden px-10 pt-10">
      <h2 className="text-2xl text-yellow-400 mb-4 text-shadow-[0_0_5px_#00ffff,0_0_10px_#00ffff,0_0_15px_#00ffff]">
        {label}
      </h2>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-full bg-black/50 text-white hover:bg-black/70"
          onClick={() => handleMove('left')}
          aria-label="Previous slide"
        >
          ◀
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-full bg-black/50 text-white hover:bg-black/70"
          onClick={() => handleMove('right')}
          aria-label="Next slide"
        >
          ▶
        </button>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{
              width: `${slideWidth * totalSlides}px`,
              transform: `translateX(-${currentIndex * slideWidth}px)`,
              transition: isTransitioning ? `transform ${TRANSITION_MS}ms ease` : 'none',
            }}
          >
            {duplicated.map((movie, idx) => (
              <div
                key={`${movie.id}-${idx}`}
                className="flex-shrink-0 w-[300px] mr-4 bg-amber-300 rounded relative overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500" />
                <h3 className="text-white absolute bottom-5 left-5 right-5 font-bold text-shadow-md">
                  {movie.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}