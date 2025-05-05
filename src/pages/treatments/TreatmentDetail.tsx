import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { treatments } from '../../data/content';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const TreatmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const treatment = treatments.find(t => t.id === id);

  if (!treatment) {
    return (
      <div className="min-h-screen bg-emerald-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Treatment not found</h1>
          <p className="text-gray-600 mb-8">The treatment you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/treatments" 
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Treatments
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={48} className="text-emerald-700" /> : null;
  };

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
            <div className="flex items-center gap-4 mb-6">
              {getIcon(treatment.icon)}
              <h1 className="text-4xl md:text-5xl font-bold">{treatment.title}</h1>
            </div>
            <p className="text-lg text-emerald-100 mb-8">
              {treatment.description}
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">About the Treatment</h2>
                    <p className="text-gray-600 leading-relaxed">{treatment.detailedDescription}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Common Symptoms</h2>
                    <ul className="space-y-3">
                      {treatment.symptoms.map((symptom, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Causes</h2>
                    <ul className="space-y-3">
                      {treatment.causes.map((cause, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Treatment Methods</h2>
                    <ul className="space-y-3">
                      {treatment.methods.map((method, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Prevention Tips</h2>
                    <ul className="space-y-3">
                      {treatment.prevention.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Expected Results</h2>
                    <p className="text-gray-600 leading-relaxed">{treatment.expectedResults}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Ayurvedic Perspective</h2>
                    <p className="text-gray-600 leading-relaxed">{treatment.ayurvedicPerspective}</p>
                  </div>
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
  );
};

export default TreatmentDetail; 