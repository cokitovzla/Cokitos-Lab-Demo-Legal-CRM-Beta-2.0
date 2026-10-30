import React, { useState } from 'react';
import { BINLEGAL_SERVICES } from '../data/initialData';
import { ServiceDetail, LegalArea } from '../types';
import { 
  Building, 
  Lightbulb, 
  Scale, 
  Users, 
  Handshake, 
  FileText, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  AlertTriangle,
  Briefcase,
  Sparkles 
} from 'lucide-react';
import { trackServiceInteraction } from '../lib/analytics';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onSelectAreaForDiagnosis: (area: LegalArea) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'corporativo': <Building className="w-4 h-4 transition-colors" />,
  'propiedad-intelectual': <Lightbulb className="w-4 h-4 transition-colors" />,
  'regulatorio': <Scale className="w-4 h-4 transition-colors" />,
  'laboral': <Users className="w-4 h-4 transition-colors" />,
  'negociacion-mediacion': <Handshake className="w-4 h-4 transition-colors" />,
  'otros-servicios': <FileText className="w-4 h-4 transition-colors" />
};

const SERVICE_KEY_MAP: Record<string, string> = {
  'corporativo': 'corporate',
  'propiedad-intelectual': 'ip',
  'regulatorio': 'regulatory',
  'laboral': 'labor',
  'negociacion-mediacion': 'mediation',
  'otros-servicios': 'contracts'
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectAreaForDiagnosis }) => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const handleStartInArea = (service: ServiceDetail) => {
    let areaName: LegalArea = 'Corporativo';
    if (service.id === 'propiedad-intelectual') areaName = 'Propiedad Intelectual';
    if (service.id === 'regulatorio') areaName = 'Regulatorio';
    if (service.id === 'laboral') areaName = 'Laboral';
    if (service.id === 'negociacion-mediacion') areaName = 'Mediación';
    if (service.id === 'otros-servicios') areaName = 'Contratos';

    setSelectedService(null);
    onSelectAreaForDiagnosis(areaName);
  };

  const getTranslatedService = (service: ServiceDetail) => {
    const key = SERVICE_KEY_MAP[service.id];
    const trans = t.services.items?.[key];
    if (!trans) return service;
    return {
      ...service,
      title: trans.title,
      shortDescription: trans.shortDesc,
      fullDescription: trans.fullDesc,
      keyDeliverables: trans.deliverables,
      commonRisks: trans.risks,
      idealStage: trans.stage
    };
  };

  return (
    <section id="que-hacemos" className="py-8 sm:py-10 lg:py-12 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header: Cokito's Lab recommended modular architecture */}
        <div className="w-full max-w-4xl mb-6 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0071ce] uppercase mb-2 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
            <Briefcase className="w-3.5 h-3.5 text-[#0071ce]" />
            <span>{t.services.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight mb-2 sm:mb-3">
            {t.services.title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
            {t.services.subtitle}
          </p>
        </div>

        {/* Asymmetric Bento / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
          {BINLEGAL_SERVICES.map((rawService) => {
            const service = getTranslatedService(rawService);

            return (
              <div
                key={rawService.id}
                onClick={() => {
                  trackServiceInteraction(rawService.id, service.title, 'view_details');
                  setSelectedService(service);
                }}
                data-track-section="servicios"
                data-track-name={`servicio_${rawService.id}`}
                className="bg-white rounded-2xl p-4.5 sm:p-5 border border-slate-200/90 hover:border-[#0071ce]/60 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.99]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0071ce] flex items-center justify-center group-hover:bg-[#0B192C] group-hover:text-white transition-all shadow-2xs">
                      {SERVICE_ICONS[rawService.id]}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0071ce] tabular-nums bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {t.services.moduleLabel} {rawService.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-950 mb-1.5 group-hover:text-[#0071ce] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#0071ce] font-semibold flex items-center gap-1 group-hover:underline">
                    <span>Ver alcance y entregables</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#0071ce] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0071ce] border border-blue-100 flex items-center justify-center shadow-xs shrink-0">
                  {SERVICE_ICONS[selectedService.id]}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#0071ce] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{t.services.moduleLabel} {selectedService.number}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-extrabold text-neutral-950 leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/60 transition-colors cursor-pointer"
                aria-label={t.services.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 text-xs sm:text-sm text-neutral-700">
              <div>
                <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  {t.services.approachLabel}
                </h4>
                <p className="leading-relaxed text-neutral-800">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  {t.services.deliverablesLabel}
                </h4>
                <ul className="space-y-1.5">
                  {selectedService.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0071ce] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Risks if not handled */}
              <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200/80">
                <h4 className="text-xs font-semibold text-amber-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.services.risksLabel}</span>
                </h4>
                <ul className="space-y-1 text-xs text-amber-900">
                  {selectedService.commonRisks.map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-mono">·</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-neutral-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <strong>{t.services.idealStageLabel}</strong> {selectedService.idealStage}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="text-[11px] text-neutral-500">
                {t.services.modalHint}
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  {t.services.closeModal}
                </button>
                <button
                  onClick={() => {
                    trackServiceInteraction(selectedService.id, selectedService.title, 'select');
                    handleStartInArea(selectedService);
                  }}
                  data-track-section="servicios_modal"
                  data-track-name={`solicitar_diagnostico_${selectedService.id}`}
                  className="w-full sm:w-auto px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0071ce] hover:bg-[#0060b0] rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
                >
                  {t.services.ctaDiagnosisModal}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
