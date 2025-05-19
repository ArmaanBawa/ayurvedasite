import React from 'react';

interface Treatment {
  id: string;
  name: string;
  description: string;
}

const treatments: Treatment[] = [
  {
    id: 'kidney',
    name: 'Kidney Disease',
    description: 'Natural Ayurvedic treatment for kidney disorders and renal health management.'
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    description: 'Holistic approach to manage and control diabetes through Ayurvedic principles.'
  },
  {
    id: 'arthritis',
    name: 'Arthritis',
    description: 'Effective treatment for joint pain and inflammation using traditional Ayurvedic methods.'
  },
  {
    id: 'hepatitis',
    name: 'Hepatitis',
    description: 'Natural healing solutions for liver disorders and hepatitis management.'
  },
  {
    id: 'autism',
    name: 'Autism',
    description: 'Specialized Ayurvedic care and support for autism spectrum disorders.'
  },
  {
    id: 'migraine',
    name: 'Migraine',
    description: 'Natural relief from chronic headaches and migraine through Ayurvedic treatments.'
  },
  {
    id: 'paralysis',
    name: 'Paralysis',
    description: 'Comprehensive rehabilitation and treatment for paralysis patients.'
  },
  {
    id: 'obesity',
    name: 'Obesity',
    description: 'Natural weight management and body balance through Ayurvedic lifestyle.'
  }
];

const Treatments: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore Our Treatments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {treatment.name}
              </h3>
              <p className="text-gray-600">
                {treatment.description}
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments; 