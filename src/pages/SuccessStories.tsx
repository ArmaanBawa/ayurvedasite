import React from 'react';
import { testimonials } from '../data/content';
import { Star, Quote, Award, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const SuccessStories: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={`${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
      />
    ));
  };

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
        <title>Success Stories | Ayuva Ayurveda</title>
        <meta name="Success Stories - Ayuvacare" content="Explore Ayuvacare’s success stories and see how our expert Ayurvedic treatments have transformed lives with lasting relief from chronic health issues." />
        <meta name="google-site-verification" content="untvmc1r_mvBJOak0BUvYRW47JZ4Grx7gvC_J9R_EXM" />
      </Helmet>
      <div className="py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Success Stories</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Real experiences from our patients who have found healing and hope through Ayurvedic treatment
            </p>
          </motion.div>

          {/* Featured Success Stories */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-24"
          >
            <div className="flex items-center justify-center mb-12">
              <Award className="w-8 h-8 text-amber-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Featured Success Stories</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-emerald-100 transform hover:-translate-y-1"
                >
                  <div className="flex gap-2 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <Quote className="w-8 h-8 text-emerald-600 mb-4" />
                  
                  <blockquote className="text-xl italic text-gray-600 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-lg text-gray-800">{testimonial.name}</p>
                      <p className="text-emerald-600">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Online Reviews Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24"
          >
            <div className="flex items-center justify-center mb-12">
              <MessageCircle className="w-8 h-8 text-amber-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">What Our Patients Say Online</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Review Card 1 */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-amber-500 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-lg font-bold text-white mr-3">
                    MM
                  </div>
                  <div>
                    <span className="font-bold text-lg text-emerald-800">Minal Mahajan</span>
                    <div className="text-yellow-500">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"I had lost all hope when my kidney function worsened. Allopathy suggested lifelong dialysis. <span className='font-semibold text-emerald-700'>Dr. Arjun Bawa</span> treated me patiently with Ayurvedic herbs and lifestyle advice. My creatinine came down from 11.6 to 2.4. Truly grateful."</p>
              </motion.div>

              {/* Review Card 2 */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-amber-500 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-lg font-bold text-white mr-3">
                    KM
                  </div>
                  <div>
                    <span className="font-bold text-lg text-emerald-800">Kamakshi Mhjn</span>
                    <div className="text-yellow-500">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"When AIIMS specialist said that I had to transplant liver, <span className='font-semibold text-emerald-700'>Dr. Bawa</span> saved my life with his treatment and guidance, I recovered without surgery. Forever grateful."</p>
              </motion.div>

              {/* Review Card 3 */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-amber-500 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-lg font-bold text-white mr-3">
                    DK
                  </div>
                  <div>
                    <span className="font-bold text-lg text-emerald-800">Deepak Kumar</span>
                    <div className="text-yellow-500">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"The date for the cancer operation had been fixed, but the doctor's treatment changed everything. Now I am completely healthy."</p>
              </motion.div>

              {/* Review Card 4 */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-amber-500 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-lg font-bold text-white mr-3">
                    VM
                  </div>
                  <div>
                    <span className="font-bold text-lg text-emerald-800">Vicky Mehra</span>
                    <div className="text-yellow-500">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"I still can't believe I recovered without a transplant. <span className='font-semibold text-emerald-700'>Dr. Arjun Bawa</span> has deep knowledge and treats every patient like family, gives his personal time in hard situations."</p>
              </motion.div>

              {/* Review Card 5 */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-amber-500 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-lg font-bold text-white mr-3">
                    AK
                  </div>
                  <div>
                    <span className="font-bold text-lg text-emerald-800">Aayushi Kapoor</span>
                    <div className="text-yellow-500">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"I had repeated ascitic fluid drainage every 10 days. After 4 months of treatment from <span className='font-semibold text-emerald-700'>Dr. Bawa</span>, my swelling subsided, no more tapping needed, and recent scan showed improvement with no signs of fluid build-up."</p>
              </motion.div>

              {/* Review Card 6 */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-amber-500 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-lg font-bold text-white mr-3">
                    JS
                  </div>
                  <div>
                    <span className="font-bold text-lg text-emerald-800">Jatinder Sachdeva</span>
                    <div className="text-yellow-500">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"I had chronic liver disease with varices, MELD score 22, and FibroScan 30+. <span className='font-semibold text-emerald-700'>Dr. Arjun's</span> holistic approach—without any bhasma or metal—brought my liver stiffness down to 17.2 kPa and improved digestion and sleep."</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Share Your Story Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-2xl p-8 text-center text-white shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
            <p className="text-lg text-emerald-100 mb-8">
              Has Ayurvedic treatment helped you in your healing journey? We'd love to hear your story and inspire others.
            </p>
            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Submit Your Story
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;