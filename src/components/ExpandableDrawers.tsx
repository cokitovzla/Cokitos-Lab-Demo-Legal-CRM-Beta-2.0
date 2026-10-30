import React from 'react';
import { Sparkles, BookOpen, ChevronDown, ChevronUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { DiagnosticSection } from './DiagnosticSection';
import { BlogSection } from './BlogSection';
import { Lead, LegalArea } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ExpandableDrawersProps {
  isDiagnosticOpen: boolean;
  onToggleDiagnostic: () => void;
  isBlogOpen: boolean;
  onToggleBlog: () => void;
  onNewLeadCreated: (lead: Lead) => Promise<boolean> | void;
  preselectedArea: LegalArea | null;
  onOpenAuth?: (mode?: 'login' | 'register' | 'newsletter') => void;
}

export const ExpandableDrawers: React.FC<ExpandableDrawersProps> = ({
  isDiagnosticOpen,
  onToggleDiagnostic,
  isBlogOpen,
  onToggleBlog,
  onNewLeadCreated,
  preselectedArea,
  onOpenAuth,
}) => {
  const { language, t } = useLanguage();

  return (
    <section className="py-6 sm:py-8 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

        {/* 1. Gaveta Desplegable: Diagnóstico Legal Preventivo */}
        <div id="diagnostico" className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all scroll-mt-24">
          <div 
            onClick={onToggleDiagnostic}
            className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors select-none"
            role="button"
            tabIndex={0}
            aria-expanded={isDiagnosticOpen}
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0071ce] border border-blue-200 flex items-center justify-center shrink-0 shadow-2xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0071ce] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {t.drawers.diagnosticBadge}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {language === 'es' ? '100% Interactivo · Sin compromiso' : '100% Interactive · Free'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-950">
                  {t.drawers.diagnosticTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-1">
                  {t.drawers.diagnosticSubtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                isDiagnosticOpen 
                  ? 'bg-slate-200 text-slate-800 hover:bg-slate-300' 
                  : 'bg-[#0071ce] text-white hover:bg-[#005fb0] shadow-xs'
              }`}
            >
              <span>{isDiagnosticOpen ? t.drawers.diagnosticCtaClose : t.drawers.diagnosticCtaOpen}</span>
              {isDiagnosticOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expanded Drawer Content */}
          {isDiagnosticOpen && (
            <div className="p-3 sm:p-6 border-t border-slate-200 bg-slate-50/50 animate-in fade-in duration-300">
              <DiagnosticSection
                onNewLeadCreated={onNewLeadCreated}
                preselectedArea={preselectedArea}
              />
            </div>
          )}
        </div>

        {/* 2. Gaveta Desplegable: Blog & Criterio Jurídico */}
        <div id="blog" className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all scroll-mt-24">
          <div 
            onClick={onToggleBlog}
            className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors select-none"
            role="button"
            tabIndex={0}
            aria-expanded={isBlogOpen}
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-700 border border-slate-300 flex items-center justify-center shrink-0 shadow-2xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {t.drawers.blogBadge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                    {language === 'es' ? 'Publicaciones periódicas para PYMES' : 'Briefings for global founders'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-950">
                  {t.drawers.blogTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-1">
                  {t.drawers.blogSubtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                isBlogOpen 
                  ? 'bg-slate-200 text-slate-800 hover:bg-slate-300' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xs'
              }`}
            >
              <span>{isBlogOpen ? t.drawers.blogCtaClose : t.drawers.blogCtaOpen}</span>
              {isBlogOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expanded Drawer Content */}
          {isBlogOpen && (
            <div className="p-3 sm:p-6 border-t border-slate-200 bg-slate-50/50 animate-in fade-in duration-300">
              <BlogSection onOpenAuth={onOpenAuth} />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
