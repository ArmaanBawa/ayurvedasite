import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const OnlineConsultation: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    condition: '',
    symptoms: '',
    duration: '',
    previousTreatments: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L1PDFD47P8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L1PDFD47P8');
            `,
          }}
        />
        <title>Online Consultation | Ayuva Ayurveda</title>
        <meta name="Book a Consultation - Ayuvacare" content="Book a consultation with Ayuvacare's expert Ayurvedic doctors for personalized treatment of liver, diabetes, piles, and more. Visit us!" />
        <meta name="google-site-verification" content="untvmc1r_mvBJOak0BUvYRW47JZ4Grx7gvC_J9R_EXM" />
      </Helmet>
      <div className="py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Online Consultation</h1>
            <div className="w-20 h-1 bg-amber-500 mb-8"></div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`flex items-center ${step >= stepNumber ? 'text-emerald-600' : 'text-gray-400'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNumber ? 'bg-emerald-600 text-white' : 'bg-gray-200'
                    }`}>
                      {stepNumber}
                    </div>
                    <span className="ml-2 font-medium">
                      {stepNumber === 1 ? 'Personal Info' : stepNumber === 2 ? 'Medical History' : 'Schedule'}
                    </span>
                    {stepNumber < 3 && <div className={`w-24 h-1 mx-4 ${step > stepNumber ? 'bg-emerald-600' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Age*</label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Gender*</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Medical Condition*</label>
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      >
                        <option value="">Select Condition</option>
                        <option value="kidney">Kidney Disease</option>
                        <option value="liver">Liver Disease</option>
                        <option value="diabetes">Diabetes</option>
                        <option value="arthritis">Arthritis</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Symptoms*</label>
                      <textarea
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Duration of Condition*</label>
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        placeholder="e.g., 6 months, 2 years"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Previous Treatments (if any)</label>
                      <textarea
                        name="previousTreatments"
                        value={formData.previousTreatments}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Preferred Date*</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Preferred Time*</label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      >
                        <option value="">Select Time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-300"
                    >
                      Previous
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300 ml-auto"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300 ml-auto"
                    >
                      Book Consultation
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consultation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Book Appointment</h3>
                  <p className="text-gray-600">Fill out the consultation form with your details and preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Confirmation</h3>
                  <p className="text-gray-600">Receive confirmation and meeting link via email</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Consultation</h3>
                  <p className="text-gray-600">Meet with our expert physician online for personalized care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineConsultation;