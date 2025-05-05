import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../data/content';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="text-emerald-800 mr-2 group-hover:scale-110 transition-transform duration-300">
              <Leaf size={32} />
            </div>
            <div className="font-bold text-2xl tracking-tight">
              <span className="text-emerald-800">Ayu</span>
              <span className="text-amber-500">va</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.href}
                className={`font-medium transition-colors relative group ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.title}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
            <Link 
              to="/consultation"
              className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300"
            >
              <Phone size={18} />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg animate-fadeIn">
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.id} 
                  to={item.href}
                  className={`block py-3 px-4 text-gray-700 font-medium hover:text-emerald-800 transition-colors rounded-lg hover:bg-gray-50 ${
                    isActive(item.href) ? 'text-emerald-800 bg-gray-50' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link 
                to="/consultation"
                className="flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;