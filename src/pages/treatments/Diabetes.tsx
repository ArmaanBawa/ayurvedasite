import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Phone, CheckCircle2 } from 'lucide-react';

const Diabetes: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Diabetes Treatment</h1>
            <p className="text-lg text-emerald-100 mb-8">
              Natural Ayurvedic solutions for managing diabetes and improving overall health
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Diabetes</h2>
                <p className="text-gray-600 mb-6">
                  Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). 
                  Our Ayurvedic approach to diabetes treatment focuses on balancing the body's natural systems 
                  and improving insulin sensitivity through natural methods. We believe in treating the root 
                  cause of diabetes while managing symptoms effectively.
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
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Assessment</h3>
                    <p className="text-gray-600">
                      We begin with a detailed evaluation of your condition, including blood sugar levels, 
                      lifestyle factors, and overall health status. This helps us understand your unique 
                      needs and develop a personalized treatment plan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Customized Treatment Plan</h3>
                    <p className="text-gray-600">
                      Based on your assessment, we create a tailored treatment plan that may include herbal 
                      supplements, dietary recommendations, exercise routines, and stress management 
                      techniques. Each aspect is designed to help manage diabetes naturally.
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
                      We closely monitor your progress through regular check-ups and blood sugar tracking. 
                      This helps us make necessary adjustments to your treatment plan and ensure optimal 
                      results.
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

export default Diabetes; 