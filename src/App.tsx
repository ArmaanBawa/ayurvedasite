import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import AllTreatments from './pages/AllTreatments';
import SuccessStories from './pages/SuccessStories';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import KidneyDisease from './pages/treatments/KidneyDisease';
import Diabetes from './pages/treatments/Diabetes';
import Arthritis from './pages/treatments/Arthritis';
import Hypertension from './pages/treatments/Hypertension';
import Asthma from './pages/treatments/Asthma';
import TreatmentDetail from './pages/treatments/TreatmentDetail';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/all-treatments" element={<AllTreatments />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/treatments/kidney-disease" element={<KidneyDisease />} />
            <Route path="/treatments/diabetes" element={<Diabetes />} />
            <Route path="/treatments/arthritis" element={<Arthritis />} />
            <Route path="/treatments/hypertension" element={<Hypertension />} />
            <Route path="/treatments/asthma" element={<Asthma />} />
            <Route path="/treatments/:id" element={<TreatmentDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </HelmetProvider>
  );
}

export default App;