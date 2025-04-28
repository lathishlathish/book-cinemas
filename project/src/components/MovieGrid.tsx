import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types';

interface MovieGridProps {
  movies: Movie[];
  title?: string;
  subtitle?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ 
  movies, 
  title = "Movies in Chennai", 
  subtitle 
}) => {
  if (movies.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-700">No movies found</h2>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria</p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {title && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieGrid;