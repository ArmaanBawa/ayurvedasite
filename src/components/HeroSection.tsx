import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/ayurveda-hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover the Power of <span className="text-amber-400">Ancient Ayurveda</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-300 font-semibold mb-4">
            No Hot Potency Medicine • No Bhasma • No Heavy Metals • Zero Side Effects
          </p>
          <p className="text-lg md:text-xl text-emerald-100 mb-8">
            Experience authentic Ayurvedic treatments for chronic diseases. Our holistic approach combines 
            traditional wisdom with modern care to help you achieve optimal health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/consultation"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;