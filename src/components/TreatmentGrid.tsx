import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Treatment } from '../types';

interface TreatmentGridProps {
  treatments: Treatment[];
}

const TreatmentGrid: React.FC<TreatmentGridProps> = ({ treatments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {treatments.map((treatment) => (
        <motion.div
          key={treatment.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {treatment.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {treatment.description}
            </p>
            <Link
              to={`/treatments/${treatment.id}`}
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TreatmentGrid;