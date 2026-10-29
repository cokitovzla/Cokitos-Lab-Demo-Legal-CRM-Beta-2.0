import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock, ShieldCheck, ArrowRight, MessageSquare, Globe2 } from 'lucide-react';
import { trackClick, trackWhatsAppClick, trackAuthAction } from '../lib/analytics';
import { Lead } from '../types';

interface ContactSectionProps {
  onOpenAdmin: () => void;
  onOpenAuth?: (mode?: 'login' | 'register' | 'newsletter') => void;
  onNewLeadCreated?: (lead: Lead) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  onOpenAdmin, 
  onOpenAuth,
  onNewLeadCreated 
}) => {
  const { subscribeNewsletter } = useAuth();
  const { language } = useLanguage();
  const isEs = language === 'es';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedLeadInfo, setSubmittedLeadInfo] = useState<{ id: string; email: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    trackClick('contacto', 'enviar_mensaje_directo', {
      has_company: Boolean(company.trim()),
    });

    const leadId = `lead-contact-${Date.now()}`;
    const newContactLead: Lead = {
      id: leadId,
      fullName: name.trim(),
      email: email.trim(),
      company: company.trim() || (isEs ? 'Consulta particular' : 'Private Consultation'),
      industry: isEs ? 'Contacto directo web (Europa)' : 'Direct Web Contact (Europe)',
      stage: 'En crecimiento',
      areasOfInterest: ['Asesoría General'],
      notes: message.trim(),
      status: 'nuevo_lead',
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
      calculatedRiskScore: 0,
      riskSummary: `Consulta web JurisNova International: "${message.trim().slice(0, 140)}${message.length > 140 ? '...' : ''}"`,
      riskItems: [],
      internalNotes: [
        {
          id: `note-${Date.now()}`,
          author: 'Formulario Web JurisNova',
          text: `Mensaje de ${name.trim()} (${email.trim()}${company.trim() ? ` · ${company.trim()}` : ''}): ${message.trim()}`,
          timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16)
        }
      ]
    };

    if (onNewLeadCreated) {
      onNewLeadCreated(newContactLead);
    }

    setSubmittedLeadInfo({ id: leadId, email: email.trim() });
    setSubmitted(true);
    setIsSubmitting(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterLoading(true);
    try {
      trackAuthAction('newsletter_subscribe', { source: 'contacto_footer' });
      await subscribeNewsletter(newsletterEmail);
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    } catch (e) {
      console.error(e);
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <section 
      id="contacto" 
      className="py-12 sm:py-16 lg:py-20 bg-slate-50/80 border-b border-slate-200 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0071ce] uppercase mb-2 bg-blue-50 px-2.5 py-1 rounded-md">
            <MessageSquare className="w-3.5 h-3.5 text-[#0071ce]" />
            <span>{isEs ? 'Contacto & Asesoría Directa' : 'Contact & Advisory Desk'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight mb-2">
            {isEs ? 'Hablemos de tu negocio en Europa y el mundo' : 'Let\'s discuss your business across Europe and beyond'}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
            {isEs 
              ? '¿Tienes un reto legal corporativo, una sociedad por estructurar o buscas expansión comunitaria? Escríbenos y coordinamos una sesión preliminar con nuestro equipo.' 
              : 'Have a corporate legal challenge, an entity to structure, or planning cross-border European expansion? Get in touch for a direct, responsive briefing.'}
          </p>
        </div>

        {/* 2-Column Contact & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 sm:mb-10">
          
          {/* Direct Message Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs">
            {submitted ? (
              <div className="text-center py-8 sm:py-10 space-y-4 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-950">
                    {isEs ? 'Mensaje recibido y registrado en el CRM' : 'Message logged directly in CRM'}
                  </h3>
                  <div className="inline-block mt-1 font-mono text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded">
                    {isEs ? 'Referencia' : 'Ticket'} #{submittedLeadInfo?.id.slice(-6)}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {isEs 
                    ? `Tu consulta fue recibida por el despacho internacional de JurisNova y Cokito's Lab. Te responderemos a ${submittedLeadInfo?.email} en menos de 24 horas hábiles.`
                    : `Your inquiry has been received by JurisNova International & Cokito's Lab team. We will respond to ${submittedLeadInfo?.email} within 24 business hours.`}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    {isEs ? 'Enviar otro mensaje o consulta' : 'Send another inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isEs ? 'Nombre completo *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isEs ? 'Tu nombre y apellido' : 'Your name'}
                      className="w-full px-3.5 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0071ce]/30 focus:border-[#0071ce] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isEs ? 'Correo corporativo *' : 'Corporate Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0071ce]/30 focus:border-[#0071ce] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEs ? 'Empresa / Proyecto' : 'Company / Venture'} <span className="text-slate-400 font-normal">({isEs ? 'opcional' : 'optional'})</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={isEs ? 'Nombre comercial o denominación social' : 'Business name or holding'}
                    className="w-full px-3.5 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0071ce]/30 focus:border-[#0071ce] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isEs ? '¿En qué podemos asesorarte? *' : 'How can we assist you? *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isEs ? 'Describe brevemente tu situación societaria, contratos, RGPD o plan de expansión...' : 'Briefly describe your corporate structuring, GDPR, contracts, or expansion goals...'}
                    className="w-full px-3.5 py-2.5 bg-slate-50/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0071ce]/30 focus:border-[#0071ce] transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isEs ? 'Confidencialidad amparada por secreto profesional.' : 'Professional privilege & GDPR compliant.'}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-[#0071ce] hover:bg-[#005fb0] active:bg-[#004f91] disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95"
                  >
                    <span>{isEs ? 'Enviar consulta directa' : 'Send inquiry'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & European Hub Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4 text-left">
              <h3 className="text-base sm:text-lg font-display font-bold text-slate-950 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[#0071ce]" />
                <span>{isEs ? 'Canales Directos & Sedes Europeas' : 'Direct Channels & European Hub'}</span>
              </h3>

              {/* Direct WhatsApp Call to Action Button */}
              <a
                href="https://wa.me/34612000890?text=Hola,%20deseo%20asesoria%20legal%20internacional%20con%20JurisNova."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contact_channel_card')}
                data-track-section="contacto"
                data-track-name="whatsapp_direct_action_card"
                className="p-3.5 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/90 rounded-xl flex items-center justify-between gap-3 group transition-all cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                      <span>{isEs ? 'WhatsApp Desk Internacional' : 'International WhatsApp Desk'}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 bg-emerald-200/90 text-emerald-900 rounded font-bold">Fast response</span>
                    </div>
                    <div className="text-[11px] text-emerald-800 font-mono">
                      +34 612 000 890 · {isEs ? 'Atención especializada' : 'Global client desk'}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071ce] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {isEs ? 'Correo Electrónico Oficial' : 'Official Email Desk'}
                    </div>
                    <a 
                      href="mailto:international@jurisnova.legal" 
                      onClick={() => trackClick('contacto', 'click_email')}
                      className="font-semibold text-slate-900 hover:text-[#0071ce] transition-colors"
                    >
                      international@jurisnova.legal
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#0071ce]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {isEs ? 'Sede Europea & Cobertura' : 'European Headquarters'}
                    </div>
                    <p className="font-semibold text-slate-900 text-xs">
                      Paseo de la Castellana 95, Planta 14, Madrid, España
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Desk Londres: 30 St Mary Axe, City of London, UK
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0071ce] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {isEs ? 'Horario de Atención CET' : 'CET Working Hours'}
                    </div>
                    <p className="font-semibold text-slate-900 text-xs">
                      {isEs ? 'Lunes a Viernes · 08:30 a 19:00 (Hora Madrid / CET)' : 'Monday to Friday · 08:30 to 19:00 (CET)'}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Newsletter Subscription Box */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="text-xs font-bold text-slate-900 mb-1">
                {isEs ? 'Boletín Legal Europeo de Cokito\'s Lab' : 'Cokito\'s Lab European Legal Briefing'}
              </div>
              <p className="text-[11px] text-slate-500 mb-3">
                {isEs ? 'Recibe quincenalmente novedades sobre normativa UE, contratos y oportunidades de inversión.' : 'Bi-weekly briefings on EU regulations, contracts, and venture growth.'}
              </p>
              {newsletterSubscribed ? (
                <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  {isEs ? '✓ ¡Suscrito al boletín oficial!' : '✓ Subscribed to the official briefing!'}
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white"
                  />
                  <button
                    type="submit"
                    disabled={newsletterLoading}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    {newsletterLoading ? '...' : (isEs ? 'Suscribir' : 'Subscribe')}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
