import React, { useState } from 'react';
import { treatments } from '../data/content';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const TreatmentGrid: React.FC = () => {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);
  const [showAllTreatments, setShowAllTreatments] = useState(false);

  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    return LucideIcon ? <LucideIcon size={36} className="text-emerald-700" /> : null;
  };

  const toggleTreatment = (id: string) => {
    setExpandedTreatment(expandedTreatment === id ? null : id);
  };

  const getTreatmentPath = (id: string) => {
    switch (id) {
      case 'kidney':
        return '/treatments/kidney-disease';
      case 'diabetes':
        return '/treatments/diabetes';
      case 'arthritis':
        return '/treatments/arthritis';
      default:
        return `/treatments#${id}`;
    }
  };

  // Show only 3 treatments initially, or all if showAllTreatments is true
  const displayedTreatments = showAllTreatments ? treatments : treatments.slice(0, 3);

  // Animation variants for different scroll effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const getItemVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      y: 30,
      x: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1,
        delay: index * 0.2
      }
    }
  });

  return (
    <section id="treatments" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Specialized Treatments</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of authentic Ayurvedic treatments for various chronic conditions, 
            designed to address the root cause and promote holistic healing.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedTreatments.map((treatment, index) => (
            <motion.div 
              key={treatment.id}
              variants={getItemVariants(index)}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 bg-emerald-50 rounded-lg"
                    >
                      {getIcon(treatment.icon)}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">{treatment.title}</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleTreatment(treatment.id)}
                    className="p-2 text-gray-500 hover:text-emerald-700 transition-colors"
                  >
                    {expandedTreatment === treatment.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </motion.button>
                </div>

                <p className="text-gray-600 mb-4">{treatment.description}</p>

                <AnimatePresence>
                  {expandedTreatment === treatment.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-4">
                        <div className="prose prose-emerald max-w-none">
                          <p className="text-gray-600">{treatment.detailedDescription}</p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-800">Common Symptoms:</h4>
                          <ul className="space-y-2">
                            {treatment.symptoms.map((symptom, index) => (
                              <motion.li 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start"
                              >
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                                <span className="text-gray-600">{symptom}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-800">Treatment Methods:</h4>
                          <ul className="space-y-2">
                            {treatment.methods.map((method, index) => (
                              <motion.li 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start"
                              >
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                                <span className="text-gray-600">{method}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to={getTreatmentPath(treatment.id)}
                      className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/consultation"
                      className="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium"
                    >
                      Book Consultation
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          {!showAllTreatments ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllTreatments(true)}
              className="inline-flex items-center px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg group"
            >
              View More Diseases
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/treatments"
                className="inline-flex items-center px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg group"
              >
                View All Treatments
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentGrid;