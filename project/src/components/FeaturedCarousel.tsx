import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../types';

interface CarouselProps {
  movies: Movie[];
}

const FeaturedCarousel: React.FC<CarouselProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredMovies = movies.filter(movie => movie.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredMovies.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (featuredMovies.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[30rem] md:h-[40rem] overflow-hidden">
      {/* Slides */}
      <div 
        className="w-full h-full transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}
      >
        {featuredMovies.map((movie, index) => (
          <div 
            key={movie.id} 
            className="w-full h-full flex-shrink-0 relative"
            style={{ 
              backgroundImage: `url(${movie.posterUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  {movie.title}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {movie.certificate}
                  </span>
                  <span className="text-white text-sm md:text-base">
                    {movie.duration}
                  </span>
                  <span className="text-white text-sm md:text-base">
                    {movie.language.slice(0, 3).join(', ')}
                  </span>
                </div>
                <p className="text-gray-200 text-sm md:text-base mb-6 max-w-xl line-clamp-3">
                  {movie.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {movie.genre.map((genre, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-800/80 text-gray-200 px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/movie/${movie.id}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-lg"
                >
                  Book Tickets
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-red-600' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;