import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSvg from '../assets/logo.svg';
import whatsappSvg from '../assets/whatsapp-svg.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#/' },
    { name: 'Áreas de Atuação', href: '#/atuacao' },
    { name: 'Sobre', href: '#/sobre' },
    { name: 'Diferenciais', href: '#/diferenciais' },
    { name: 'Contato', href: '#/contato' },
  ];

  return (
    <>
      {/* Mobile Drawer Overlay Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="navbar-mobile-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="container navbar-inner">
          {/* Logo Monograma & Nome */}
          <a href="#/" className="navbar-logo-wrapper">
            <img src={logoSvg} alt="Dara Vitória" height="52" className="navbar-logo-svg" />
          </a>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="navbar-cta-desktop">
            <a href="#/contato" className="btn-gold-nav btn-gold">
              <img src={whatsappSvg} alt="WhatsApp" className="icon-cta icon-cta-whatsapp" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="navbar-mobile-drawer"
            >
              <div className="mobile-drawer-inner">
                <ul className="mobile-nav-links">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <a
                        href={link.href}
                        className="mobile-nav-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="mobile-drawer-cta">
                  <a
                    href="#/contato"
                    className="btn-wine btn-full-width"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <img src={whatsappSvg} alt="WhatsApp" className="icon-cta icon-cta-whatsapp" />
                    <span>Agendar Atendimento</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
