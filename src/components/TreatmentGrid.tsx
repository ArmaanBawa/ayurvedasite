import React, { useState } from 'react';
import { treatments } from '../data/content';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const pathMap: { [key: string]: string } = {
      'kidney': '/treatments/kidney-disease',
      'diabetes': '/treatments/diabetes',
      'arthritis': '/treatments/arthritis',
      'hypertension': '/treatments/hypertension',
      'asthma': '/treatments/asthma',
      'liver': '/treatments/liver-disease',
      'hiv': '/treatments/hiv',
      'infertility': '/treatments/infertility'
    };
    return pathMap[id] || `/treatments/${id}`;
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
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={getTreatmentPath(treatment.id)} className="block p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {getIcon(treatment.icon)}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{treatment.title}</h3>
                    <p className="text-gray-600">{treatment.description}</p>
                  </div>
                </div>
              </Link>
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