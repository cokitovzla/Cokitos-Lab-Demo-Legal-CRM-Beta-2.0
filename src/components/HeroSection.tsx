import React from 'react';
import { ArrowDown, ChevronRight, CheckCircle2, ShieldCheck, Globe2, Building2 } from 'lucide-react';
import { trackClick } from '../lib/analytics';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onStartDiagnosis: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartDiagnosis,
  onExploreServices,
}) => {
  const { language, t } = useLanguage();

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 border-b border-slate-200">
      {/* Background subtle architectural grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0b192c 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Architectural Kicker */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2.5">
              <span className="text-[#0071ce] font-bold flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-[#0071ce]" />
                JurisNova International
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700 font-medium">Cokito&apos;s Lab European Branch</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">{language === 'es' ? 'PYME & Scaleups' : 'Cross-Border'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-3 sm:mb-4 text-balance">
              {t.hero.titleLine1} <br className="hidden sm:inline" />
              {t.hero.titleLine2} <br className="hidden sm:inline" />
              <span className="text-[#0071ce]">{t.hero.titleLine3}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-5 sm:mb-6">
              {t.hero.subtitle}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              <button
                onClick={() => {
                  trackClick('hero', 'hacer_diagnostico_gratuito');
                  onStartDiagnosis();
                }}
                data-track-section="hero"
                data-track-name="cta_diagnostico_hero"
                className="w-full sm:w-auto px-5 py-2.5 sm:py-3 bg-[#0071ce] hover:bg-[#0060b0] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group active:scale-[0.99] whitespace-nowrap cursor-pointer"
              >
                <span>{t.hero.btnDiagnosis}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  trackClick('hero', 'explorar_que_hacemos');
                  onExploreServices();
                }}
                data-track-section="hero"
                data-track-name="cta_explorar_servicios"
                className="w-full sm:w-auto px-4 py-2.5 sm:py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium text-xs sm:text-sm rounded-xl shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>{t.hero.btnServices}</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-y-1.5 gap-x-5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0071ce] shrink-0" />
                <span>{language === 'es' ? 'Transparencia de tarifas fijas' : 'Clear fixed-fee pricing'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0071ce] shrink-0" />
                <span>{language === 'es' ? 'Respuesta en menos de 24h hábiles' : 'Under 24h business response'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0071ce] shrink-0" />
                <span>{language === 'es' ? 'Estándar normativo europeo (RGPD & UE)' : 'European regulatory standards'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: European Legal Architecture Presentation Card */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg relative p-5 sm:p-6 space-y-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-[#0071ce] border border-blue-200">
                  {t.hero.cardBadge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Madrid · London · EU
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-2">
                <h3 className="text-lg font-display font-bold text-slate-950">
                  {t.hero.cardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.hero.cardDesc}
                </p>
              </div>

              {/* Service Pillars List */}
              <div className="space-y-2.5 pt-1">
                {[
                  t.hero.cardItem1,
                  t.hero.cardItem2,
                  t.hero.cardItem3
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-[#0071ce] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* European Branch Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                <div className="p-2 rounded-lg bg-slate-50">
                  <div className="text-sm font-extrabold text-slate-900">24-48h</div>
                  <div className="text-[10px] text-slate-500">{language === 'es' ? 'Resolución' : 'Turnaround'}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <div className="text-sm font-extrabold text-[#0071ce]">100%</div>
                  <div className="text-[10px] text-slate-500">{language === 'es' ? 'Digital / CRM' : 'Online Sync'}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <div className="text-sm font-extrabold text-emerald-700">UE + UK</div>
                  <div className="text-[10px] text-slate-500">{language === 'es' ? 'Cobertura' : 'Jurisdiction'}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
