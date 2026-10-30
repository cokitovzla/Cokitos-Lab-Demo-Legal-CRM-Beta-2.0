import React from 'react';
import { Compass, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="por-que" className="py-8 sm:py-10 lg:py-12 bg-[#0B192C] text-white border-b border-slate-800 relative overflow-hidden scroll-mt-20">
      {/* Subtle blueprint tech pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header: Explaining why modernizing legal solutions is crucial */}
        <div className="w-full max-w-4xl mb-6 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-sky-400 uppercase mb-2 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-400/20">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.why.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-[1.15] mb-2 sm:mb-3">
            {t.why.title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal">
            {t.why.subtitle}
          </p>
        </div>

        {/* 3 Core Pillars with adjacent documentary visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Visual Editorial Box */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full min-h-[220px] sm:min-h-[260px] lg:min-h-[360px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg relative group flex flex-col justify-end">
              <img
                src="/src/assets/images/team_legal_consultation_1792518328026.jpg"
                alt="Mesa de trabajo y asesoría estratégica JurisNova International"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/95 via-[#0B192C]/60 to-transparent pointer-events-none" />
              
              <div className="relative p-4 sm:p-5 text-white">
                <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono uppercase text-sky-400 font-bold tracking-wider mb-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>{t.why.quoteBadge}</span>
                </div>
                <blockquote className="text-xs sm:text-sm font-medium leading-snug text-slate-100 italic">
                  &ldquo;{t.why.quote}&rdquo;
                </blockquote>
                <div className="mt-3 pt-2.5 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">{t.why.quoteAuthor}</span>
                  <span className="text-sky-400 font-medium text-[11px]">{t.why.quoteRole}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars Editorial List: The 'Why' to convince clients */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
            
            {/* Pillar 01 */}
            <div className="p-4 sm:p-4.5 rounded-xl bg-[#0e223b]/90 border border-slate-700/80 hover:bg-[#132c4d] hover:border-sky-400/60 shadow-xs hover:shadow-md transition-all duration-200 group/pillar">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded transition-colors group-hover/pillar:bg-sky-400 group-hover/pillar:text-[#0B192C]">
                  {t.why.p1Num}
                </span>
                <span className="text-slate-500 font-bold text-xs">/</span>
                <h3 className="text-sm sm:text-base font-display font-bold text-white group-hover/pillar:text-sky-200 transition-colors flex items-center gap-1.5">
                  <span>{t.why.p1Title}</span>
                  <Zap className="w-3.5 h-3.5 text-sky-400 shrink-0 hidden sm:inline" />
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 group-hover/pillar:text-white transition-colors leading-relaxed">
                {t.why.p1Desc}
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="p-4 sm:p-4.5 rounded-xl bg-[#0e223b]/90 border border-slate-700/80 hover:bg-[#132c4d] hover:border-sky-400/60 shadow-xs hover:shadow-md transition-all duration-200 group/pillar">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded transition-colors group-hover/pillar:bg-sky-400 group-hover/pillar:text-[#0B192C]">
                  {t.why.p2Num}
                </span>
                <span className="text-slate-500 font-bold text-xs">/</span>
                <h3 className="text-sm sm:text-base font-display font-bold text-white group-hover/pillar:text-sky-200 transition-colors flex items-center gap-1.5">
                  <span>{t.why.p2Title}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 hidden sm:inline" />
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 group-hover/pillar:text-white transition-colors leading-relaxed">
                {t.why.p2Desc}
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="p-4 sm:p-4.5 rounded-xl bg-[#0e223b]/90 border border-slate-700/80 hover:bg-[#132c4d] hover:border-sky-400/60 shadow-xs hover:shadow-md transition-all duration-200 group/pillar">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded transition-colors group-hover/pillar:bg-sky-400 group-hover/pillar:text-[#0B192C]">
                  {t.why.p3Num}
                </span>
                <span className="text-slate-500 font-bold text-xs">/</span>
                <h3 className="text-sm sm:text-base font-display font-bold text-white group-hover/pillar:text-sky-200 transition-colors">
                  {t.why.p3Title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 group-hover/pillar:text-white transition-colors leading-relaxed">
                {t.why.p3Desc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
