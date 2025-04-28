import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types';
import { Star } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  featured?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, featured = false }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className={`group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ${
        featured ? 'transform hover:scale-105' : 'hover:-translate-y-2'
      }`}
    >
      {/* Movie Poster */}
      <div className="aspect-[2/3] relative bg-gray-800">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 flex items-center bg-black/70 text-white px-2 py-1 rounded-md text-sm font-medium">
          <Star size={14} className="text-yellow-400 mr-1" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
        
        {/* Certificate */}
        <div className="absolute top-2 left-2 bg-gray-900/80 text-white px-2 py-0.5 rounded text-xs font-medium">
          {movie.certificate}
        </div>
      </div>
      
      {/* Movie Info */}
      <div className="p-3 bg-gray-900 text-white">
        <h3 className="font-bold text-base mb-1 line-clamp-1">{movie.title}</h3>
        <p className="text-xs text-gray-300 mb-1">{movie.genre.join(', ')}</p>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{movie.language.slice(0, 2).join(', ')}{movie.language.length > 2 ? '...' : ''}</span>
          <span>{movie.duration}</span>
        </div>
        
        {/* Book Now Overlay - Only shows on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-red-600 text-white px-4 py-2 rounded-md font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Book Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;