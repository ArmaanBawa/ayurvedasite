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
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Treatment not found</h1>
        <Link to="/treatments" className="text-emerald-600 hover:text-emerald-700 mt-4 inline-block">
          Back to Treatments
        </Link>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={48} className="text-emerald-700" /> : null;
  };

  return (
    <div className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/treatments"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Treatments
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-emerald-50 rounded-xl">
                  {getIcon(treatment.icon)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{treatment.title}</h1>
                  <p className="text-lg text-gray-600">{treatment.description}</p>
                </div>
              </div>

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

                  {treatment.expectedResults && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">Expected Results</h2>
                      <p className="text-gray-600 leading-relaxed">{treatment.expectedResults}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link 
                  to="/consultation"
                  className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-lg font-medium"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail; 