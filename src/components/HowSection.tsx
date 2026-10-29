import React, { useState } from 'react';
import { Search, FileCheck, Sparkles, Check, ArrowRight, Workflow, Zap, ShieldCheck } from 'lucide-react';

interface HowSectionProps {
  onStartDiagnosis: () => void;
}

export const HowSection: React.FC<HowSectionProps> = ({ onStartDiagnosis }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Captación & Triaje Inteligente',
      subtitle: 'Diagnóstico express y semáforo automático de riesgos',
      icon: <Search className="w-4 h-4 text-sky-600" />,
      description: 'El cliente potencial completa una evaluación ágil de 4 minutos. El algoritmo perfila su situación, detecta contingencias críticas en 6 áreas del negocio y sincroniza la solicitud en el CRM interno.',
      deliverables: [
        'Formulario interactivo guiado adaptado al mercado europeo y global',
        'Cálculo instantáneo de riesgo (0 a 100) con semáforo de prioridades',
        'Registro automático del contacto y aviso al equipo asignado'
      ],
      timeframe: 'Inmediato (Tiempo Real)'
    },
    {
      number: '02',
      title: 'Estructuración & Propuesta a Medida',
      subtitle: 'Repositorio seguro de recaudos y presupuesto cerrado',
      icon: <FileCheck className="w-4 h-4 text-emerald-600" />,
      description: 'Se habilita un canal seguro para cargar documentos y validar estatutos o contratos sin pérdidas de información. Se genera una propuesta transparente con honorarios claros y sin sorpresas.',
      deliverables: [
        'Revisión documental ágil de pactos, marcas o relaciones laborales',
        'Presupuesto cerrado por fases y cotizaciones transparentes',
        'Asignación del abogado líder y apertura de expediente en el CRM'
      ],
      timeframe: '24 a 48 horas hábiles'
    },
    {
      number: '03',
      title: 'Ejecución & Seguimiento en Vivo',
      subtitle: 'Tablero de hitos, entregables y trazabilidad total',
      icon: <Sparkles className="w-4 h-4 text-blue-600" />,
      description: 'El trámite se ejecuta con absoluta claridad: el cliente visualiza el avance de cada hito y los abogados controlan tareas, revisiones y firmas en el panel de expedientes.',
      deliverables: [
        'Tablero kanban operativo con estatus actualizado en directo',
        'Entrega y custodia digital de escrituras, contratos y registros',
        'Acompañamiento preventivo continuo y alertas tempranas'
      ],
      timeframe: 'Trazabilidad continua'
    }
  ];

  return (
    <section id="como" className="py-12 sm:py-16 lg:py-20 bg-slate-50/90 border-b border-slate-200 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="w-full max-w-4xl mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0071ce] uppercase mb-2 bg-blue-50 px-3 py-1 rounded-md border border-blue-200/60">
            <Workflow className="w-3.5 h-3.5 text-[#0071ce]" />
            <span>Metodología Cokito&apos;s Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight mb-3">
            Soluciones legales alternativas: un flujo de trabajo moderno y sin fricciones
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Eliminamos la burocracia y los plazos indeterminados de la asesoría tradicional. Nuestra metodología integra herramientas de triaje inteligente con un CRM operativo que conecta cada solicitud con una respuesta rápida y estructurada.
          </p>
        </div>

        {/* 3 Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`bg-white rounded-2xl p-5 sm:p-6 border transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-lg active:scale-[0.99] ${
                  isSelected 
                    ? 'border-[#0071ce] ring-2 ring-[#0071ce]/20 shadow-md' 
                    : 'border-slate-200/90 hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md ${
                      isSelected ? 'bg-[#0071ce] text-white shadow-xs' : 'bg-slate-100 text-slate-700'
                    }`}>
                      Paso {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-950 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0071ce] mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-2 font-semibold">
                      Lo que obtienes:
                    </div>
                    <ul className="space-y-2">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Plazo estimado:</span>
                  <span className="font-semibold text-slate-800">{step.timeframe}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with CTA to test the diagnosis */}
        <div className="mt-8 sm:mt-10 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0071ce] flex items-center justify-center shrink-0 border border-blue-100">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-display font-bold text-slate-950">
                ¿Quieres comprobar cómo funciona el flujo en tiempo real?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Realiza el diagnóstico preventivo interactivo y observa cómo la solicitud aparece de inmediato en el Panel CRM.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onStartDiagnosis}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#0071ce] hover:bg-[#0060b0] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>Probar Diagnóstico Interactivo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
