import { Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;