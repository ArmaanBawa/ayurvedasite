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
                      <p className="font-semibold text-gray-800">{doctor.qualifications.length}+ Degrees</p>
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
                      {doctor.qualifications.map((qual, index) => (
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

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                  <a 
                    href="tel:+918360986081"
                    className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
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