import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-amber-500 mr-2" />
              <span className="text-2xl font-bold">
                <span className="text-emerald-200">Ayu</span>
                <span className="text-amber-500">va</span>
              </span>
            </div>
            <p className="text-emerald-100 mb-4">
              Experience the ancient wisdom of Ayurveda with modern care. We provide authentic 
              treatments for chronic diseases and holistic wellness.
            </p>
            <a
              href="https://www.instagram.com/bawa_s_modernayurveda_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-100 hover:text-amber-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow us on Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-100 hover:text-amber-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-amber-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/treatments" className="text-emerald-100 hover:text-amber-500 transition-colors">Treatments</Link>
              </li>
              <li>
                <Link to="/consultation" className="text-emerald-100 hover:text-amber-500 transition-colors">Book Consultation</Link>
              </li>
              <li>
                <a
                  href="https://g.co/kgs/xYJCxkD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-100 hover:text-amber-500 transition-colors"
                >
                  View Us on Google
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Contact Us</h4>
              <a href="tel:+918360986081" className="block text-emerald-600 hover:text-emerald-700">Call Now: +91 83609 86081</a>
              <a href="tel:+917888579180" className="block text-emerald-600 hover:text-emerald-700">Call Now: +91 78885 79180</a>
              <a href="mailto:arjunbawa2222@gmail.com" className="block text-emerald-600 hover:text-emerald-700">arjunbawa2222@gmail.com</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-4">Stay Updated</h3>
            <p className="text-emerald-100 mb-4">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-emerald-800/50 border border-emerald-700 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-emerald-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 mt-12 pt-8 text-center">
          <p className="text-emerald-100">&copy; {new Date().getFullYear()} Ayuva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;