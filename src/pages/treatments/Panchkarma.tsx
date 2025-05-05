import React from 'react';

const Panchkarma: React.FC = () => {
  const panchkarmaTherapies = [
    {
      id: 1,
      name: "Vamana (Therapeutic Vomiting)",
      description: "A cleansing therapy that eliminates excess Kapha dosha through induced vomiting. It's particularly effective for respiratory disorders, skin diseases, and diabetes.",
      image: "/images/ayurveda/panchkarma/vamana.jpg"
    },
    {
      id: 2,
      name: "Virechana (Purgation Therapy)",
      description: "A cleansing therapy that eliminates excess Pitta dosha through induced purgation. It's beneficial for skin disorders, digestive issues, and liver problems.",
      image: "/images/ayurveda/panchkarma/virechana.jpg"
    },
    {
      id: 3,
      name: "Basti (Medicated Enema)",
      description: "The most important Panchkarma therapy that eliminates excess Vata dosha. It's highly effective for neurological disorders, arthritis, and chronic constipation.",
      image: "/images/ayurveda/panchkarma/basti.jpg"
    },
    {
      id: 4,
      name: "Nasya (Nasal Administration)",
      description: "A therapy that administers medicated oils through the nasal passages. It's effective for sinusitis, migraines, and neurological disorders.",
      image: "/images/ayurveda/panchkarma/nasya.jpg"
    },
    {
      id: 5,
      name: "Raktamokshana (Blood Letting)",
      description: "A specialized therapy that purifies the blood. It's beneficial for skin disorders, gout, and certain inflammatory conditions.",
      image: "/images/ayurveda/panchkarma/raktamokshana.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Panchkarma Therapy</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the ancient Ayurvedic purification and rejuvenation therapies
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {panchkarmaTherapies.map((therapy) => (
            <div key={therapy.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-32 w-32 object-cover rounded-lg"
                    src={therapy.image}
                    alt={therapy.name}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {therapy.name}
                  </h2>
                  <p className="text-gray-600">{therapy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Benefits of Panchkarma
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Deep cleansing and detoxification of the body</li>
            <li>Restoration of natural balance and harmony</li>
            <li>Enhanced immunity and vitality</li>
            <li>Improved mental clarity and emotional well-being</li>
            <li>Prevention of diseases and promotion of longevity</li>
          </ul>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Consultation and Treatment
          </h2>
          <p className="text-gray-600 mb-4">
            Panchkarma therapy should be administered under the supervision of qualified Ayurvedic practitioners. 
            The treatment is customized based on individual constitution and health conditions.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panchkarma; 