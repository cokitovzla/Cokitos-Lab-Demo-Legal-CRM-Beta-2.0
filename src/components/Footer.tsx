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
  HelpCircle
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

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 text-center sm:text-left">
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
