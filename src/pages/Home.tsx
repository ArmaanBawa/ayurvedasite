import React from 'react';
import { Helmet } from 'react-helmet-async';
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
        <title>Home | Ayuva Ayurveda</title>
        <meta name="Best Ayurvedic Doctor in Amritsar - Ayuvacare" content="Looking for the best Ayurvedic doctor in Amritsar? Ayuvacare offers expert treatment for liver, diabetes, cancer, stomach & piles at top clinics near you." />
        <meta name="google-site-verification" content="untvmc1r_mvBJOak0BUvYRW47JZ4Grx7gvC_J9R_EXM" />
      </Helmet>
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
    </>
  );
};

export default Home;