import React, { useState, useRef } from 'react';

import { Calendar, Clock, User, Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const AppointmentForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      await emailjs.sendForm(
        'service_8qg4j2p',
        'template_8qg4j2p',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you for booking an appointment. We will confirm your appointment shortly!'
      });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Sorry, there was an error booking your appointment. Please try again later.'
      });
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              placeholder="Your full name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              placeholder="Your phone number"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              placeholder="Your email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="treatment" className="block text-gray-700 font-medium mb-2">Treatment Type</label>
          <select
            id="treatment"
            name="treatment"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
          >
            <option value="">Select a treatment</option>
            <option value="kidney">Kidney Disease</option>
            <option value="liver">Liver Disease</option>
            <option value="diabetes">Diabetes</option>
            <option value="hiv">HIV/AIDS</option>
            <option value="infertility">Infertility</option>
            <option value="arthritis">Arthritis</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Preferred Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              id="date"
              name="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Preferred Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              id="time"
              name="time"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
            >
              <option value="">Select a time</option>
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
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Notes</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
          placeholder="Any specific concerns or requirements"
        ></textarea>
      </div>

      {status.message && (
        <div className={`p-4 rounded-lg mb-6 ${
          status.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {status.message}
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={status.submitting}
          className={`inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
            status.submitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status.submitting ? 'Booking...' : 'Book Appointment'}
          <Send className="w-5 h-5 ml-2" />
        </button>
      </div>
    </motion.form>
  );
};

export default AppointmentForm;