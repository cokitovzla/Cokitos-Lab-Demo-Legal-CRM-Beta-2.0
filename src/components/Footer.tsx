import React from 'react';
import { 
  Lock, 
  Briefcase, 
  Compass, 
  Workflow, 
  ShieldCheck, 
  BookOpen, 
  Sparkles, 
  MessageSquare,
  Globe,
  HelpCircle,
  ExternalLink,
  FlaskConical
} from 'lucide-react';
import { trackNavigation, trackClick } from '../lib/analytics';
import { LegalTab } from './LegalInfoModal';
import { CokitosLogo } from './CokitosLogo';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAdmin: () => void;
  onOpenLegalModal?: (tab: LegalTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateSection, 
  onOpenAdmin,
  onOpenLegalModal 
}) => {
  const { language, t } = useLanguage();
  const isEs = language === 'es';

  // Dynamic project name and WhatsApp URL for authorship credits
  const projectName = 'JurisNova LegalTech & CRM';
  const whatsappMessage = `Hola Cokito's Lab, vi la plataforma de ${projectName} y quiero crear una solución tecnológica para mi empresa`;
  const whatsappUrl = `https://wa.me/584224612534?text=${encodeURIComponent(whatsappMessage)}`;

  const handleFooterNav = (sectionId: string) => {
    trackNavigation(sectionId, 'footer');
    onNavigateSection(sectionId);
  };

  const handleLegalClick = (tab: LegalTab) => {
    trackClick('footer', `legal_${tab}`);
    if (onOpenLegalModal) {
      onOpenLegalModal(tab);
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200 pt-8 sm:pt-10 pb-20 sm:pb-8 text-xs text-neutral-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-neutral-200/80">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <CokitosLogo />
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              {isEs 
                ? 'Asesoría jurídica internacional y estructuración societaria para PYMES y scaleups. Soluciones preventivas, directas y ágiles adaptadas al marco de la Unión Europea y mercados globales.'
                : 'International corporate advisory and business structuring for SMEs and scaleups. Preventive, streamlined legal architecture adapted to the European Union and global markets.'}
            </p>

            <div className="text-[11px] text-slate-400 font-mono">
              {t.footer.europeOffices}
            </div>

            <div className="text-[11px] font-semibold text-[#0071ce] pt-1">
              {t.footer.poweredBy}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] font-semibold text-neutral-900 uppercase tracking-wider">
              {isEs ? 'Navegación' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleFooterNav('que-hacemos')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-2 group text-left"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#0071ce] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{t.nav.services}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('por-que')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-2 group text-left"
                >
                  <Compass className="w-3.5 h-3.5 text-[#0071ce] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{t.nav.whyUs}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('como')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-2 group text-left"
                >
                  <Workflow className="w-3.5 h-3.5 text-[#0071ce] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{t.nav.howItWorks}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('equipo')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-2 group text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0071ce] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{t.nav.team}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('contacto')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-2 group text-left"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#0071ce] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{t.nav.contact}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('diagnostico')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-2 group text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#0071ce] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{t.nav.diagnostic}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav('blog')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-2 group text-left"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#0071ce] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{t.nav.blog}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Compliance & Admin */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[11px] font-semibold text-neutral-900 uppercase tracking-wider">
              {isEs ? 'Información Legal & Privacidad' : 'Legal & Privacy Compliance'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLegalClick('privacidad')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{isEs ? 'Política de Privacidad y RGPD' : 'Privacy & GDPR Policy'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLegalClick('terminos')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{isEs ? 'Términos y Condiciones del Servicio' : 'Terms and Conditions'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLegalClick('faq')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{isEs ? 'Preguntas Frecuentes (FAQ)' : 'Frequently Asked Questions'}</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="text-xs font-semibold text-neutral-900 hover:text-[#0071ce] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-[#0071ce]" />
                  <span>{isEs ? 'Acceso CRM Cokito\'s Lab' : 'Cokito\'s Lab CRM Panel'}</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Banner unificado de autoría y créditos de Cokito's Lab */}
        <div className="pt-6 pb-2">
          <div className="rounded-xl bg-gradient-to-r from-emerald-50/70 via-white to-teal-50/60 border border-emerald-300/80 px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xs">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5 sm:gap-4">
              
              {/* Left Zone: Periodic Table Badge + 2-line Text */}
              <div className="flex items-center gap-3 w-full lg:w-auto text-left">
                {/* Insignia estilo tabla periódica de los elementos */}
                <a
                  href="https://cokitos-lab-international.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-emerald-600 via-teal-900 to-slate-950 border border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.35)] p-1 flex flex-col justify-between hover:scale-105 active:scale-95 transition-all group cursor-pointer"
                  title="Cokito's Lab International · Laboratorio Tecnológico"
                >
                  <div className="text-[8px] font-mono font-bold text-emerald-300 leading-none">
                    31
                  </div>
                  <div className="text-base sm:text-lg font-black font-mono tracking-wider text-emerald-100 text-center leading-none">
                    CL
                  </div>
                  <div className="text-[7px] font-mono font-bold tracking-widest text-emerald-400 text-center uppercase leading-none">
                    LAB
                  </div>
                </a>

                {/* Texto en 2 líneas exactas */}
                <div className="space-y-0.5 min-w-0">
                  <p className="text-xs sm:text-[13px] text-slate-800 leading-snug">
                    Esta solución tecnológica fue desarrollada por{' '}
                    <a
                      href="https://cokitos-lab-international.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
                    >
                      Cokito&apos;s Lab
                    </a>
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                    ¿Quieres una plataforma a la medida para tu negocio? ¡Tú también puedes tener la tuya!
                  </p>
                </div>
              </div>

              {/* Right Zone: 2 Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full lg:w-auto justify-end">
                {/* Botón 1: Web Oficial */}
                <a
                  href="https://cokitos-lab-international.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white hover:bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-300/80 shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap"
                  title="Visitar sitio oficial de Cokito's Lab"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Web Oficial</span>
                  <ExternalLink className="w-3 h-3 text-emerald-500 shrink-0" />
                </a>

                {/* Botón 2: WhatsApp Lab (Breaking Bad x Dexter's Lab) */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-slate-950 via-[#03241b] to-slate-950 hover:from-black hover:via-[#043327] hover:to-black text-white text-xs font-bold rounded-lg border-2 border-emerald-400/90 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_20px_rgba(16,185,129,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 group whitespace-nowrap"
                  title="Contactar al Laboratorio por WhatsApp"
                >
                  <span className="relative flex items-center justify-center">
                    <FlaskConical className="w-4 h-4 text-lime-400 group-hover:rotate-12 transition-transform" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse absolute -top-0.5 -right-0.5" />
                  </span>
                  <span className="tracking-wide">¡Quiero mi plataforma!</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} JurisNova International · Cokito&apos;s Lab. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-3">
            <span>Madrid · London · Lisbon</span>
            <span>·</span>
            <span className="text-emerald-700 font-semibold">EU Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
