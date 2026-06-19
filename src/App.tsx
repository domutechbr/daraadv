import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import AboutSummary from './components/AboutSummary';
import AboutPage from './components/AboutPage';
import Differentials from './components/Differentials';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import whatsappSvg from './assets/whatsapp-svg.svg';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'sobre' | 'contato'>(() => {
    const hash = window.location.hash;
    if (hash === '#/sobre') return 'sobre';
    if (hash === '#/contato') return 'contato';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/sobre') {
        setCurrentPage('sobre');
      } else if (hash === '#/contato') {
        setCurrentPage('contato');
      } else {
        setCurrentPage('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main style={{ flexGrow: 1 }}>
        {currentPage === 'sobre' && <AboutPage />}
        {currentPage === 'contato' && <ContactPage />}
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Practice Areas Section */}
            <PracticeAreas />

            {/* About Summary Section */}
            <AboutSummary />

            {/* Differentials Section */}
            <Differentials />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-floating-btn"
        aria-label="Falar no WhatsApp"
      >
        <img src={whatsappSvg} alt="WhatsApp" className="whatsapp-floating-icon" />
      </a>
    </>
  );
}
