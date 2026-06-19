import { Mail, MapPin, ArrowUp } from 'lucide-react';
import logoSvg from '../assets/logo.svg';
import whatsappSvg from '../assets/whatsapp-svg.svg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="footer-container">
      {/* Background ambient elements */}
      <div className="ambient-glow-wine" style={{ bottom: '0', right: '10%', opacity: 0.15 }}></div>

      <div className="container footer-inner">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={logoSvg} alt="Dara Vitória" height="48" className="footer-logo-svg" />
          </div>
          <p className="footer-brand-desc">
            Advocacia e consultoria jurídica com atendimento personalizado, atuação técnica e foco em orientação segura, preventiva e estratégica.
          </p>
          <div className="oab-credential">
            <span>OAB/SP Nº 000.000</span>
          </div>
        </div>



        {/* Column 3: Practice Areas */}
        <div className="footer-col">
          <h4 className="footer-heading">Áreas de Atuação</h4>
          <ul className="footer-links-list">
            <li><a href="#atuacao">Cível</a></li>
            <li><a href="#atuacao">Empresarial</a></li>
            <li><a href="#atuacao">Contratual</a></li>
            <li><a href="#atuacao">Digital</a></li>
            <li><a href="#atuacao">Trabalhista</a></li>
          </ul>
        </div>

        {/* Column 4: Contact & Socials */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contato</h4>
          <ul className="footer-contact-list">
            <li>
              <img src={whatsappSvg} alt="WhatsApp" className="contact-icon contact-icon-whatsapp" />
              <a href="tel:+5511999999999">+55 (11) 99999-9999</a>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <a href="mailto:contato@daravitoria.adv.br">contato@daravitoria.adv.br</a>
            </li>
            <li>
              <MapPin size={16} className="contact-icon-map" />
              <span className="address-text">
                Av. Paulista, 1000 • Jardins • São Paulo - SP
              </span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="footer-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider-line container"></div>

      {/* Bottom Footer Info */}
      <div className="container footer-bottom">
        <div className="copyright-group">
          <span>&copy; {currentYear} Dara Vitória Advocacia. Todos os direitos reservados.</span>
          <div className="bottom-policies">
            <a href="#privacidade">Políticas de Privacidade</a>
            <span className="dot-sep">•</span>
            <a href="#termos">Termos de Uso</a>
          </div>
        </div>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Voltar ao topo"
        >
          <span className="btn-label">Voltar ao topo</span>
          <div className="arrow-box">
            <ArrowUp size={16} />
          </div>
        </button>
      </div>
    </footer>
  );
}
