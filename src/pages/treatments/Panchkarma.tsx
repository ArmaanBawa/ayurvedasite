import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Panchkarma: React.FC = () => {
  const panchkarmaTherapies = [
    {
      id: 1,
      name: "Vamana (Therapeutic Vomiting)",
      description: "A cleansing therapy that eliminates excess Kapha dosha through induced vomiting. It's particularly effective for respiratory disorders, skin diseases, and diabetes."
    },
    {
      id: 2,
      name: "Virechana (Purgation Therapy)",
      description: "A cleansing therapy that eliminates excess Pitta dosha through induced purgation. It's beneficial for skin disorders, digestive issues, and liver problems."
    },
    {
      id: 3,
      name: "Basti (Medicated Enema)",
      description: "The most important Panchkarma therapy that eliminates excess Vata dosha. It's highly effective for neurological disorders, arthritis, and chronic constipation."
    },
    {
      id: 4,
      name: "Nasya (Nasal Administration)",
      description: "A therapy that administers medicated oils through the nasal passages. It's effective for sinusitis, migraines, and neurological disorders."
    },
    {
      id: 5,
      name: "Raktamokshana (Blood Letting)",
      description: "A specialized therapy that purifies the blood. It's beneficial for skin disorders, gout, and certain inflammatory conditions."
    }
  ];

  return (
    <>
      <Helmet>
        <head></head>
        <title>Panchkarma Treatment | Ayuva Ayurveda</title>
        <meta name="description" content="Experience the ancient Ayurvedic detoxification and rejuvenation therapies with Panchkarma at Ayuva Ayurveda." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Panchkarma Treatment</h1>
              <p className="text-lg text-emerald-100 mb-8">
                Experience the ancient Ayurvedic detoxification and rejuvenation therapies
              </p>
            </div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Panchkarma</h2>
                <p className="text-gray-600 mb-6">
                  Panchkarma is a comprehensive system of Ayurvedic detoxification and rejuvenation therapies. 
                  These five therapeutic procedures help eliminate toxins from the body and restore balance to 
                  the doshas (Vata, Pitta, and Kapha). Each therapy is carefully selected based on your 
                  individual constitution and health needs.
                </p>
              </div>

              {/* Therapies */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Panchkarma Therapies</h2>
                <div className="space-y-8">
                  {panchkarmaTherapies.map((therapy) => (
                    <div key={therapy.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{therapy.name}</h3>
                      <p className="text-gray-600">{therapy.description}</p>
                    </div>
                  ))}
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

export default Panchkarma; 