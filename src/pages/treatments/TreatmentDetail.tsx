import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { treatments } from '../../data/content';

const TreatmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const treatment = treatments.find(t => t.id === id);

  if (!treatment) {
    return (
      <div className="min-h-screen bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Treatment Not Found</h1>
            <Link
              to="/treatments"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Treatments
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{treatment.title}</h1>
            <p className="text-lg text-emerald-100 mb-8">{treatment.description}</p>
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Symptoms */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Symptoms</h2>
              <ul className="space-y-3">
                {treatment.symptoms.map((symptom, index) => (
                  <li key={index} className="text-gray-600">• {symptom}</li>
                ))}
              </ul>
            </div>

            {/* Causes */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Causes</h2>
              <ul className="space-y-3">
                {treatment.causes.map((cause, index) => (
                  <li key={index} className="text-gray-600">• {cause}</li>
                ))}
              </ul>
            </div>

            {/* Treatment Methods */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Treatment Methods</h2>
              <ul className="space-y-3">
                {treatment.treatmentMethods.map((method, index) => (
                  <li key={index} className="text-gray-600">• {method}</li>
                ))}
              </ul>
            </div>

            {/* Prevention */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Prevention Tips</h2>
              <ul className="space-y-3">
                {treatment.prevention.map((tip, index) => (
                  <li key={index} className="text-gray-600">• {tip}</li>
                ))}
              </ul>
            </div>

            {/* Expected Results */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Expected Results</h2>
              <p className="text-gray-600 mb-4">{treatment.expectedResults}</p>
              <p className="text-gray-600">Timeline: {treatment.timeline}</p>
            </div>

            {/* Ayurvedic Perspective */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Ayurvedic Perspective</h2>
              <p className="text-gray-600">{treatment.ayurvedicPerspective}</p>
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
  );
};

export default TreatmentDetail; 