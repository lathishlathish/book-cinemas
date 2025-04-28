import React, { useState, useEffect } from 'react';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: 'action', name: 'Action & Adventure' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'family', name: 'Family' },
    { id: 'thriller', name: 'Thriller & Horror' }
  ];

  const getMoviesByGenre = (genre: string) => {
    return movies.filter(movie => movie.genre.includes(genre));
  };

  const scrollCategory = (categoryId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(`scroll-${categoryId}`);
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${movies[0].posterUrl})`,
            filter: 'brightness(0.6)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
        </div>
        
        <div className="relative h-full flex items-end pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
                {movies[0].title}
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                {movies[0].description}
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors">
                  Book Now
                </button>
                <button className="px-8 py-3 bg-gray-800/80 hover:bg-gray-700/80 text-white font-bold rounded-md transition-colors">
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {categories.map(category => {
            const categoryMovies = getMoviesByGenre(category.name.split(' ')[0]);
            if (categoryMovies.length === 0) return null;

            return (
              <div key={category.id} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {category.name}
                </h2>
                
                <div className="relative group">
                  {/* Scroll Buttons */}
                  <button
                    onClick={() => scrollCategory(category.id, 'left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button
                    onClick={() => scrollCategory(category.id, 'right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Movie Row */}
                  <div
                    id={`scroll-${category.id}`}
                    className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {categoryMovies.map(movie => (
                      <div key={movie.id} className="flex-none w-64">
                        <MovieCard movie={movie} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Movies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.filter(m => m.featured).map(movie => (
              <div key={movie.id} className="relative group cursor-pointer">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
                  <p className="text-sm text-gray-300">{movie.genre.join(' • ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">Trending Now</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.slice(0, 5).map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      {/* Download App Banner */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Download Our App
              </h2>
              <p className="text-gray-300 mb-6 max-w-lg">
                Get the best movie experience on your phone. Book tickets, check showtimes, and more!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black hover:bg-gray-900 py-3 px-6 rounded-lg flex items-center transition-colors">
                  <span className="mr-2">🍎</span>
                  <div className="text-left text-white">
                    <p className="text-xs">Download on the</p>
                    <p className="font-medium">App Store</p>
                  </div>
                </button>
                <button className="bg-black hover:bg-gray-900 py-3 px-6 rounded-lg flex items-center transition-colors">
                  <span className="mr-2">🤖</span>
                  <div className="text-left text-white">
                    <p className="text-xs">Get it on</p>
                    <p className="font-medium">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 text-white">App Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Quick ticket booking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Exclusive deals & offers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Movie recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Personalized watchlist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;