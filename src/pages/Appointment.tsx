import React from 'react';
import { motion } from 'framer-motion';
import AppointmentForm from '../components/AppointmentForm';
import { Helmet } from 'react-helmet-async';

const Appointment: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Appointment | Ayuva Ayurveda</title>
        <head></head>
        <meta name="description" content="Book your appointment with Ayuva Ayurveda's expert physicians and start your healing journey today." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Book Your Appointment</h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with our expert Ayurvedic physicians to start your healing journey.
              We'll help you find the right treatment for your health concerns.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment; 