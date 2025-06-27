import React from 'react';
import { doctorInfo } from '../data/content';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <head></head>
        <title>About | Ayuva Ayurveda</title>
        <meta name="description" content="Learn about Ayuva Ayurveda, our mission, expertise, and our experienced Ayurvedic physician." />
      </Helmet>
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

              <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Meet Our Expert</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                      <img 
                        src={doctorInfo.aboutImage} 
                        alt={doctorInfo.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold text-sm">Expert Physician</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-1">{doctorInfo.name}</h3>
                      <p className="text-lg text-amber-600 font-medium mb-2">{doctorInfo.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{doctorInfo.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-emerald-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500 mb-0.5">Experience</p>
                        <p className="text-base font-semibold text-emerald-800">{doctorInfo.experience}</p>
                      </div>
                      <div className="bg-emerald-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500 mb-0.5">Qualifications</p>
                        <p className="text-base font-semibold text-emerald-800">{doctorInfo.qualifications.join(', ')}</p>
                      </div>
                    </div>

                    <div className="bg-emerald-50 p-3 rounded-xl">
                      <h4 className="text-lg font-bold text-emerald-800 mb-2">Specialties</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {doctorInfo.specialties.map((specialty, index) => (
                          <div key={index} className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <a 
                        href="tel:+918360986081" 
                        className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                      >
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Book Consultation
                      </a>
                      <a 
                        href="https://wa.me/918360986081" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                      >
                        <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp Us
                      </a>
                    </div>
                    <div className="text-xs text-gray-500 text-center">Online Consultations Available | For Treatment Seekers Only</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4 text-center">Why Choose Dr. Arjun Bawa?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Successfully reversed many patients from diabetes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Saved many patients from liver transplant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Expert in treating chronic diseases and metabolic disorders</span>
                      </li>
                    </ul>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-semibold text-amber-800 mb-2">For Diabetes:</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></div>
                          <span className="text-gray-700">Diabetic Neuropathy, Retinopathy, Kidney & Liver Damage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></div>
                          <span className="text-gray-700">Cardiovascular disease, Diabetic Foot Ulcers/Gangrene</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-semibold text-amber-800 mb-2">For Liver Diseases:</h5>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></div>
                          <span className="text-gray-700">Cirrhosis, Fibrosis, Ascitis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></div>
                          <span className="text-gray-700">3rd grade Hemorrhoids/Bleeding Piles</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-semibold text-emerald-800 mb-2">Treatment Highlights</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">Results in just 20-21 days by working on the reason behind the disease</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">Several patients are saved from operations and hard or hot potency allopathy medicines daily</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-500 to-amber-500 p-4 rounded-lg text-white shadow-sm">
                      <h5 className="font-semibold mb-2">Treatment Approach</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Pure and safest Ayurveda with concentrated parts of herbs and plants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>No bhasma or heavy metals in treatments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>No hot potency medicine used</span>
                        </li>
                      </ul>
                    </div>
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
    </>
  );
};

export default About;