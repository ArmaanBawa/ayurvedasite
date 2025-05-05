import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Phone, CheckCircle2 } from 'lucide-react';

const Arthritis: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Arthritis Treatment</h1>
            <p className="text-lg text-emerald-100 mb-8">
              Natural Ayurvedic solutions for managing arthritis pain and improving joint health
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Arthritis</h2>
                <p className="text-gray-600 mb-6">
                  Arthritis is a condition characterized by joint inflammation and pain. Our Ayurvedic approach 
                  focuses on reducing inflammation, improving joint mobility, and addressing the root cause of 
                  the condition through natural methods and specialized therapies.
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
                      We begin with a thorough evaluation of your condition, including joint examination, 
                      pain assessment, and understanding your daily activities. This helps us develop a 
                      personalized treatment plan that addresses your specific needs.
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
                      Based on your assessment, we create a comprehensive treatment plan that may include 
                      herbal supplements, Panchakarma therapies, specific exercises, and dietary 
                      recommendations. Each aspect is designed to reduce inflammation and improve joint health.
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
                      We closely monitor your progress through regular check-ups and adjust the treatment 
                      plan as needed. This ensures that you receive the most effective care for your 
                      condition.
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

export default Arthritis; 