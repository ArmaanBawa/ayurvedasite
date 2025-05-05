import React from 'react';
import { Heart, Clock, Leaf, Brain, ArrowRight } from 'lucide-react';

const Hypertension: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-emerald-900">
        <div className="absolute inset-0 bg-[url('/images/hypertension-treatment.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayurvedic Treatment for Hypertension</h1>
            <p className="text-lg md:text-xl mb-8">Discover natural and effective ways to manage high blood pressure through ancient Ayurvedic wisdom</p>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Hypertension</h2>
              <p className="text-gray-600 mb-6">
                Hypertension, or high blood pressure, is a common condition where the long-term force of blood against artery walls is high enough to cause health problems. Ayurveda views hypertension as an imbalance in the body's doshas, particularly Vata and Pitta.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Causes in Ayurveda</h3>
                    <p className="text-gray-600">Stress, improper diet, lack of exercise, and lifestyle factors that aggravate Vata and Pitta doshas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Brain className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Symptoms</h3>
                    <p className="text-gray-600">Headaches, dizziness, chest pain, difficulty breathing, and in severe cases, vision problems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="/images/hypertension-herbs.jpg" 
                alt="Ayurvedic herbs for hypertension"
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
              <p className="text-gray-600">Comprehensive evaluation of your condition, including pulse diagnosis and dosha analysis</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Treatment</h3>
              <p className="text-gray-600">Customized herbal formulations and lifestyle modifications based on your body constitution</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Regular Monitoring</h3>
              <p className="text-gray-600">Continuous tracking of blood pressure and adjustment of treatment as needed</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifestyle Guidance</h3>
              <p className="text-gray-600">Comprehensive advice on diet, exercise, and stress management techniques</p>
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
                <li>• Arjuna Ksheerpak - Milk decoction with Arjuna bark</li>
                <li>• Sarpagandha formulations for blood pressure control</li>
                <li>• Brahmi and Ashwagandha for stress management</li>
                <li>• Customized herbal combinations based on dosha balance</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Panchakarma Therapies</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Shirodhara - Oil pouring therapy for stress relief</li>
                <li>• Abhyanga - Full body massage with medicated oils</li>
                <li>• Nasya - Nasal administration of herbal oils</li>
                <li>• Basti - Medicated enema for Vata balance</li>
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
                <li>• Reduce salt intake</li>
                <li>• Include potassium-rich foods</li>
                <li>• Avoid processed foods</li>
                <li>• Regular meal timings</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exercise & Yoga</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Regular walking</li>
                <li>• Pranayama breathing</li>
                <li>• Gentle yoga asanas</li>
                <li>• Meditation practice</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Routine</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Early morning wake-up</li>
                <li>• Regular sleep schedule</li>
                <li>• Stress management</li>
                <li>• Avoid late-night activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Journey to Better Health</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards managing your hypertension naturally with our expert Ayurvedic treatments
          </p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors text-lg">
            Book Your Consultation Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hypertension; 