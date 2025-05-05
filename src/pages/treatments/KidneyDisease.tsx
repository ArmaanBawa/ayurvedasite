import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Phone, CheckCircle2 } from 'lucide-react';

const KidneyDisease: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kidney Disease Treatment</h1>
            <p className="text-lg text-emerald-100 mb-8">
              Comprehensive Ayurvedic care for kidney health and chronic kidney disease management
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Kidney Disease</h2>
                <p className="text-gray-600 mb-6">
                  Kidney disease affects the body's ability to filter waste and excess fluids from the blood. 
                  Our Ayurvedic approach focuses on supporting kidney function, reducing inflammation, and 
                  promoting natural detoxification through traditional methods and herbal formulations.
                </p>
              </div>
            </div>

            {/* Treatment Process */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Treatment Process</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">
                      We begin with a thorough evaluation of your condition, including your dosha constitution, 
                      current health status, and medical history. This helps us understand the root cause of 
                      your kidney issues and develop a personalized treatment plan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Personalized Treatment Plan</h3>
                    <p className="text-gray-600">
                      Based on your assessment, we create a customized treatment plan that may include herbal 
                      formulations, dietary modifications, lifestyle changes, and Panchakarma therapies. Each 
                      aspect of the plan is designed to support kidney function and overall health.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Regular Monitoring</h3>
                    <p className="text-gray-600">
                      Throughout your treatment, we closely monitor your progress and make necessary 
                      adjustments to ensure optimal results. Regular check-ups help us track improvements 
                      and address any concerns promptly.
                    </p>
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

export default KidneyDisease; 