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
  const { language, t } = useLanguage();
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
      className="py-8 sm:py-10 lg:py-12 bg-slate-50/80 border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0071ce] uppercase mb-2 bg-blue-50 px-2.5 py-1 rounded-md">
            <MessageSquare className="w-3.5 h-3.5 text-[#0071ce]" />
            <span>{t.contact.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight mb-2">
            {t.contact.title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Contact & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Direct Message Form */}
          <div className="lg:col-span-7 bg-white p-4.5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs">
            {submitted ? (
              <div className="text-center py-6 sm:py-8 space-y-3 animate-in fade-in">
                <div className="w-11 h-11 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-bold text-slate-950">
                    {t.contact.successTitle}
                  </h3>
                  <div className="inline-block mt-1 font-mono text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded">
                    Ticket #{submittedLeadInfo?.id.slice(-6)} · {t.contact.successCrmBadge}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.contact.successDesc} ({submittedLeadInfo?.email})
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre y apellido"
                      className="w-full px-3 py-2 bg-slate-50/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0071ce]/30 focus:border-[#0071ce] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="w-full px-3 py-2 bg-slate-50/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0071ce]/30 focus:border-[#0071ce] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.contact.companyLabel} <span className="text-slate-400 font-normal">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nombre comercial o empresa"
                    className="w-full px-3 py-2 bg-slate-50/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0071ce]/30 focus:border-[#0071ce] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe brevemente tu situación societaria, contratos o consulta..."
                    className="w-full px-3 py-2 bg-slate-50/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0071ce]/30 focus:border-[#0071ce] transition-all"
                  />
                </div>

                <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Secreto profesional y RGPD</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#0071ce] hover:bg-[#005fb0] active:bg-[#004f91] disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95"
                  >
                    <span>{isSubmitting ? t.contact.sendingBtn : t.contact.submitBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & European Hub Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            <div className="bg-white p-4.5 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 text-left">
              <h3 className="text-sm sm:text-base font-display font-bold text-slate-950 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#0071ce]" />
                <span>{t.contact.channelsTitle}</span>
              </h3>

              {/* Direct WhatsApp Call to Action Button */}
              <a
                href="https://wa.me/34612000890?text=Hola,%20deseo%20asesoria%20legal%20internacional%20con%20JurisNova."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contact_channel_card')}
                data-track-section="contacto"
                data-track-name="whatsapp_direct_action_card"
                className="p-3 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/90 rounded-xl flex items-center justify-between gap-3 group transition-all cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                      <span>{t.contact.whatsappBtn}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 bg-emerald-200/90 text-emerald-900 rounded font-bold">Fast response</span>
                    </div>
                    <div className="text-[11px] text-emerald-800 font-mono">
                      +34 612 000 890 · {isEs ? 'Atención especializada' : 'Global desk'}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <div className="space-y-3 text-xs text-slate-700 pt-1">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0071ce] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {t.contact.emailBtn}
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

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#0071ce]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {t.contact.locationsTitle}
                    </div>
                    <p className="font-semibold text-slate-900 text-xs">
                      {t.contact.locationsDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0071ce] flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {t.contact.hoursTitle}
                    </div>
                    <p className="font-semibold text-slate-900 text-xs">
                      {t.contact.hoursDesc}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Newsletter Subscription Box */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="text-xs font-bold text-slate-900 mb-0.5">
                {t.contact.newsletterTitle}
              </div>
              <p className="text-[11px] text-slate-500 mb-2.5">
                {t.contact.newsletterSubtitle}
              </p>
              {newsletterSubscribed ? (
                <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  {t.contact.newsletterSuccess}
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
                    {newsletterLoading ? '...' : t.contact.newsletterBtn}
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
