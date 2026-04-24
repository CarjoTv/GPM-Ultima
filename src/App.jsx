import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MedicalInsurance from './pages/MedicalInsurance';
import CarInsurance from './pages/CarInsurance';
import Contact from './pages/Contact';
import Citas from './pages/Citas';

function ScrollToTop() {
  return (
    <ScrollRestoration />
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-off-white flex flex-col font-sans selection:bg-gold/30 selection:text-charcoal">
        <Header />
        <main className="grow pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seguro-medico" element={<MedicalInsurance />} />
            <Route path="/seguro-auto" element={<CarInsurance />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/citas" element={<Citas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}