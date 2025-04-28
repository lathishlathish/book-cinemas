import React, { useState } from 'react';
import { Theater, Showtime } from '../types';
import { Calendar, MapPin } from 'lucide-react';

interface MovieShowtimesProps {
  theatersWithShowtimes: {
    theater: Theater;
    showtimes: Showtime[];
  }[];
  onSelectShowtime: (showtime: Showtime) => void;
}

const MovieShowtimes: React.FC<MovieShowtimesProps> = ({ 
  theatersWithShowtimes,
  onSelectShowtime
}) => {
  const [selectedDate, setSelectedDate] = useState('2024-07-28'); // Default date

  // Generate the next 5 days for date selection
  const getDates = () => {
    const dates = [];
    const today = new Date('2024-07-28'); // Using hardcoded date for demo
    
    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dateStr = date.toISOString().split('T')[0];
      const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
      const dayNum = date.getDate();
      
      dates.push({ dateStr, dayName, dayNum });
    }
    
    return dates;
  };

  const dates = getDates();

  if (theatersWithShowtimes.length === 0) {
    return (
      <div className="p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No showtimes available</h3>
        <p className="text-gray-500">This movie is not currently playing in selected theaters.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Date Selector */}
      <div className="p-4 border-b bg-gray-50">
        <div className="flex items-center mb-2">
          <Calendar size={18} className="text-gray-500 mr-2" />
          <h3 className="font-medium text-gray-700">Select Date</h3>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {dates.map(({ dateStr, dayName, dayNum }) => (
            <button
              key={dateStr}
              onClick={() => setSelectedDate(dateStr)}
              className={`px-4 py-2 rounded-md text-center min-w-[4.5rem] ${
                selectedDate === dateStr
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              <p className="text-sm font-medium">{dayName}</p>
              <p className="text-lg">{dayNum}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Theaters and Showtimes */}
      <div className="divide-y">
        {theatersWithShowtimes.map(({ theater, showtimes }) => {
          // Filter showtimes by selected date
          const filteredShowtimes = showtimes.filter(st => st.date === selectedDate);
          
          if (filteredShowtimes.length === 0) return null;
          
          return (
            <div key={theater.id} className="p-4">
              <div className="mb-3">
                <h3 className="font-bold text-gray-800">{theater.name}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin size={14} className="mr-1" />
                  <span>{theater.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {filteredShowtimes.map(showtime => (
                  <button
                    key={showtime.id}
                    onClick={() => onSelectShowtime(showtime)}
                    className="group relative px-5 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800">{showtime.time}</span>
                    <span className="block text-xs text-gray-500">₹{showtime.price}</span>
                    
                    {/* Booking tooltip on hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-24 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Book tickets
                      <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieShowtimes;