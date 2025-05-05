import React from 'react';
import { doctorInfo } from '../data/content';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Ayuva</h1>
          <div className="w-20 h-1 bg-amber-500 mb-8"></div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Ayuva is a premier Ayurvedic healthcare center dedicated to providing authentic and effective treatments for chronic diseases. Our approach combines ancient Ayurvedic wisdom with modern medical understanding to deliver comprehensive care.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide authentic Ayurvedic treatments that address the root cause of chronic diseases while promoting overall wellness and longevity. We strive to make traditional healing accessible to everyone through personalized care and modern convenience.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Expertise</h2>
            <div className="mb-6">
              <p className="mb-2 text-lg">
                <span className="font-bold text-emerald-700">Pure and safest Ayurveda</span> with <span className="font-bold text-amber-600">concentrated parts of herbs and plants</span>.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><span className="font-semibold text-emerald-700">No bhasma:</span> We do not use any bhasma (calcined metal/mineral preparations) in our treatments, ensuring purity and safety for all patients.</li>
                <li><span className="font-semibold text-emerald-700">No heavy metals:</span> Our medicines are completely free from heavy metals, making them safe for long-term and regular use.</li>
                <li><span className="font-semibold text-emerald-700">No hot potency medicine:</span> We avoid hot potency (ushna veerya) medicines that may cause discomfort or side effects, focusing on gentle and balanced formulations.</li>
                <li><span className="font-semibold text-emerald-700">No side effects:</span> Our treatments are gentle, natural, and designed to promote healing without any adverse effects.</li>
              </ul>
            </div>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Specialized treatments for chronic conditions</li>
              <li>Personalized treatment plans</li>
              <li>Integration of modern diagnostics</li>
              <li>Research-backed herbal formulations</li>
              <li>Experienced Ayurvedic physicians</li>
            </ul>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Expert</h2>
              <div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">{doctorInfo.name}</h3>
                <p className="text-amber-600 mb-4">{doctorInfo.title}</p>
                <p className="text-gray-600 mb-4">{doctorInfo.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600"><span className="font-semibold">Experience:</span> {doctorInfo.experience}</p>
                    <p className="text-gray-600"><span className="font-semibold">Qualifications:</span> {doctorInfo.qualifications.join(', ')}</p>
                  </div>
                  <div>
                    <p className="text-gray-600"><span className="font-semibold">Specialties:</span> {doctorInfo.specialties.join(', ')}</p>
                  </div>
                </div>
                <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-xl shadow">
                  <h4 className="text-lg font-bold text-emerald-800 mb-2">Why Choose Dr. Arjun Bawa?</h4>
                  <ul className="list-disc ml-6 text-gray-700 mb-2">
                    <li>Successfully reversed many patients from diabetes</li>
                    <li>Saved many patients from liver transplant</li>
                    <li>Expert in treating chronic diseases and metabolic disorders</li>
                  </ul>
                  <div className="mb-2">
                    <span className="font-semibold">For Diabetes:</span>
                    <ul className="list-disc ml-6">
                      <li>Diabetic Neuropathy, Retinopathy, Kidney &amp; Liver Damage</li>
                      <li>Cardiovascular disease, Diabetic Foot Ulcers/Gangrene</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">For Liver Diseases:</span>
                    <ul className="list-disc ml-6">
                      <li>Cirrhosis, Fibrosis, Ascitis</li>
                      <li>3rd grade Hemorrhoids/Bleeding Piles</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-1">
                    <span className="font-semibold">Results in just 20-21 days</span> by working on the reason behind the disease.
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-semibold">Several patients are saved</span> from operations and hard or hot potency allopathy medicines daily.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <a href="tel:+918360986081" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">Book Now: +91 83609 86081</a>
                    <a href="https://wa.me/918360986081" className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.27 1.38 1.4-4.16-.25-.4A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9.86.16.18.32.2.6.07.28-.14 1.18-.44 2.25-1.4.83-.74 1.39-1.65 1.55-1.93.16-.28.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
                      Send Message
                    </a>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">Online Consultations Available | For Treatment Seekers Only</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Treatment Rooms</h3>
                <p className="text-gray-600">Modern, hygienic treatment rooms equipped with traditional Ayurvedic therapy equipment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Consultation Areas</h3>
                <p className="text-gray-600">Private consultation rooms for detailed patient discussions and examinations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Medicine Unit</h3>
                <p className="text-gray-600">In-house preparation of authentic Ayurvedic medicines and formulations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Research Center</h3>
                <p className="text-gray-600">Dedicated facility for research and development of treatment protocols.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://g.co/kgs/xYJCxkD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
            >
              View Us on Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;