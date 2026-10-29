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

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectAreaForDiagnosis }) => {
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

  return (
    <section id="que-hacemos" className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header: Cokito's Lab recommended modular architecture */}
        <div className="w-full max-w-4xl mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0071ce] uppercase mb-2 bg-blue-50 px-3 py-1 rounded-md border border-blue-200/60">
            <Briefcase className="w-3.5 h-3.5 text-[#0071ce]" />
            <span>Módulos de Práctica Recomendados por Cokito&apos;s Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight mb-3">
            Acompañamiento legal estratégico y modular
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Estas son las <strong>áreas de práctica prioritarias</strong> que recomendamos estructurar en tu plataforma: módulos de alta demanda y recurrencia diseñados para que tus clientes soliciten asesoría societaria, blindaje de activos intelectuales, contratos laborales, compliance regulatorio y mediación comercial de forma ágil, transparente y conectada a tu CRM interno.
          </p>
        </div>

        {/* Asymmetric Bento / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {BINLEGAL_SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                onClick={() => {
                  trackServiceInteraction(service.id, service.title, 'view_details');
                  setSelectedService(service);
                }}
                data-track-section="servicios"
                data-track-name={`servicio_${service.id}`}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#0071ce]/60 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group active:scale-[0.99]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0071ce] flex items-center justify-center group-hover:bg-[#0B192C] group-hover:text-white transition-all shadow-2xs">
                      {SERVICE_ICONS[service.id]}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0071ce] tabular-nums bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Módulo {service.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-950 mb-1.5 group-hover:text-[#0071ce] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-800 mb-2.5">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-[#0071ce] transition-colors">
                  <span className="flex items-center gap-1">
                    <span>Ver alcance & entregables</span>
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0071ce] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-2xl rounded-2xl border border-neutral-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-start justify-between bg-neutral-50/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0071ce] border border-blue-100 flex items-center justify-center shadow-xs shrink-0">
                  {SERVICE_ICONS[selectedService.id]}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#0071ce] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Módulo Recomendado {selectedService.number}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-neutral-950 leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/60 transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-700">
              <div>
                <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Enfoque Estratégico Recomendado
                </h4>
                <p className="leading-relaxed text-neutral-800">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Entregables Principales Incluidos
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
              <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80">
                <h4 className="text-xs font-semibold text-amber-950 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Riesgos si tu empresa no atiende esta área oportunamente</span>
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
                <strong>Momento Ideal:</strong> {selectedService.idealStage}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-4 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <span className="text-xs text-neutral-500">
                Diagnóstico express interactivo disponible sin compromiso
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-3.5 py-2 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    trackServiceInteraction(selectedService.id, selectedService.title, 'select');
                    handleStartInArea(selectedService);
                  }}
                  data-track-section="servicios_modal"
                  data-track-name={`solicitar_diagnostico_${selectedService.id}`}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-[#0071ce] hover:bg-[#0060b0] rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
                >
                  Probar Diagnóstico en esta área
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
