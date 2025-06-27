import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Arthritis: React.FC = () => {
  return (
    <>
      <Helmet>
        <head></head>
        <title>Arthritis Treatment | Ayuva Ayurveda</title>
        <meta name="description" content="Natural Ayurvedic solutions for managing arthritis and improving joint health." />
      </Helmet>
      <div className="min-h-screen bg-emerald-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/treatments"
                className="inline-flex items-center text-emerald-200 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Treatments
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Arthritis Treatment</h1>
              <p className="text-lg text-emerald-100 mb-8">
                Natural Ayurvedic solutions for managing arthritis and improving joint health
              </p>
            </div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Arthritis</h2>
                <p className="text-gray-600 mb-6">
                  Arthritis is a condition characterized by inflammation and stiffness in the joints. In Ayurveda, 
                  arthritis is known as "Amavata" and is primarily related to an imbalance in Vata dosha and the 
                  accumulation of Ama (toxins) in the joints.
                </p>
              </div>

              {/* Treatment Process */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Treatment Process</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Herbal Treatment</h3>
                    <p className="text-gray-600">Natural herbs and formulations to reduce inflammation and improve joint health</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifestyle Guidance</h3>
                    <p className="text-gray-600">Comprehensive advice on diet, exercise, and daily routines</p>
                  </div>
                </div>
              </div>

              {/* Treatment Methods */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Treatment Methods</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Herbal Treatments</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Guggulu (Commiphora mukul) formulations</li>
                      <li>• Ashwagandha (Withania somnifera) preparations</li>
                      <li>• Shallaki (Boswellia serrata) combinations</li>
                      <li>• Customized herbal combinations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Panchakarma Therapies</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Abhyanga - Full body massage</li>
                      <li>• Swedana - Herbal steam therapy</li>
                      <li>• Basti - Medicated enema therapy</li>
                      <li>• Pizhichil - Oil pouring therapy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="bg-emerald-700 text-white rounded-xl shadow-md p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Start Your Treatment?</h2>
                <p className="text-emerald-100 mb-6">
                  Book a consultation with our expert Ayurvedic practitioners to begin your journey to better health.
                </p>
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Arthritis; 