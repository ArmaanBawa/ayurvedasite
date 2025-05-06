import React from 'react';
import { doctorInfo } from '../data/content';
import { Link } from 'react-router-dom';
import { DoctorInfo } from '../types';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Star, Calendar, Phone } from 'lucide-react';

const DoctorProfile: React.FC = () => {
  const doctor: DoctorInfo = doctorInfo;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced Ayurvedic physician combines traditional wisdom with modern medical understanding
            </p>
          </motion.div>

          {/* Doctor Profile Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left Column - Image and Basic Info */}
              <div className="relative">
                <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    <span className="font-semibold">Expert Physician</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-emerald-800 mb-2">{doctor.name}</h3>
                  <p className="text-xl text-amber-600 font-medium">{doctor.title}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-semibold text-gray-800">{doctor.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Qualifications</p>
                      <p className="font-semibold text-gray-800">{doctor.qualifications && doctor.qualifications.length > 0 ? doctor.qualifications.length + " Degrees" : "No qualifications"}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      Qualifications
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {doctor.qualifications && doctor.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      Specialties
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {doctor.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {doctor.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Contact Information</h4>
                  <a href="tel:+918360986081" className="block text-emerald-600 hover:text-emerald-700">Call Now: +91 83609 86081</a>
                  <a href="tel:+917888579180" className="block text-emerald-600 hover:text-emerald-700">Call Now: +91 78885 79180</a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                  <a
                    href="https://wa.me/918360986081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorProfile;