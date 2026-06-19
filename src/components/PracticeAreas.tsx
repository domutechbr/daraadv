import React, { useState } from 'react';
import { Landmark, Briefcase, FileSignature, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CivelIllustration from './CivelIllustration';
import EmpresarialIllustration from './EmpresarialIllustration';
import ContratualIllustration from './ContratualIllustration';
import DigitalIllustration from './DigitalIllustration';
import TrabalhistaIllustration from './TrabalhistaIllustration';
import iconEmpresarial from '../assets/icon-empresarial.png';
import iconDigital from '../assets/icon-digital.png';

function VideoScrollCard({ 
  area, 
  index, 
  cardVariants, 
  videoSrc,
  illustration,
  blendMode = 'screen',
  isActive,
  innerRef,
  onClick,
}: { 
  area: any; 
  index: number; 
  cardVariants: any; 
  videoSrc?: string;
  illustration?: React.ReactNode;
  blendMode?: 'screen' | 'multiply';
  isActive: boolean;
  innerRef: (el: HTMLDivElement | null) => void;
  onClick: () => void;
}) {
  return (
    <div 
      ref={innerRef}
      className="video-scroll-track" 
      style={{ '--stack-idx': index } as React.CSSProperties}
    >
      <div className="video-scroll-sticky" style={{ '--stack-idx': index } as React.CSSProperties}>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          onClick={onClick}
          className="practice-card glass-effect"
          style={{ '--stack-idx': index, cursor: 'pointer' } as React.CSSProperties}
        >
          <div className="card-border-glow"></div>
          <span className="card-number">0{index + 1}</span>

          {/* Icon Container */}
          <div className="practice-icon-container">
            <div className="icon-backdrop"></div>
            <div className="icon-element">{area.icon}</div>
          </div>

          {/* Card Titles */}
          <div className="practice-card-header">
            <span className="practice-card-subtitle">{area.subtitle}</span>
            <h3 className="practice-card-title">{area.title}</h3>
          </div>

          {/* Card Description */}
          <p className="practice-card-desc">{area.desc}</p>

          {/* Card Footer Link */}
          <div className="practice-card-footer">
            <span className="practice-card-link">
              <span>Saber Mais</span>
              <ArrowRight size={14} className="link-arrow" />
            </span>
          </div>
        </motion.div>

        {/* Illustration or Video — surge ao lado quando o card entra na tela */}
        <motion.div
          className="video-scroll-container"
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.92,
            x: isActive ? 0 : 40,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={videoSrc ? { mixBlendMode: blendMode } : undefined}
        >
          {illustration ? (
            illustration
          ) : videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              playsInline
              className="video-scroll-element"
            />
          ) : null}
        </motion.div>
      </div>
    </div>
  );
}


export default function PracticeAreas() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedArea, setSelectedArea] = useState<any | null>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const handleScroll = () => {
      let newActive = 0;
      cardRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // The sticky threshold is at top: 130px. If the top has scrolled past 180px, it's active.
          if (rect.top <= 180) {
            newActive = idx;
          }
        }
      });
      setActiveIndex(newActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const areas = [
    {
      icon: <Landmark size={32} />,
      title: 'Cível',
      subtitle: 'Direito Civil',
      desc: 'Orientação e representação em matérias civis, incluindo contratos civis, responsabilidade civil, família e sucessões com segurança e discrição.',
      details: {
        title: 'Direito Civil, Família e Sucessões',
        overview: 'Atuação jurídica especializada voltada para a pacificação de conflitos e a proteção do patrimônio familiar, com o máximo zelo, ética e sigilo profissional.',
        services: [
          'Ações de inventário judicial e extrajudicial',
          'Planejamento sucessório e estruturação de testamentos',
          'Divórcios, partilhas de bens e acordos familiares',
          'Contratos civis, escrituras e obrigações',
          'Ações de responsabilidade civil e indenizações'
        ]
      }
    },
    {
      icon: <img src={iconEmpresarial} alt="Empresarial" className="custom-png-icon" style={{ width: 32, height: 32, objectFit: 'contain' }} />,
      title: 'Empresarial',
      subtitle: 'Sociedades e Governança',
      desc: 'Apoio jurídico completo para empresas em estrutura societária, fusões, aquisições, acordos entre sócios e decisões estratégicas.',
      details: {
        title: 'Direito Empresarial e Societário',
        overview: 'Consultoria estratégica voltada à viabilização de negócios e à proteção jurídica da atividade empresarial, garantindo governança robusta e segurança institucional.',
        services: [
          'Constituição e reestruturação societária (Holdings)',
          'Elaboração de acordos de sócios e acionistas',
          'Fusões, Aquisições (M&A) e auditoria jurídica',
          'Planejamento tributário focado na atividade',
          'Proteção patrimonial dos sócios e administradores'
        ]
      }
    },
    {
      icon: <FileSignature size={32} />,
      title: 'Contratual',
      subtitle: 'Elaboração e Negociação',
      desc: 'Elaboração, revisão e negociação de contratos comerciais, civis e internacionais, com foco em segurança jurídica e redução de riscos.',
      details: {
        title: 'Direito Contratual e Estruturação',
        overview: 'Modelagem, negociação e auditoria de contratos nacionais e internacionais, com foco em alocação de riscos inteligente e solidez legal das parcerias.',
        services: [
          'Elaboração de acordos de confidencialidade (NDA)',
          'Contratos de prestação de serviços e comerciais',
          'Contratos imobiliários, locações e compra e venda',
          'Gestão de riscos contratuais e mediação extrajudicial',
          'Análise de termos de uso e contratos de adesão'
        ]
      }
    },
    {
      icon: <img src={iconDigital} alt="Digital" className="custom-png-icon" style={{ width: 32, height: 32, objectFit: 'contain' }} />,
      title: 'Digital',
      subtitle: 'Direito da Tecnologia',
      desc: 'Consultoria jurídica em assuntos digitais, proteção de dados, contratos eletrônicos, propriedade intelectual e compliance digital.',
      details: {
        title: 'Direito Digital e Proteção de Dados',
        overview: 'Adequação legal e técnica de empresas ao ecossistema digital, garantindo a conformidade regulatória e a mitigação de riscos em novas tecnologias.',
        services: [
          'Adequação e compliance à LGPD (Lei Geral de Proteção de Dados)',
          'Termos de uso e políticas de privacidade customizadas',
          'Proteção de softwares, startups e marcas registradas',
          'Elaboração de contratos de tecnologia (SaaS/IaaS)',
          'Assessoria jurídica em vazamentos e segurança da informação'
        ]
      }
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Trabalhista',
      subtitle: 'Direito do Trabalho',
      desc: 'Orientação para empregadores e empregados em contratação, rescisão, negociações coletivas e resoluções de conflitos trabalhistas.',
      details: {
        title: 'Direito Trabalhista Preventivo e Contencioso',
        overview: 'Assessoria de excelência para redução do passivo trabalhista de empresas e defesa técnica dos direitos contratuais em litígios complexos.',
        services: [
          'Auditoria trabalhista preventiva para mitigação de riscos',
          'Defesas robustas em reclamações trabalhistas judiciais',
          'Adequação regulatória de contratos de trabalho e home office',
          'Mediação de conflitos, acordos coletivos e negociações',
          'Compliance trabalhista e códigos de conduta interna'
        ]
      }
    },
  ];

  const illustrations = [
    <CivelIllustration animate={activeIndex === 0 ? "visible" : "hidden"} />,
    <EmpresarialIllustration animate={activeIndex === 1 ? "visible" : "hidden"} />,
    <ContratualIllustration animate={activeIndex === 2 ? "visible" : "hidden"} />,
    <DigitalIllustration animate={activeIndex === 3 ? "visible" : "hidden"} />,
    <TrabalhistaIllustration animate={activeIndex === 4 ? "visible" : "hidden"} />
  ];

  return (
    <section id="atuacao" className="practice-areas-section">
      {/* Background ambient lighting */}
      <div className="ambient-glow-wine" style={{ top: '10%', right: '10%', opacity: 0.08 }}></div>
      <div className="ambient-glow-gold" style={{ bottom: '15%', left: '5%', opacity: 0.06 }}></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tagline">ÁREAS DE ATUAÇÃO JURÍDICA</span>
          <h2 className="section-title">
            Serviços Jurídicos <span className="gold-text-gradient font-italic">Personalizados</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Atuação técnica, sigilosa e personalizada em advocacia e consultoria jurídica, com foco na prevenção de riscos e na defesa dos interesses do cliente.
          </p>
          <div className="section-pills">
            <span className="section-pill">Consultivo</span>
            <span className="section-pill">Preventivo</span>
            <span className="section-pill">Contencioso</span>
          </div>
        </div>

        {/* Practice Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="practice-grid"
        >
          {areas.map((area, index) => {
            return (
              <VideoScrollCard
                key={area.title}
                area={area}
                index={index}
                cardVariants={cardVariants}
                illustration={illustrations[index]}
                isActive={index === activeIndex}
                innerRef={(el) => (cardRefs.current[index] = el)}
                onClick={() => setSelectedArea(area)}
              />
            );
          })}
        </motion.div>

        {/* Bottom CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="areas-cta-banner glass-effect"
        >
          <div className="banner-content">
            <h3 className="banner-title">Precisa de orientação jurídica segura e personalizada?</h3>
            <p className="banner-desc">Converse com a Dra. Dara Vitória para entender seu caso e receber uma análise inicial com sigilo profissional.</p>
          </div>
          <div className="banner-action">
            <a href="#contato" className="btn-gold banner-btn">
              <span>Agendar Atendimento</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedArea !== null && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArea(null)}
          >
            <motion.div 
              className="modal-wrapper"
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="modal-close-btn" onClick={() => setSelectedArea(null)} aria-label="Fechar">
                <X size={18} />
              </button>

              {/* Illustration Column */}
              <div className="modal-illustration-col">
                {selectedArea.title === 'Cível' && <CivelIllustration animate="visible" />}
                {selectedArea.title === 'Empresarial' && <EmpresarialIllustration animate="visible" />}
                {selectedArea.title === 'Contratual' && <ContratualIllustration animate="visible" />}
                {selectedArea.title === 'Digital' && <DigitalIllustration animate="visible" />}
                {selectedArea.title === 'Trabalhista' && <TrabalhistaIllustration animate="visible" />}
              </div>

              {/* Content Column */}
              <div className="modal-content-col">
                <span className="modal-subtitle">{selectedArea.subtitle}</span>
                <h3 className="modal-title">{selectedArea.details.title}</h3>
                <div className="modal-divider"></div>
                <p className="modal-overview">{selectedArea.details.overview}</p>

                <h4 className="modal-list-title">Serviços Especializados</h4>
                <ul className="modal-services-list">
                  {selectedArea.details.services.map((service: string, i: number) => (
                    <li key={i} className="modal-service-item">
                      <span className="modal-bullet">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="modal-cta-row">
                  <a href="#contato" className="btn-gold" onClick={() => setSelectedArea(null)}>
                    <span>Agendar Atendimento</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
