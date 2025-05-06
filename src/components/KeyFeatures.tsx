import React from 'react';
import { Leaf, Shield, Heart, Sparkles } from 'lucide-react';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-emerald-600" />,
      title: "Pure Herbal Medicine",
      description: "Concentrated extracts from carefully selected herbs and plants for maximum effectiveness"
    },
    {
      icon: <Shield className="w-12 h-12 text-emerald-600" />,
      title: "No Bhasma",
      description: "Completely free from calcined metal/mineral preparations for your safety"
    },
    {
      icon: <Heart className="w-12 h-12 text-emerald-600" />,
      title: "No Hot Potency",
      description: "Gentle and balanced formulations without any hot potency medicines"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-emerald-600" />,
      title: "Zero Side Effects",
      description: "Safe and natural treatments designed to promote healing without adverse effects"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose Our Ayurvedic Treatments?
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Experience the safest and most effective Ayurvedic treatments, carefully formulated for your well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures; 