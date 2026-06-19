import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import daraImg from '../assets/Dara-Sobre.png';
import ScaleAnimation from './ScaleAnimation';

export default function AboutSummary() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const features = [
    {
      num: '01',
      title: 'Rigor Técnico & Precisão',
      desc: 'Análise aprofundada da legislação e jurisprudência para construir soluções seguras e sob medida para o seu caso.',
    },
    {
      num: '02',
      title: 'Atendimento Personalizado',
      desc: 'Comunicação transparente e direta com a advogada em todas as etapas, assegurando confiança e proximidade.',
    },
    {
      num: '03',
      title: 'Confidencialidade Absoluta',
      desc: 'Tratamento de informações pautado pelas melhores práticas de governança e pelo mais rígido sigilo profissional.',
    },
  ];

  return (
    <section id="sobre" className="about-summary-section">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="about-grid"
        >
          {/* Left Column: Immersive portrait */}
          <motion.div variants={itemVariants} className="about-image-side">
            <div className="about-image-glow"></div>
            <img src={daraImg} alt="Dara Vitória" className="about-img-immersive" />
          </motion.div>

          {/* Right Column: Editorial Text */}
          <div className="about-text-side">
            <motion.span variants={itemVariants} className="section-tagline">
              SOBRE A ADVOGADA
            </motion.span>
            <motion.h2 
              variants={itemVariants} 
              className="section-title"
              style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}
            >
              <span>Dra. Dara Vitória</span>
              <ScaleAnimation />
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>

            <motion.p variants={itemVariants} className="about-intro">
              "A advocacia moderna exige dinamismo, rigor técnico e, acima de tudo, um atendimento centrado na realidade de cada cliente."
            </motion.p>

            <motion.p variants={itemVariants} className="about-description">
              Com atuação pautada na ética, transparência e segurança jurídica, dedico-me a oferecer soluções personalizadas para pessoas e empresas. Acredito em um modelo de advocacia que vai além do litígio, priorizando a prevenção de riscos, o planejamento estratégico e a resolução eficiente de conflitos.
            </motion.p>

            {/* Core Values List */}
            <div className="about-features">
              {features.map((feat) => (
                <motion.div
                  key={feat.num}
                  variants={itemVariants}
                  className="about-feature-item"
                >
                  <span className="about-feature-num">{feat.num}</span>
                  <div className="about-feature-content">
                    <h4 className="about-feature-title">{feat.title}</h4>
                    <p className="about-feature-desc">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA to Dedicated About Page */}
            <motion.div variants={itemVariants}>
              <a href="#/sobre" className="btn-outline font-semibold">
                <span>Conhecer Trajetória</span>
                <ArrowRight size={16} className="btn-arrow" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
