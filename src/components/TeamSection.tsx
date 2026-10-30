import React, { useState } from 'react';
import { BINLEGAL_TEAM } from '../data/initialData';
import { TeamMember } from '../types';
import { Award, Mail, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { trackClick } from '../lib/analytics';
import { useLanguage } from '../context/LanguageContext';

export const TeamSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Founder is at the top banner; specialists in the grid are the other 4 partners
  const founder = BINLEGAL_TEAM.find(m => m.id === 'daniel-eduardo-perez') || BINLEGAL_TEAM[0];
  const specialists = BINLEGAL_TEAM.filter(m => m.id !== 'daniel-eduardo-perez');

  const handleOpenMember = (member: TeamMember) => {
    trackClick('equipo', `ver_perfil_${member.id}`);
    setSelectedMember(member);
  };

  return (
    <section id="equipo" className="py-8 sm:py-10 lg:py-12 bg-white border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="w-full mb-6 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0071ce] uppercase mb-2 bg-blue-50 px-2.5 py-1 rounded-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0071ce]" />
            <span>{t.team.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight mb-2 sm:mb-3">
            {t.team.title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-4xl">
            {t.team.subtitle}
          </p>
        </div>

        {/* Highlight Banner: Daniel Eduardo Pérez as Founder & Managing Director */}
        <div 
          onClick={() => handleOpenMember(founder)}
          className="w-full bg-gradient-to-r from-[#0B192C] via-[#0e274a] to-[#005fb0] text-white rounded-3xl p-5 sm:p-7 md:p-8 shadow-md border border-blue-900/60 mb-6 sm:mb-8 cursor-pointer group transition-all duration-300 hover:shadow-lg active:scale-[0.99]"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 lg:gap-6">
            
            {/* Circular Photo of Founder */}
            <div className="relative shrink-0">
              <img
                src={founder.photoUrl}
                alt={founder.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-blue-400/40 border-2 border-white/30 shadow-md transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0B192C] rounded-full shadow-sm" title="Abogado Titular Activo" />
            </div>

            {/* Founder Biography & Credentials */}
            <div className="flex-1 min-w-0 text-center md:text-left space-y-2.5">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/25 text-blue-200 border border-blue-400/30">
                  {t.team.founderBadge}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-blue-200/90 font-mono">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{founder.experience}</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                  {founder.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-200 font-medium mt-0.5">
                  {founder.specialty}
                </p>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10 max-w-3xl">
                &ldquo;{t.team.founderQuote}&rdquo;
              </blockquote>

              <div className="pt-1.5 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackClick('equipo', 'solicitar_consulta_fundador');
                  }}
                  className="px-4 py-2 bg-[#0071ce] hover:bg-[#0084f0] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.team.founderCta}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleOpenMember(founder)}
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.team.founderProfileBtn}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Specialists Row: Adapts fully to the section width in white cards without Daniel duplicate */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-3.5">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
              {t.team.specialistsBadge}
            </h4>
            <span className="text-[11px] text-slate-500 font-mono">4 socios especialistas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {specialists.map((member) => {
              const initials = member.name.split(' ').map(n => n[0]).slice(0, 2).join('');

              return (
                <div
                  key={member.id}
                  onClick={() => handleOpenMember(member)}
                  className="bg-white rounded-2xl p-4.5 border border-slate-200/90 hover:border-[#0071ce]/60 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group active:scale-[0.99]"
                >
                  <div>
                    {/* Member Top: Circular Avatar + Role */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative shrink-0">
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-blue-100 border border-slate-200 shadow-xs group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-display font-bold text-xs hidden">
                          {initials}
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-[#0071ce] block w-fit truncate">
                          {member.role.split('·')[0].trim()}
                        </span>
                        <h4 className="text-sm font-display font-bold text-slate-950 mt-1 truncate group-hover:text-[#0071ce] transition-colors">
                          {member.name}
                        </h4>
                        <div className="text-[11px] text-[#0071ce] font-medium truncate">
                          {member.role.includes('·') ? member.role.split('·')[1].trim() : member.role}
                        </div>
                      </div>
                    </div>

                    {/* Member Specialty */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-slate-500 font-mono truncate">
                      {member.experience}
                    </span>
                    <span className="text-[11px] font-bold text-[#0071ce] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 shrink-0">
                      <span>Ver ficha</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-lg rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-5 sm:p-6 animate-in zoom-in-95">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={selectedMember.photoUrl}
                  alt={selectedMember.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500/30 border border-slate-200 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-[#0071ce]">
                    {selectedMember.role}
                  </span>
                  <h3 className="text-lg font-display font-extrabold text-slate-950 mt-1">
                    {selectedMember.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono">
                    {selectedMember.experience}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">Área de Experticia:</div>
                <div className="text-slate-900 font-semibold">{selectedMember.specialty}</div>
              </div>
              <p className="leading-relaxed text-slate-600">
                {selectedMember.bio}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`mailto:${selectedMember.email}`}
                className="text-xs text-[#0071ce] font-semibold hover:underline"
              >
                {selectedMember.email}
              </a>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
