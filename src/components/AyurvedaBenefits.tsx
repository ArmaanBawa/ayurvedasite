import React from 'react';
import { Leaf, Heart, Brain, Clock } from 'lucide-react';

const AyurvedaBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Natural Healing",
      description: "Experience the power of natural herbs and traditional remedies that have been used for centuries.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60"
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Holistic Wellness",
      description: "Our treatments address the mind, body, and spirit for complete well-being.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60"
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-600" />,
      title: "Preventive Care",
      description: "Focus on preventing illness before it occurs through balanced living and natural practices.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60"
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Time-Tested Methods",
      description: "Benefit from ancient wisdom that has been refined over thousands of years.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The Power of Ayurveda</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the ancient wisdom of Ayurveda and how it can transform your health and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-emerald-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="bg-white/90 p-2 rounded-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AyurvedaBenefits; 