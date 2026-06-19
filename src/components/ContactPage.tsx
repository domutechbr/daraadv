import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate premium submit delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      // Optionally format a WhatsApp message with the contact info
      const text = `Olá Dra. Dara, me chamo *${formData.name}*.\n` +
                   `Gostaria de agendar uma consulta sobre *${formData.area}*.\n` +
                   `E-mail: ${formData.email}\n` +
                   `Telefone: ${formData.phone}\n` +
                   `Mensagem: ${formData.message}`;
      const encodedText = encodeURIComponent(text);
      
      // Delay opening WhatsApp slightly to let success animation play
      setTimeout(() => {
        window.open(`https://wa.me/5511999999999?text=${encodedText}`, '_blank');
      }, 1200);
    }, 1500);
  };

  const areas = [
    { value: 'Contratos', label: 'Direito Contratual' },
    { value: 'Empresarial', label: 'Direito Empresarial' },
    { value: 'Digital', label: 'Direito Digital & LGPD' },
    { value: 'Civil', label: 'Direito Civil & Patrimonial' },
    { value: 'Trabalhista', label: 'Direito Trabalhista' },
    { value: 'Outros', label: 'Outros Assuntos' }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="contact-page-container"
    >
      {/* Background ambient elements */}
      <div className="ambient-glow-wine" style={{ top: '15%', left: '5%', opacity: 0.08 }}></div>
      <div className="ambient-glow-gold" style={{ bottom: '20%', right: '5%', opacity: 0.06 }}></div>

      <div className="container">
        {/* Page Hero */}
        <div className="contact-page-hero">
          <motion.div variants={itemVariants} className="contact-hero-text">
            <span className="section-tagline">AGENDAMENTO DE CONSULTA</span>
            <h1 className="contact-hero-title">
              Inicie seu atendimento <span className="gold-text-gradient font-italic">exclusivo</span>.
            </h1>
            <p className="contact-hero-desc">
              Preencha o formulário para direcionar seu caso ou fale conosco diretamente através dos canais oficiais de atendimento.
            </p>
          </motion.div>
        </div>

        {/* Contact Split Grid */}
        <div className="contact-grid-layout">
          
          {/* Left Column: Contact Cards */}
          <motion.div variants={itemVariants} className="contact-info-col">
            <h3 className="contact-col-title">Canais de Atendimento</h3>
            
            <div className="contact-cards-list">
              
              {/* Card 1: WhatsApp */}
              <div className="contact-detail-card glass-effect">
                <div className="contact-card-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">WhatsApp</span>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-card-value">
                    +55 (11) 99999-9999
                  </a>
                  <p className="contact-card-subtext">Retorno ágil para urgências e novos casos.</p>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="contact-detail-card glass-effect">
                <div className="contact-card-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">E-mail</span>
                  <a href="mailto:contato@daravitoria.adv.br" className="contact-card-value">
                    contato@daravitoria.adv.br
                  </a>
                  <p className="contact-card-subtext">Para envio de documentos e propostas.</p>
                </div>
              </div>

              {/* Card 3: Address */}
              <div className="contact-detail-card glass-effect">
                <div className="contact-card-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Escritório Presencial</span>
                  <span className="contact-card-value">
                    Av. Paulista, 1000 • Jardins • São Paulo - SP
                  </span>
                  <p className="contact-card-subtext">Atendimento presencial mediante agendamento prévio.</p>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className="contact-detail-card glass-effect">
                <div className="contact-card-icon-box">
                  <Clock size={20} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Horário de Expediente</span>
                  <span className="contact-card-value">
                    Segunda a Sexta • 09:00 às 18:00
                  </span>
                  <p className="contact-card-subtext">Respostas céleres em horário comercial.</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div variants={itemVariants} className="contact-form-col">
            <div className="contact-form-wrapper glass-effect">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="premium-contact-form"
                  >
                    <h3 className="form-title">Envie uma Mensagem</h3>
                    <p className="form-subtitle">Retornaremos o contato em menos de 2 horas úteis.</p>

                    {/* Name Input */}
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Nome Completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: João da Silva"
                        className="form-input"
                      />
                    </div>

                    {/* Grid for Email and Phone */}
                    <div className="form-row-grid">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="seuemail@exemplo.com"
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Telefone / WhatsApp</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="(11) 99999-9999"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Dropdown Area of Interest */}
                    <div className="form-group">
                      <label htmlFor="area" className="form-label">Área de Interesse</label>
                      <select
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        required
                        className="form-select"
                      >
                        <option value="" disabled>Selecione a área...</option>
                        {areas.map(opt => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Descreva brevemente seu caso</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Escreva sua mensagem aqui..."
                        className="form-textarea"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-wine btn-full-width contact-submit-btn"
                    >
                      {loading ? (
                        <div className="spinner"></div>
                      ) : (
                        <>
                          <span>Solicitar Consulta</span>
                          <Send size={14} style={{ marginLeft: '8px' }} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="contact-success-state"
                  >
                    <CheckCircle2 size={64} className="success-icon" />
                    <h3 className="success-title">Mensagem Recebida</h3>
                    <p className="success-desc">
                      Agradecemos o contato. Suas informações foram enviadas e estamos redirecionando você para o atendimento imediato no WhatsApp.
                    </p>
                    <div className="success-redirect-loader">
                      <div className="loader-line"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
