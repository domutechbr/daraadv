import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Differentials() {
  const [activeTab, setActiveTab] = useState(0);

  const differentials = [
    {
      num: '01',
      tag: 'EXCLUSIVIDADE',
      title: 'Atendimento Direto com a Especialista',
      desc: 'Na advocacia de alto padrão, a pessoalidade é inegociável. Você não será atendido por assistentes ou repassado a intermediários. Todo o seu caso é analisado, estruturado e defendido diretamente pela própria Dra. Dara Vitória, assegurando sigilo absoluto, precisão nos fatos e alinhamento estratégico direto.',
      detail: 'Isso garante que a tese jurídica aplicada ao seu negócio ou patrimônio tenha a máxima profundidade técnica, sem ruídos de comunicação comuns em grandes bancas.'
    },
    {
      num: '02',
      tag: 'SEGURANÇA PREVENTIVA',
      title: 'Blindagem e Prevenção de Riscos',
      desc: 'Evitar o litígio é a forma mais inteligente de proteger seu caixa e seu tempo. Focamos em estruturar contratos de alta complexidade, políticas de compliance digital robustas e regulação patrimonial sólida para anular vulnerabilidades antes que elas se tornem disputas judiciais caras.',
      detail: 'Uma atuação preventiva reduz custos jurídicos a longo prazo em até 70%, gerando previsibilidade e tranquilidade para o crescimento das suas atividades.'
    },
    {
      num: '03',
      tag: 'IMERSÃO DIGITAL',
      title: 'Metodologia Ágil e Tecnologia',
      desc: 'A velocidade dos negócios modernos exige um direito dinâmico. Eliminamos a burocracia tradicional através de assinaturas eletrônicas avançadas com validade jurídica, reuniões digitais de alta segurança e monitoramento processual automatizado em tempo real.',
      detail: 'Tudo pensado para que a distância física não seja um obstáculo e a tomada de decisão ocorra com a velocidade que o mercado exige.'
    },
    {
      num: '04',
      tag: 'PRAGMATISMO',
      title: 'Transparência e Decodificação Jurídica',
      desc: 'Acreditamos em um relacionamento pautado na clareza. Traduzimos o formalismo técnico em relatórios pragmáticos de andamento. Você sempre saberá exatamente onde seu caso está, quais são as chances reais e quais caminhos serão tomados.',
      detail: 'Sem promessas impossíveis. Nossa atuação é guiada pela verdade técnica e pela busca honesta pelas soluções mais céleres e econômicas.'
    }
  ];

  return (
    <section id="diferenciais" className="differentials-section">
      {/* Background ambient elements */}
      <div className="ambient-glow-wine" style={{ top: '-10%', right: '5%', opacity: 0.08 }}></div>
      <div className="ambient-glow-gold" style={{ bottom: '10%', left: '5%', opacity: 0.04 }}></div>

      <div className="container">
        <div className="differentials-editorial-layout">
          
          {/* Left Sticky Column: Luxury Title & Interactive Nav */}
          <div className="diff-left-column">
            <span className="section-tagline">FILOSOFIA DE ATUAÇÃO</span>
            <h2 className="diff-editorial-title">
              O que nos torna <br />
              <span className="gold-text-gradient font-italic">singulares</span>.
            </h2>
            <div className="diff-editorial-divider"></div>
            <p className="diff-editorial-subtitle">
              Conectamos o rigor técnico clássico com a velocidade e exclusividade exigidas pelo mercado atual.
            </p>

            {/* Interactive Vertical Menu */}
            <div className="diff-interactive-menu">
              {differentials.map((item, idx) => (
                <button
                  key={item.num}
                  className={`diff-menu-item ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="diff-menu-num">{item.num}</span>
                  <span className="diff-menu-tag">{item.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Display Card */}
          <div className="diff-right-column">
            <div className="diff-display-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  className="diff-display-card glass-effect"
                >
                  <div className="diff-card-header">
                    <span className="diff-card-badge">{differentials[activeTab].tag}</span>
                    <span className="diff-card-number-large">{differentials[activeTab].num}</span>
                  </div>
                  
                  <h3 className="diff-display-title">
                    {differentials[activeTab].title}
                  </h3>
                  
                  <p className="diff-display-desc">
                    {differentials[activeTab].desc}
                  </p>

                  <div className="diff-display-divider"></div>

                  <p className="diff-display-detail">
                    {differentials[activeTab].detail}
                  </p>

                  <div className="diff-card-footer-cta">
                    <a href="#/contato" className="btn-gold-nav btn-gold">
                      <span>Agendar Consulta</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
