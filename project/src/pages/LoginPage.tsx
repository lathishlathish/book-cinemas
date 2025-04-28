import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract redirect URL from query params if it exists
  const queryParams = new URLSearchParams(location.search);
  const redirectUrl = queryParams.get('redirect') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      let success;
      
      if (isLogin) {
        // Handle login
        success = await login(email, password);
        if (success) {
          navigate(redirectUrl);
        } else {
          setError('Invalid email or password');
        }
      } else {
        // Handle registration
        if (!name) {
          setError('Name is required');
          return;
        }
        
        success = await register(name, email, password, phone);
        if (success) {
          navigate(redirectUrl);
        } else {
          setError('Registration failed. Please try again.');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 py-4 px-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <Link to="/" className="text-gray-400 hover:text-white">
                ✕
              </Link>
            </div>
          </div>
          
          {/* Form */}
          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your name"
                  />
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              )}
              
              {isLogin && (
                <div className="mb-6 text-right">
                  <a href="#" className="text-red-600 hover:text-red-800 text-sm">
                    Forgot Password?
                  </a>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>
            
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="px-4 text-gray-500 text-sm">OR</div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-lg">🔵</span>
                <span className="text-sm">Facebook</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-lg">🔴</span>
                <span className="text-sm">Google</span>
              </button>
            </div>
            
            {/* Toggle Registration/Login */}
            <div className="text-center text-gray-600">
              {isLogin ? (
                <p>
                  New to CinemaBook?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Create an account
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </div>
          
          {/* Terms */}
          <div className="px-6 pb-6 pt-2 text-xs text-gray-500 text-center">
            By continuing, you agree to CinemaBook's{' '}
            <a href="#" className="text-red-600 hover:underline">Terms of Use</a>{' '}
            and{' '}
            <a href="#" className="text-red-600 hover:underline">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;