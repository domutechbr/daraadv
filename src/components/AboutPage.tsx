import { motion } from 'framer-motion';
import { Landmark, Award, Shield } from 'lucide-react';
import daraImg from '../assets/Dara-Sobre.png';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const milestones = [
    {
      year: 'Formação',
      title: 'Bacharelado em Direito',
      desc: 'Graduação acadêmica com destaque em Direito Privado, Contratos e Direito Digital.',
    },
    {
      year: 'Inscrição',
      title: 'Ordem dos Advogados do Brasil (OAB)',
      desc: 'Inscrição regular e atuação ativa nos quadros da OAB, pautada no cumprimento rígido do Código de Ética.',
    },
    {
      year: 'Especialização',
      title: 'Pós-Graduação em Direito Civil e Empresarial',
      desc: 'Aprofundamento técnico nas relações patrimoniais, estruturação societária e negociações de alto nível.',
    },
    {
      year: 'Inovação',
      title: 'Especialista em Direito Digital e Compliance',
      desc: 'Adequação de empresas à LGPD, termos eletrônicos, proteção intelectual e inteligência jurídica digital.',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="about-page-container"
    >
      {/* Ambient background glows */}
      <div className="ambient-glow-wine" style={{ top: '10%', right: '5%', opacity: 0.1 }}></div>
      <div className="ambient-glow-gold" style={{ bottom: '25%', left: '5%', opacity: 0.06 }}></div>

      <div className="container">
        {/* Hero Section of About Page */}
        <div className="about-page-hero">
          <motion.div variants={itemVariants} className="about-hero-text">
            <span className="section-tagline">PERFIL PROFISSIONAL</span>
            <h1 className="about-hero-title">
              Trajetória fundada na <span className="gold-text-gradient font-italic">ética</span> e na excelência técnica.
            </h1>
            <p className="about-hero-desc">
              Conheça a história, a filosofia de trabalho e as qualificações que sustentam o compromisso da Dra. Dara Vitória com seus interesses.
            </p>
          </motion.div>
        </div>

        {/* Biography Grid */}
        <div className="about-bio-grid">
          {/* Left Column: Image with Glowing Halo */}
          <motion.div variants={itemVariants} className="about-bio-image-side">
            <div className="about-page-glow"></div>
            <img src={daraImg} alt="Dara Vitória" className="about-page-img" />
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div variants={itemVariants} className="about-bio-text-side">
            <h3 className="about-bio-section-title">Sobre a Advogada</h3>
            <p className="about-bio-p leading-relaxed">
              Dara Vitória é advogada especialista, com atuação direcionada para a advocacia consultiva, preventiva e contenciosa. Sua prática profissional é construída sob a premissa de que a advocacia de excelência exige proximidade, transparência e alto rigor técnico.
            </p>
            <p className="about-bio-p leading-relaxed">
              O foco do seu trabalho é oferecer tranquilidade jurídica a pessoas físicas e jurídicas por meio da prevenção ativa de riscos contratuais, blindagem empresarial, regulação patrimonial familiar e segurança no ambiente digital. 
            </p>
            <p className="about-bio-p leading-relaxed">
              Em sua jornada, busca desmistificar o direito tradicional, trazendo soluções eficientes, ágeis e perfeitamente adequadas ao dinamismo das necessidades modernas de cada cliente, eliminando intermediários e garantindo atendimento personalizado exclusivo.
            </p>
            
            <div className="about-badge-list">
              <span className="about-badge"><Landmark size={14} /> Advocacia Consultiva</span>
              <span className="about-badge"><Award size={14} /> Atuação Preventiva</span>
              <span className="about-badge"><Shield size={14} /> Compliance Digital</span>
            </div>
          </motion.div>
        </div>

        {/* Professional Milestones (Timeline) */}
        <div className="about-milestones-section">
          <motion.div variants={itemVariants} className="text-center-header">
            <span className="section-tagline">FORMAÇÃO E JORNADA</span>
            <h2 className="section-title">Marcos Profissionais</h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="milestones-timeline">
            {milestones.map((stone) => (
              <motion.div
                key={stone.title}
                variants={itemVariants}
                className="timeline-card glass-effect"
              >
                <span className="timeline-year">{stone.year}</span>
                <h4 className="timeline-card-title">{stone.title}</h4>
                <p className="timeline-card-desc">{stone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Commitment Statement Card */}
        <motion.div 
          variants={itemVariants}
          className="about-commitment-card glass-effect"
        >
          <div className="commitment-content">
            <h3 className="commitment-quote">
              "A segurança jurídica não é apenas o cumprimento de formalidades, mas a construção ativa de pontes seguras para o futuro dos seus negócios e da sua família."
            </h3>
            <span className="commitment-signature">— Dra. Dara Vitória</span>
          </div>
          <div className="commitment-action">
            <a href="#contato" className="btn-gold">
              <span>Agendar Atendimento</span>
            </a>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
