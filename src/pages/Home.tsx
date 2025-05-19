import React from 'react';
import HeroSection from '../components/HeroSection';
import TreatmentGrid from '../components/TreatmentGrid';
import DoctorProfile from '../components/DoctorProfile';
import TestimonialCarousel from '../components/TestimonialCarousel';
import AyurvedaBenefits from '../components/AyurvedaBenefits';
import AyurvedaGallery from '../components/AyurvedaGallery';
import Chatbot from '../components/Chatbot';
import ScrollAnimation from '../components/ScrollAnimation';
import { treatments } from '../data/content';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      <ScrollAnimation animation="fadeUp">
        <AyurvedaBenefits />
      </ScrollAnimation>

      <ScrollAnimation animation="scaleUp">
        <TreatmentGrid treatments={treatments} />
      </ScrollAnimation>

      <ScrollAnimation animation="slideIn">
        <AyurvedaGallery />
      </ScrollAnimation>

      <ScrollAnimation animation="fadeUp">
        <DoctorProfile />
      </ScrollAnimation>

      <ScrollAnimation animation="fadeIn">
        <TestimonialCarousel />
      </ScrollAnimation>

      <Chatbot />
    </div>
  );
};

export default Home;