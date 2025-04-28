import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import BookingPage from './pages/BookingPage';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:id" element={<MovieDetailsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/booking/:id" element={<BookingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;