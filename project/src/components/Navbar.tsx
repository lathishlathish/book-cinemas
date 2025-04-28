import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, User, LogOut } from 'lucide-react';
import { cities } from '../data/cities';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Chennai');
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    setCityDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    setProfileDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-red-500 flex items-center">
            <span className="mr-1">Cinema</span>
            <span className="text-white">Book</span>
          </Link>

          {/* Search Bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for movies, events, plays, sports..."
                  className="w-full py-1 px-4 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-red-500"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* City Selector & Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* City Selector */}
            <div className="relative">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors"
              >
                <span>{selectedCity}</span>
                <span className="text-xs">▼</span>
              </button>
              {cityDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 max-h-96 overflow-y-auto">
                  {cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => handleCitySelect(city.name)}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login / Profile */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
                >
                  <User size={20} />
                  <span className="hidden lg:block">{user?.name}</span>
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-gray-800 font-medium">{user?.name}</p>
                      <p className="text-gray-500 text-sm">{user?.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors"
              >
                <User size={20} />
                <span>Sign in</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for movies..."
                className="w-full py-2 px-4 pr-10 rounded-md text-gray-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-3 text-gray-500"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* City Selector */}
          <div className="py-2 border-b border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Select City</p>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-gray-700 text-white py-1 px-2 rounded w-full"
            >
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Navigation Links */}
          <div className="py-2 space-y-1 border-b border-gray-700">
            <Link
              to="/"
              className="block py-2 text-white hover:text-red-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="block py-2 text-white hover:text-red-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Movies
            </Link>
          </div>

          {/* Login/Account */}
          <div className="py-2">
            {isAuthenticated ? (
              <>
                <div className="flex items-center py-2 text-white">
                  <User size={20} className="mr-2" />
                  <span>{user?.name}</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center py-2 text-white hover:text-red-400 transition-colors"
                >
                  <LogOut size={20} className="mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center py-2 text-white hover:text-red-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User size={20} className="mr-2" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;