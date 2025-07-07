import { useState, useEffect, useRef, useMemo } from 'react';
import type { Movie } from '../types/Movies';
import MoviePoster from './MoviePoster';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

interface CarouselProps{
  data: Movie[];
  label: string;
  error: Error | null;
  isLoading: boolean;
};



const TRANSITION_MS = 500; 
const SLIDE_WIDTH = 300;   
const GAP = 16;           

export default function KnownForCarousel({ data, label, error, isLoading }:CarouselProps) {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const trackRef = useRef<HTMLDivElement | null>(null);
  const directionRef = useRef('right');
  const slideWidth = SLIDE_WIDTH + GAP;


  const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };


  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      let count = 4;
      if (width < 945) count = 1;
      else if (width < 1200) count = 2;
      else if (width < 1400) count = 3;

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
    <div className="w-full overflow-hidden px-6.5 sm:px-10 pt-10 flex justify-center flex-col items-center sm:block">
      <h2 className="text-2xl text-yellow-400 mb-4 text-shadow-[0_0_5px_#00ffff,0_0_10px_#00ffff,0_0_15px_#00ffff]">
        {label}
      </h2>

      <div className="relative w-75 sm:w-full">
        {isLoading && <div><h2 className='text-3xl'>Looking for {label} Movies...</h2></div>}
        {error && <ErrorMessage error={error} />}
        {!isLoading && !error && <>
          <button
          className="absolute left-2 sm:-left-10 top-1/2 -translate-y-1/2 z-10 w-10 sm:h-full h-10 sm:rounded-none rounded-4xl bg-black/30 hover:bg-black text-white  flex justify-center items-center"
          onClick={() => handleMove('left')}
          aria-label="Previous slide"
        >
          ◀
        </button>
        <button
          className="absolute right-2 sm:-right-10 top-1/2 -translate-y-1/2 z-10 w-10 sm:h-full h-10 sm:rounded-none rounded-4xl bg-black/30 hover:bg-black text-white "
          onClick={() => handleMove('right')}
          aria-label="Next slide"
        >
      ▶
        </button>

        <div>
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
              <MoviePoster 
              key={`${movie.id}-${idx}`}
              movie={movie} 
              idx={idx}
              onClick={() => handleMovieClick(movie.id?.toString() || '')}/>
            ))}
          </div>
        </div>
        </>}
      </div>
    </div>
  );
}