import React, { useState } from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  languages: string[];
  genres: string[];
  onFilterChange: (filters: {
    languages: string[];
    genres: string[];
  }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  languages, 
  genres, 
  onFilterChange 
}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => {
      const updated = prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language];
      
      onFilterChange({
        languages: updated,
        genres: selectedGenres
      });
      
      return updated;
    });
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => {
      const updated = prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre];
      
      onFilterChange({
        languages: selectedLanguages,
        genres: updated
      });
      
      return updated;
    });
  };

  const clearFilters = () => {
    setSelectedLanguages([]);
    setSelectedGenres([]);
    onFilterChange({
      languages: [],
      genres: []
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-6">
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4 border-b">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center justify-between w-full text-gray-700"
        >
          <span className="font-medium">Filters</span>
          <Filter size={18} />
        </button>
      </div>

      {/* Desktop Filters or Mobile Expanded Filters */}
      <div className={`${filtersOpen ? 'block' : 'hidden md:block'} p-4`}>
        <div className="md:flex md:justify-between md:items-center">
          {/* Language Filter */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-medium text-gray-700 mb-2">Language</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => toggleLanguage(language)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedLanguages.includes(language)
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          {/* Genre Filter */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-medium text-gray-700 mb-2">Genre</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedGenres.includes(genre)
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedLanguages.length > 0 || selectedGenres.length > 0) && (
            <div className="mt-4 md:mt-0">
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;