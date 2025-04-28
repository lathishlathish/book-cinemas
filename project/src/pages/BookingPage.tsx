import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
import { theaters, showtimes } from '../data/theaters';
import { Movie, Theater, Showtime } from '../types';
import { Check, Clock, Calendar, MapPin, ArrowLeft } from 'lucide-react';

// Helper function to generate seat layout
const generateSeats = (rows: number, seatsPerRow: number, bookedSeats: string[] = []) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const layout = [];
  
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < seatsPerRow; j++) {
      const seatId = `${alphabet[i]}${j + 1}`;
      row.push({
        id: seatId,
        row: alphabet[i],
        number: j + 1,
        status: bookedSeats.includes(seatId) ? 'booked' : 'available'
      });
    }
    layout.push(row);
  }
  
  return layout;
};

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const showtimeId = searchParams.get('showtime');
  const theaterId = searchParams.get('theater');
  
  const [movie, setMovie] = useState<Movie | null>(null);
  const [theater, setTheater] = useState<Theater | null>(null);
  const [showtime, setShowtime] = useState<Showtime | null>(null);
  const [seatLayout, setSeatLayout] = useState<any[][]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [step, setStep] = useState<'seats' | 'summary'>('seats');
  
  // Get some random pre-booked seats for demo purposes
  const getRandomBookedSeats = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const bookedSeats = [];
    const numSeatsToBook = Math.floor(Math.random() * 20) + 10;
    
    for (let i = 0; i < numSeatsToBook; i++) {
      const row = alphabet[Math.floor(Math.random() * 10)];
      const seat = Math.floor(Math.random() * 18) + 1;
      bookedSeats.push(`${row}${seat}`);
    }
    
    return bookedSeats;
  };
  
  useEffect(() => {
    // Find movie, theater, and showtime information
    const foundMovie = movies.find(m => m.id === id);
    const foundTheater = theaters.find(t => t.id === theaterId);
    const foundShowtime = showtimes.find(s => s.id === showtimeId);
    
    if (foundMovie) setMovie(foundMovie);
    if (foundTheater) setTheater(foundTheater);
    if (foundShowtime) setShowtime(foundShowtime);
    
    // Generate seat layout (10 rows, 18 seats per row) with some random booked seats
    const bookedSeats = getRandomBookedSeats();
    const layout = generateSeats(10, 18, bookedSeats);
    setSeatLayout(layout);
    
    // Update page title
    if (foundMovie && foundTheater) {
      document.title = `Book ${foundMovie.title} at ${foundTheater.name} - CinemaBook`;
    }
  }, [id, theaterId, showtimeId]);

  const handleSeatClick = (seatId: string, status: string) => {
    if (status === 'booked') return;
    
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const proceedToSummary = () => {
    if (selectedSeats.length === 0) return;
    setStep('summary');
  };

  const proceedToPayment = () => {
    // In a real app, this would redirect to a payment gateway
    alert('Redirecting to payment gateway...');
    navigate('/');
  };

  const getSeatClass = (status: string, id: string) => {
    if (status === 'booked') {
      return 'bg-gray-400 text-gray-600 cursor-not-allowed';
    } else if (selectedSeats.includes(id)) {
      return 'bg-green-600 text-white cursor-pointer';
    } else {
      return 'bg-white text-gray-800 hover:bg-gray-200 cursor-pointer';
    }
  };

  const calculateTotal = () => {
    if (!showtime) return 0;
    return selectedSeats.length * showtime.price;
  };

  if (!movie || !theater || !showtime) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-64 bg-gray-200 rounded-lg w-full max-w-2xl mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header with booking info */}
        <div className="mb-6">
          <button 
            onClick={() => step === 'summary' ? setStep('seats') : navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={18} className="mr-1" />
            {step === 'summary' ? 'Back to Seat Selection' : 'Back to Movie'}
          </button>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <h1 className="text-2xl font-bold text-gray-800">{movie.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 text-sm mt-2 gap-x-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{showtime.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{showtime.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>{theater.name}</span>
              </div>
            </div>
          </div>
        </div>
        
        {step === 'seats' ? (
          <>
            {/* Seat Selection */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Select Seats</h2>
              
              {/* Screen */}
              <div className="relative mb-10 mt-6">
                <div className="h-2 bg-gray-300 rounded-lg w-full max-w-3xl mx-auto mb-1"></div>
                <div className="text-center text-sm text-gray-500">SCREEN</div>
              </div>
              
              {/* Seat Layout */}
              <div className="flex flex-col items-center overflow-x-auto pb-4">
                <div className="grid gap-y-2">
                  {seatLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-1">
                      <div className="w-6 h-6 flex items-center justify-center text-sm font-medium text-gray-600">
                        {row[0].row}
                      </div>
                      <div className="flex gap-1">
                        {row.map((seat, seatIndex) => (
                          <button
                            key={`${rowIndex}-${seatIndex}`}
                            className={`w-6 h-6 text-xs flex items-center justify-center rounded ${getSeatClass(
                              seat.status,
                              seat.id
                            )}`}
                            disabled={seat.status === 'booked'}
                            onClick={() => handleSeatClick(seat.id, seat.status)}
                            aria-label={`Seat ${seat.id}`}
                          >
                            {seat.number}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Seat Legend */}
              <div className="flex justify-center items-center gap-6 mt-8 mb-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white border border-gray-300 rounded mr-2"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded mr-2"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                  <span>Booked</span>
                </div>
              </div>
            </div>
            
            {/* Selected Seats Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {selectedSeats.length === 0 
                      ? 'No seats selected' 
                      : `${selectedSeats.length} seat${selectedSeats.length !== 1 ? 's' : ''} selected`}
                  </h3>
                  {selectedSeats.length > 0 && (
                    <p className="text-gray-600">
                      {selectedSeats.sort().join(', ')}
                    </p>
                  )}
                </div>
                
                <div className="mt-4 md:mt-0">
                  <div className="text-lg font-bold text-gray-800 mb-2">
                    Total: ₹{calculateTotal()}
                  </div>
                  <button
                    onClick={proceedToSummary}
                    disabled={selectedSeats.length === 0}
                    className={`w-full md:w-auto px-6 py-3 rounded-md text-white font-bold ${
                      selectedSeats.length === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700'
                    } transition-colors`}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Booking Summary */
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Booking Summary</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-gray-800 font-medium mb-2">Movie Details</h3>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-gray-600 w-20">Movie:</span>
                      <span className="font-medium">{movie.title}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-20">Date:</span>
                      <span>{showtime.date}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-20">Time:</span>
                      <span>{showtime.time}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-20">Duration:</span>
                      <span>{movie.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-gray-800 font-medium mb-2">Theater Details</h3>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-gray-600 w-20">Theater:</span>
                      <span className="font-medium">{theater.name}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-20">Location:</span>
                      <span>{theater.location}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-20">Seats:</span>
                      <span>{selectedSeats.sort().join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Summary */}
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Payment Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ticket Price (₹{showtime.price} x {selectedSeats.length})</span>
                  <span>₹{showtime.price * selectedSeats.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Convenience Fee</span>
                  <span>₹30</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold">
                  <span>Total Amount</span>
                  <span>₹{calculateTotal() + 30}</span>
                </div>
              </div>
            </div>
            
            {/* Terms and Payment Button */}
            <div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  defaultChecked
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" className="text-red-600 hover:underline">terms and conditions</a>
                </label>
              </div>
              
              <button
                onClick={proceedToPayment}
                className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;