import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Phone, Clock, CheckCircle2 } from 'lucide-react';

const Diabetes: React.FC = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("/images/diabetes-treatment.jpg")',
          }}
        ></div>
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/consultation"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Link>
              <a 
                href="tel:+917888579180"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Overview with Image */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Diabetes</h2>
                  <p className="text-gray-600 mb-6">
                    Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). 
                    Our Ayurvedic approach to diabetes treatment focuses on balancing the body's natural systems 
                    and improving insulin sensitivity through natural methods. We believe in treating the root 
                    cause of diabetes while managing symptoms effectively.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/diabetes-herbs.jpg" 
                    alt="Ayurvedic herbs for diabetes management" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Symptoms</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Increased thirst and urination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Unexplained weight loss</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Fatigue and weakness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Blurred vision</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Slow-healing wounds</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Treatment Methods</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Herbal supplements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Dietary management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Yoga and exercise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Stress management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Lifestyle modifications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Treatment Process with Images */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Treatment Process</h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/diabetes-assessment.jpg" 
                      alt="Comprehensive Assessment" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
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
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/diabetes-plan.jpg" 
                      alt="Customized Treatment Plan" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
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
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/diabetes-monitoring.jpg" 
                      alt="Regular Monitoring" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
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

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/diabetes-support.jpg" 
                      alt="Long-term Support" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Long-term Support</h3>
                        <p className="text-gray-600">
                          We provide ongoing support and education to help you maintain healthy blood sugar 
                          levels and prevent complications. Our goal is to empower you with the knowledge and 
                          tools needed for long-term diabetes management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Treatment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Natural Approach</h3>
                    <p className="text-gray-600">
                      Our treatments use natural herbs and therapies that work with your body's natural 
                      healing processes, minimizing side effects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Holistic Care</h3>
                    <p className="text-gray-600">
                      We address all aspects of your health, including physical, mental, and emotional 
                      well-being.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">
                      Our experienced practitioners combine traditional Ayurvedic wisdom with modern 
                      medical understanding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Personalized Care</h3>
                    <p className="text-gray-600">
                      Each treatment plan is customized to your unique needs and health goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="bg-emerald-800 rounded-xl shadow-md p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Take Control of Your Diabetes?</h2>
              <p className="text-emerald-100 mb-6">
                Book a consultation with our expert Ayurvedic practitioners today and start your journey 
                towards better diabetes management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/consultation"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
                <a 
                  href="tel:+917888579180"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diabetes; 