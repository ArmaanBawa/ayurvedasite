import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ClinicMap: React.FC = () => {
  const clinic1Location = {
    address: "13-B, Lane No. 2/3, Kashmir Avenue, Batala Road, Amritsar",
    coordinates: "31.6340,74.8723" // Amritsar coordinates
  };

  const clinic2Location = {
    address: "1109 Lane No. 8 (Left), RB Estate, Loharka Road, Amritsar",
    coordinates: "31.6340,74.8723" // Amritsar coordinates
  };

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Clinics</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us at our conveniently located clinics in Amritsar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0!2d74.8723!3d31.6340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzAyLjQiTiA3NMKwNTInMjAuMyJF!5e0!3m2!1sen!2sin!4v1647881234567!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ayurveda Clinic Location"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Clinic 1</h4>
                  <p className="text-gray-600">
                    {clinic1Location.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${clinic1Location.coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 text-sm mt-2 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Clinic 2</h4>
                  <p className="text-gray-600">
                    {clinic2Location.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${clinic2Location.coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 text-sm mt-2 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="text-gray-600">
                <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                <a href="tel:+918360986081" className="block text-emerald-600 hover:text-emerald-700">Call Now: +91 83609 86081</a>
                <a href="tel:+917888579180" className="block text-emerald-600 hover:text-emerald-700">Call Now: +91 78885 79180</a>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">arjunbawa2222@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <Clock className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicMap; 