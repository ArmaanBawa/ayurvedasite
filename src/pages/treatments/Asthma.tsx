import React from 'react';
import { Wind, Clock, Leaf, Brain, ArrowRight } from 'lucide-react';

const Asthma: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-emerald-900">
        <div className="absolute inset-0 bg-[url('/images/asthma-treatment.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayurvedic Treatment for Asthma</h1>
            <p className="text-lg md:text-xl mb-8">Experience natural relief from asthma through traditional Ayurvedic treatments</p>
            <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2">
              Book Consultation <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Asthma</h2>
              <p className="text-gray-600 mb-6">
                Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways. In Ayurveda, asthma is known as "Tamaka Shwasa" and is primarily related to an imbalance in Kapha and Vata doshas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Wind className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Causes in Ayurveda</h3>
                    <p className="text-gray-600">Poor diet, environmental factors, stress, and weakened immune system leading to dosha imbalance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Symptoms</h3>
                    <p className="text-gray-600">Wheezing, shortness of breath, chest tightness, coughing, especially at night or early morning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="/images/asthma-herbs.jpg" 
                alt="Ayurvedic herbs for asthma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Treatment Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Initial Assessment</h3>
              <p className="text-gray-600">Detailed evaluation of your condition, including pulse diagnosis and respiratory function tests</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Treatment</h3>
              <p className="text-gray-600">Customized herbal formulations and breathing exercises based on your condition</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Regular Monitoring</h3>
              <p className="text-gray-600">Continuous assessment of respiratory function and treatment adjustments</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifestyle Guidance</h3>
              <p className="text-gray-600">Comprehensive advice on diet, exercise, and environmental modifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Treatment Methods</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Herbal Treatments</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Vasaka (Adhatoda vasica) formulations</li>
                <li>• Tulsi (Holy Basil) preparations</li>
                <li>• Yashtimadhu (Licorice) combinations</li>
                <li>• Customized herbal combinations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Panchakarma Therapies</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Vamana - Therapeutic vomiting</li>
                <li>• Nasya - Nasal administration</li>
                <li>• Uro Vasti - Chest therapy</li>
                <li>• Swedana - Herbal steam therapy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Recommendations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Lifestyle Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Dietary Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Warm, easily digestible foods</li>
                <li>• Avoid cold and heavy foods</li>
                <li>• Include honey and ginger</li>
                <li>• Stay hydrated with warm water</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Breathing Exercises</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pranayama techniques</li>
                <li>• Kapalbhati</li>
                <li>• Anulom Vilom</li>
                <li>• Bhramari pranayama</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Environmental Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Avoid dust and allergens</li>
                <li>• Maintain clean living space</li>
                <li>• Use air purifiers</li>
                <li>• Avoid cold exposure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Breathe Easier with Ayurveda</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards better respiratory health with our expert Ayurvedic treatments
          </p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors text-lg">
            Book Your Consultation Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Asthma; 