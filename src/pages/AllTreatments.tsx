import React from 'react';
import { Link } from 'react-router-dom';
import { treatments } from '../data/content';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const AllTreatments: React.FC = () => {
  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={36} className="text-emerald-700" /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/treatments"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Specialized Treatments
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              All Available Treatments
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Browse our complete collection of Ayurvedic treatments, each designed to address 
              specific health concerns through natural healing methods.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8"
          >
            {treatments.map((treatment) => (
              <motion.div
                key={treatment.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Link 
                  to={`/treatments/${treatment.id}`}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="p-4 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors duration-300">
                          {getIcon(treatment.icon)}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                            {treatment.title}
                          </h2>
                          <p className="text-gray-600 text-lg">{treatment.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-emerald-700 group-hover:text-emerald-800 transition-colors duration-300">
                        <span className="mr-2 font-medium text-lg">Learn More</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/consultation"
              className="inline-flex items-center px-10 py-5 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AllTreatments; 