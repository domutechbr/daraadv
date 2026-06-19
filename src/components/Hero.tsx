import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import daraPortrait from '../assets/Dara-hero.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="inicio" className="hero-section">


      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & Call to Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-text-side"
          >
            {/* Subheading Badge */}
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">ADVOCACIA E CONSULTORIA JURÍDICA</span>
            </motion.div>

            {/* Main Cinematic Title */}
            <motion.h1 variants={itemVariants} className="hero-title">
              Advocacia e Consultoria Jurídica com Atendimento <span className="gold-text-gradient font-italic">Personalizado</span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p variants={itemVariants} className="hero-description">
              Sob a condução da <strong>Dra. Dara Vitória</strong>, o atendimento é voltado para advocacia e consultoria jurídica com técnica, ética e discrição. A atuação é personalizada para orientar, prevenir e defender os interesses de cada cliente com segurança.
            </motion.p>

            {/* CTA Buttons Container */}
            <motion.div variants={itemVariants} className="hero-actions">
              <a href="#contato" className="btn-wine font-semibold">
                Agendar Atendimento
              </a>
              <a href="#atuacao" className="btn-outline font-semibold">
                <span>Ver Áreas</span>
                <ArrowRight size={16} className="btn-arrow" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column Spacer (reserves space for the absolute image on desktop) */}
          <div className="hero-image-spacer"></div>
        </div>
      </div>

      {/* Right Column: Premium Image of the Lawyer (Absolutely positioned to touch the bottom) */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="hero-image-side"
      >
        <div className="hero-image-container">
          {/* Portrait Image */}
          <img
            src={daraPortrait}
            alt="Dra. Dara Vitória"
            className="hero-portrait-img"
          />
        </div>
      </motion.div>

      {/* Wave transition divider */}
      <svg 
        className="section-wave-divider" 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,45 Q300,12 600,45 T1200,45 L1200,100 L0,100 Z" 
          className="wave-path"
        />
      </svg>
    </section>
  );
}
