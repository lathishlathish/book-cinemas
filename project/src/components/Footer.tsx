import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">CinemaBook</h3>
            <p className="text-gray-400 mb-4">
              The ultimate movie ticketing platform for Chennai, bringing you the latest movies, events, and experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Movies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cinemas</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Plays</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sports</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Activities</a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-gray-400" />
                <span className="text-gray-400">support@cinemabook.com</span>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-gray-400" />
                <span className="text-gray-400">+91 044-4000-1234</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-3">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest movies, events, and exclusive offers</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CinemaBook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;