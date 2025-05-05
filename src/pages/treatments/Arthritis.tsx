import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Phone, CheckCircle2 } from 'lucide-react';

const Arthritis: React.FC = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("/images/arthritis-treatment.jpg")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Arthritis Treatment</h1>
            <p className="text-lg text-emerald-100 mb-8">
              Natural Ayurvedic solutions for managing arthritis pain and improving joint health
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Arthritis</h2>
                  <p className="text-gray-600 mb-6">
                    Arthritis is a condition characterized by inflammation and stiffness in the joints, leading to 
                    pain and reduced mobility. Our Ayurvedic approach to arthritis treatment focuses on reducing 
                    inflammation, improving joint function, and preventing further damage through natural methods. 
                    We believe in treating both the symptoms and the root cause of arthritis.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/arthritis-herbs.jpg" 
                    alt="Ayurvedic herbs for arthritis management" 
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
                      <span className="text-gray-600">Joint pain and stiffness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Swelling and tenderness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Reduced range of motion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Morning stiffness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Fatigue and weakness</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Treatment Methods</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Herbal remedies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Panchakarma therapies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Yoga and exercise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Dietary modifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Lifestyle changes</span>
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
                      src="/images/arthritis-assessment.jpg" 
                      alt="Initial Assessment" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
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
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/arthritis-plan.jpg" 
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
                          Based on your assessment, we create a comprehensive treatment plan that may include 
                          herbal supplements, Panchakarma therapies, specific exercises, and dietary 
                          recommendations. Each aspect is designed to reduce inflammation and improve joint health.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/arthritis-monitoring.jpg" 
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
                          We closely monitor your progress through regular check-ups and adjust the treatment 
                          plan as needed. This ensures that you receive the most effective care for your 
                          condition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/arthritis-support.jpg" 
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
                          We provide ongoing support and education to help you manage arthritis symptoms and 
                          prevent flare-ups. Our goal is to empower you with the knowledge and tools needed 
                          for long-term joint health.
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
              <h2 className="text-2xl font-bold mb-4">Ready to Find Relief from Arthritis?</h2>
              <p className="text-emerald-100 mb-6">
                Book a consultation with our expert Ayurvedic practitioners today and start your journey 
                towards better joint health.
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

export default Arthritis; 